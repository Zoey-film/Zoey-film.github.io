// Add your projects here. Both the homepage and /projects read from this list.
// For image-heavy work, put images in src/assets/ and use Astro's <Image>.

export interface Project {
	title: string;
	description: string;
	link: string;
	tags: string[];
}

export const projects: Project[] = [
	{
		title: 'Flick',
		description: 'AI-native visual storytelling tool with a node-based canvas.',
		link: 'https://flick.art',
		tags: ['React', 'TypeScript', 'AI'],
	},
	{
		title: 'Shanshui',
		description:
			'Seasonal poetry site pairing classical Chinese verse with full-screen artwork, open to community submissions.',
		link: 'https://github.com/Zoey-film/shanshui',
		tags: ['Flask', 'Python', 'JavaScript'],
	},
];
