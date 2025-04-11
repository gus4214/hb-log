import { Metadata } from 'next';
import { ReactNode } from 'react';

import { SITE_CONFIG } from '@/config/site';
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

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
	const { slug } = await params;
	const articleHeaderInfo = await getBlogArticleHeaderInfo(slug);

	return {
		title: articleHeaderInfo.title,
		description: articleHeaderInfo.description,
		openGraph: {
			title: articleHeaderInfo.title,
			description: articleHeaderInfo.description,
			url: `${SITE_CONFIG.url}/article/${slug}`,
			type: 'article',
			publishedTime: articleHeaderInfo.date,
			authors: ['@hyunbeom'],
			images: [
				{
					url: articleHeaderInfo.thumbnail,
					width: 1200,
					height: 630,
					alt: articleHeaderInfo.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: articleHeaderInfo.title,
			description: articleHeaderInfo.description,
			images: [articleHeaderInfo.thumbnail],
		},
		alternates: {
			canonical: `${SITE_CONFIG.url}/article/${slug}`,
		},
	};
};

export const generateStaticParams = async () => {
	const posts = await getBlogPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
};

export default ArticlePageLayout;
