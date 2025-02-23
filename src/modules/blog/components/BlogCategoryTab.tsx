'use client';

import Link from 'next/link';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BLOG_CATEGORIES_TAB } from '@/config/blog';
import { useSegmentPath } from '@/hooks/useSegmentPath';

const BlogCategoryTab = () => {
	const segmentPath = useSegmentPath();

	return (
		<Tabs defaultValue={segmentPath}>
			<TabsList>
				{BLOG_CATEGORIES_TAB.map((category) => (
					<Link key={category.value} href={category.href}>
						<TabsTrigger value={category.value}>{category.label}</TabsTrigger>
					</Link>
				))}
			</TabsList>
		</Tabs>
	);
};

export default BlogCategoryTab;
