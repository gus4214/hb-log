import { ReactNode } from 'react';

import { PageActions, PageHeaderDescription, PageHeaderHeading, PageImageHeader, PageImageHeaderContent } from '@/components/ui/page-header';
import { SITE_CONFIG } from '@/config/site';
import BlogCategoryTab from '@/modules/blog/components/BlogCategoryTab';

const BlogPageLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<PageImageHeader src={SITE_CONFIG.blog.bannerImage} imageBlackShadow>
				<PageImageHeaderContent>
					<PageHeaderHeading>{SITE_CONFIG.blog.title}</PageHeaderHeading>
					<PageHeaderDescription>{SITE_CONFIG.blog.description}</PageHeaderDescription>
					<PageActions>
						<BlogCategoryTab />
					</PageActions>
				</PageImageHeaderContent>
			</PageImageHeader>
			<main id='blog' className='container py-10'>
				{children}
			</main>
		</>
	);
};

export default BlogPageLayout;
