import { ReactNode } from 'react';

import { getBlogArticleHeaderInfo, getBlogPosts } from '@/services/blog';

const ArticlePageLayout = async ({ children, params }: { children: ReactNode; params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const { title, description, date } = await getBlogArticleHeaderInfo(slug);

	return (
		<>
			<header>블로그 제목, 날짜 등 배치</header>
			<section>{children}</section>
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
