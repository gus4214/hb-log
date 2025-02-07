export type BlogCategory = 'tech' | 'essay';

type BlogCategories = {
	value: BlogCategory;
	label: string;
	href: string;
};

export const BLOG_CATEGORIES = [
	{ value: 'blog', label: '전체', href: '/blog' },
	{ value: 'tech', label: '개발', href: '/blog/tech' },
	{ value: 'essay', label: '에세이', href: '/blog/essay' },
] as BlogCategories[];
