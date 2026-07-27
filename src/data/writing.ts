// Writing published elsewhere. These appear alongside any local posts in
// src/content/blog/ — on the homepage Writing column and on /blog.
//
// `date` is optional but controls ordering (newest first); entries without
// one fall to the end.

export interface ExternalPost {
	title: string;
	href: string;
	/** ISO date, e.g. '2025-11-04'. */
	date?: string;
	/** Where it was published, shown as a small label. */
	publication?: string;
	description?: string;
}

export const externalWriting: ExternalPost[] = [
	{
		title: 'Why We Exist in the Age of Infinite Models',
		href: 'https://flick.art/blog/why-we-exist-in-the-age-of-infinite-models',
		publication: 'Flick',
	},
];
