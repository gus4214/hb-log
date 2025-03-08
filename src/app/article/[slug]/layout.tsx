import { ReactNode } from 'react';

import { PageHeaderDescription, PageHeaderHeading, PageImageHeader, PageImageHeaderContent } from '@/components/ui/page-header';
import { SITE_CONFIG } from '@/config/site';
import ArticleBanner from '@/modules/article/components/ArticleBanner';
import ArticleMetaInfo from '@/modules/article/components/ArticleMetaInfo';
import { getBlogArticleHeaderInfo, getBlogPosts } from '@/services/blog';

const ArticlePageLayout = async ({ children, params }: { children: ReactNode; params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	// const { title, description, date, category, thumbnail, blurDataURL } = await getBlogArticleHeaderInfo(slug);
	const articleHeaderInfo = await getBlogArticleHeaderInfo(slug);

	return (
		<>
			{/* <PageImageHeader src={thumbnail || SITE_CONFIG.blog.bannerImage} blurDataURL={blurDataURL} imageClassName='filter brightness-50'>
				<PageImageHeaderContent className='container-article'>
					<ArticleMetaInfo category={category} date={date} />
					<PageHeaderHeading>{title}</PageHeaderHeading>
					<PageHeaderDescription>{description}</PageHeaderDescription>
				</PageImageHeaderContent>
			</PageImageHeader> */}
			<ArticleBanner {...articleHeaderInfo} />
			<div className='my-20'>{children}</div>
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
