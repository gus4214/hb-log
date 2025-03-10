import { ReactNode } from 'react';

import BlogBanner from '@/modules/blog/components/BlogBanner';

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
