import { LayoutGrid, PenTool, Rocket } from 'lucide-react';
import { ReactNode } from 'react';

import { BlogCategory } from '@/types/blog';

type BlogCategoriesTab = {
	value: BlogCategory;
	label: string;
	href: string;
	icon: ReactNode;
};

export const BLOG_CATEGORIES_TAB = [
	{ value: 'blog', label: '전체', href: '/blog', icon: <LayoutGrid size={14} /> },
	{ value: 'tech', label: '개발', href: '/blog/tech', icon: <Rocket size={14} /> },
	{ value: 'essay', label: '에세이', href: '/blog/essay', icon: <PenTool size={14} /> },
] as BlogCategoriesTab[];
