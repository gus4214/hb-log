import { Metadata } from 'next';
import React from 'react';

import { SITE_CONFIG } from '@/config/site';
import Blog from '@/modules/blog';
import { getBlogPosts } from '@/services/blog';
import { BlogCategory } from '@/types/blog';

export async function generateMetadata({ params }: { params: { category: BlogCategory } }): Promise<Metadata> {
	const { category } = params;
	const categoryTitle = category === 'tech' ? '개발' : '에세이';

	return {
		title: `${categoryTitle} | ${SITE_CONFIG.name}`,
		description: `${categoryTitle} 카테고리의 블로그 포스트 목록입니다.`,
		openGraph: {
			title: `${categoryTitle} | ${SITE_CONFIG.name}`,
			description: `${categoryTitle} 카테고리의 블로그 포스트 목록입니다.`,
			url: `${SITE_CONFIG.url}/blog/${category}`,
			type: 'website',
		},
	};
}

const BlogCategoryPage = async ({ params }: { params: Promise<{ category: BlogCategory }> }) => {
	const { category } = await params;
	const posts = await getBlogPosts(category);

	return (
		<>
			<Blog posts={posts} />
		</>
	);
};

export const generateStaticParams = async () => {
	const categories: BlogCategory[] = ['tech', 'essay'];
	return categories.map((category) => ({ category }));
};

export default BlogCategoryPage;
