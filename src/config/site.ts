export const SITE_CONFIG = {
	name: 'HB',
	url: process.env.NEXT_PUBLIC_SITE_URL as string,
	ogImage: '/images/og-image.png',
	description: 'Unstoppable development story',
	blog: {
		title: 'HB Log',
		description: '멈추지 않는 개발 이야기',
		bannerImage: '/images/blog-banner.png',
	},
};

export type SiteConfig = typeof SITE_CONFIG;
