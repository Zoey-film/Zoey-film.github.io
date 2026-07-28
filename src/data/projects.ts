// Add your projects here. Both the homepage and /works read from this list.
//
// For a cover image: drop the file into src/assets/ and set `cover` to its
// filename — /works picks it up automatically, no other code to touch.

export interface Project {
	title: string;
	description: string;
	link: string;
	tags: string[];
	/** Filename inside src/assets/ (e.g. 'flick.png'). Optional. */
	cover?: string;
	/**
	 * CSS aspect-ratio matching the cover's own shape, e.g. '16 / 9' for a
	 * product screenshot or '3 / 4' for a portrait shot. Defaults to '16 / 9'
	 * below since most covers here are landscape screenshots.
	 */
	ratio?: string;
}

export const projects: Project[] = [
	{
		title: 'Flick',
		description: 'AI-native visual storytelling tool with a node-based canvas.',
		link: 'https://flick.art',
		tags: ['React', 'TypeScript', 'AI'],
		cover: 'flick.png',
		ratio: '16 / 9',
	},
];
