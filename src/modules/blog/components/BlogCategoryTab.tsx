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
					<Link key={category.value} href={category.href} className='group'>
						<TabsTrigger value={category.value} className='gap-2'>
							<span className='transform transition-transform duration-300 group-hover:scale-110'>{category.icon}</span>
							<span className='relative'>
								{category.label}
								<span
									className='absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-400 dark:bg-zinc-500 transition-all duration-300 group-hover:w-full'
									style={{
										backgroundImage: 'linear-gradient(to right, #4B5563 50%, transparent 50%)',
										backgroundSize: '8px 100%',
										backgroundRepeat: 'repeat-x',
									}}
								/>
							</span>
						</TabsTrigger>
					</Link>
				))}
			</TabsList>
		</Tabs>
	);
};

export default BlogCategoryTab;
