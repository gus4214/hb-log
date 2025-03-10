import { ReactNode } from 'react';

import ArticleBanner from '@/modules/article/components/ArticleBanner';
import { getBlogArticleHeaderInfo, getBlogPosts } from '@/services/blog';

const ArticlePageLayout = async ({ children, params }: { children: ReactNode; params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const articleHeaderInfo = await getBlogArticleHeaderInfo(slug);

	return (
		<>
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
