'use client';

import Link from 'next/link';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/shadcn/tabs';
import { BLOG_CATEGORIES } from '@/config/blog';
import { useSegmentPath } from '@/hooks/useSegmentPath';

const BlogCategoryTab = () => {
	const segmentPath = useSegmentPath();

	return (
		<Tabs defaultValue={segmentPath}>
			<TabsList>
				{BLOG_CATEGORIES.map((category) => (
					<Link key={category.value} href={category.href}>
						<TabsTrigger value={category.value}>{category.label}</TabsTrigger>
					</Link>
				))}
			</TabsList>
		</Tabs>
	);
};

export default BlogCategoryTab;
