import { ReactNode } from 'react';

import ArticleBanner from '@/modules/article/components/ArticleBanner';
import { getBlogArticleHeaderInfo, getBlogPosts } from '@/services/blog';

const ArticlePageLayout = async ({ children, params }: { children: ReactNode; params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const { title, description, date } = await getBlogArticleHeaderInfo(slug);

	return (
		<>
			<ArticleBanner />
			<main className='mt-10'>{children}</main>
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
