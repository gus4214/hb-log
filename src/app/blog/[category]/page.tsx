import React from 'react';

import { BlogCategory } from '@/config/blog';
import { getBlogPosts } from '@/lib/notion';

const BlogCategoryPage = async ({ params }: { params: { category: BlogCategory } }) => {
	const { category } = params;
	const posts = await getBlogPosts(category);

	return <div>{category}</div>;
};

export const generateStaticParams = async () => {
	const categories = ['tech', 'essay'];
	return categories.map((category) => ({
		category,
	}));
};

export default BlogCategoryPage;
