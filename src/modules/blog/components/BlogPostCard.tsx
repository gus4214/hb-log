'use client';

import Link from 'next/link';
import { FC } from 'react';

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { BlogItem } from '@/types/blog';

type BlogPostCardProps = Omit<BlogItem, 'id'>;

const BlogPostCard: FC<BlogPostCardProps> = ({ slug, title, category, description, date }) => {
	return (
		<Link href={`/article/${slug}`} scroll={false}>
			<Card className='overflow-hidden'>
				{/* <div className='relative w-full h-52'>
					<Image src={thumbnail} alt={title} layout='fill' objectFit='cover' />
				</div> */}
				<CardContent className='pt-4'>
					<span className='text-xs'>{category}</span>
					<CardTitle className='mt-3'>{title}</CardTitle>
					<CardDescription className='mt-2'>{description}</CardDescription>
					<CardDescription className='mt-2'>{date}</CardDescription>
				</CardContent>
			</Card>
		</Link>
	);
};

export default BlogPostCard;
