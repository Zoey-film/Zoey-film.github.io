import path from 'node:path';
import sharp from 'sharp';

/**
 * Pulls the dominant colours out of an album cover so the poster's colour bar
 * can be derived from the artwork instead of hand-picked. Runs at build time.
 *
 * Colours are quantised into buckets, ranked by how much of the image they
 * cover, then ordered dark → light the way the reference posters read.
 *
 * `relPath` is relative to the project root — resolving via import.meta.url
 * would break, since during the build this module executes from dist/.
 * A cover that can't be read yields an empty palette rather than failing the
 * whole build.
 */
export async function extractPalette(relPath: string, count = 6): Promise<string[]> {
	const abs = path.resolve(process.cwd(), relPath);

	try {
		return await readPalette(abs, count);
	} catch (err) {
		console.warn(`[palette] could not read ${relPath}:`, (err as Error).message);
		return [];
	}
}

async function readPalette(abs: string, count: number): Promise<string[]> {
	const { data, info } = await sharp(abs)
		.resize(80, 80, { fit: 'cover' })
		.removeAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true });

	// Quantise so near-identical pixels collapse into one bucket.
	const STEP = 24;
	const buckets = new Map<string, { r: number; g: number; b: number; n: number }>();

	for (let i = 0; i + 2 < data.length; i += info.channels) {
		const r = data[i];
		const g = data[i + 1];
		const b = data[i + 2];
		const key = `${(r / STEP) | 0}-${(g / STEP) | 0}-${(b / STEP) | 0}`;
		const cur = buckets.get(key);
		if (cur) {
			cur.r += r;
			cur.g += g;
			cur.b += b;
			cur.n++;
		} else {
			buckets.set(key, { r, g, b, n: 1 });
		}
	}

	const ranked = [...buckets.values()]
		.sort((a, b) => b.n - a.n)
		.slice(0, count)
		.map((c) => ({
			r: Math.round(c.r / c.n),
			g: Math.round(c.g / c.n),
			b: Math.round(c.b / c.n),
		}));

	const luminance = (c: { r: number; g: number; b: number }) =>
		0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;

	return ranked
		.sort((a, b) => luminance(a) - luminance(b))
		.map(({ r, g, b }) => `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`);
}
