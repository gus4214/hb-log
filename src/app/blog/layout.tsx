import { Metadata } from 'next';
import { ReactNode } from 'react';

import { SITE_CONFIG } from '@/config/site';
import BlogBanner from '@/modules/blog/components/BlogBanner';

export const metadata: Metadata = {
	description: SITE_CONFIG.blog.description,
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
