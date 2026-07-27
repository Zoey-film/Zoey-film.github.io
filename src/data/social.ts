// Social links shown on the homepage. The label is what visitors see — the
// URL stays in the href — so add a new platform by adding a line here.

export interface SocialLink {
	label: string;
	href: string;
}

export const social: SocialLink[] = [
	{ label: 'X (Twitter)', href: 'https://x.com/ZoeyZ1004' },
	{ label: 'Instagram', href: 'https://www.instagram.com/zhiyuz06/' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/z0ey' },
];
