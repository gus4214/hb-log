import { ReactNode } from 'react';

import { PageHeaderDescription, PageHeaderHeading, PageImageHeader, PageImageHeaderContent } from '@/components/ui/page-header';
import { SITE_CONFIG } from '@/config/site';
import ArticleMetaInfo from '@/modules/article/components/ArticleMetaInfo';
import { getBlogArticleHeaderInfo, getBlogPosts } from '@/services/blog';

const ArticlePageLayout = async ({ children, params }: { children: ReactNode; params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const { title, description, date, category, thumbnail } = await getBlogArticleHeaderInfo(slug);

	return (
		<>
			<PageImageHeader src={thumbnail || SITE_CONFIG.blog.bannerImage}>
				<PageImageHeaderContent className='container-article'>
					<ArticleMetaInfo category={category} date={date} />
					<PageHeaderHeading>{title}</PageHeaderHeading>
					<PageHeaderDescription>{description}</PageHeaderDescription>
				</PageImageHeaderContent>
			</PageImageHeader>
			<>{children}</>
		</>
	);
};

export const generateStaticParams = async () => {
	const posts = await getBlogPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
};

export default ArticlePageLayout;
