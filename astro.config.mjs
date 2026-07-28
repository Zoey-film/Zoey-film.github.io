// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Pages serves this at the lowercased host regardless of how the repo
	// name is cased. If you ever move to a differently-named repo, add:
	// base: '/repo-name',
	site: 'https://zoey-film.github.io',
	// The page moved when its label changed to WORKS — keep the old URL alive
	// for anyone holding a link from before the rename.
	redirects: {
		'/projects': '/works',
	},
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			// Body / UI — geometric sans.
			provider: fontProviders.google(),
			name: 'Jost',
			cssVariable: '--font-body',
			weights: [400, 500, 600, 700],
			styles: ['normal', 'italic'],
			subsets: ['latin'],
			fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		{
			// Headings — Japanese mincho serif. Ships a single weight (400) only,
			// so headings are set at 400 rather than faking a bold.
			provider: fontProviders.google(),
			name: 'Hina Mincho',
			cssVariable: '--font-display',
			weights: [400],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-serif', 'Georgia', 'serif'],
		},
	],
});
