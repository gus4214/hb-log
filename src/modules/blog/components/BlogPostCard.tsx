import Image from 'next/image';
import { FC } from 'react';

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/Card';

interface BlogPostCardProps {
	src: string;
	title: string;
	category: string;
	date: string;
}

const BlogPostCard: FC<BlogPostCardProps> = ({ src, title, category, date }) => {
	return (
		<>
			<Card className='overflow-hidden'>
				<div className='relative w-full h-52'>
					<Image src={src} alt={title} layout='fill' objectFit='cover' />
				</div>
				<CardContent className='pt-4'>
					<span className='text-xs'>{category}</span>
					<CardTitle className='mt-3'>{title}</CardTitle>
					<CardDescription className='mt-2'>{date}</CardDescription>
				</CardContent>
			</Card>
		</>
	);
};

export default BlogPostCard;
