import { Metadata } from 'next';
import { ReactNode } from 'react';

import { SITE_CONFIG } from '@/config/site';
import BlogBanner from '@/modules/blog/components/BlogBanner';

export const metadata: Metadata = {
	title: `블로그 | ${SITE_CONFIG.name}`,
	description: SITE_CONFIG.blog.description,
	openGraph: {
		title: `블로그 | ${SITE_CONFIG.name}`,
		description: SITE_CONFIG.blog.description,
		url: `${SITE_CONFIG.url}/blog`,
		type: 'website',
		images: [
			{
				url: SITE_CONFIG.blog.bannerImage,
				width: 1200,
				height: 630,
				alt: SITE_CONFIG.blog.title,
			},
		],
	},
};

const BlogPageLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<BlogBanner />
			<main id='blog' className='container py-10'>
				{children}
			</main>
		</>
	);
};

export default BlogPageLayout;
