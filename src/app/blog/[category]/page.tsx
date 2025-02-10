import React from 'react';

import Blog from '@/modules/blog';
import { getBlogPosts } from '@/services/blog';
import { BlogCategory } from '@/types/blog';

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
