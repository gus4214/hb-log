'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { CardDescription, CardTitle } from '@/components/ui/card';
import { BlogItem } from '@/types/blog';

type BlogPostCardProps = Omit<BlogItem, 'id'>;

const BlogPostCard: FC<BlogPostCardProps> = ({ slug, title, category, description, date, thumbnail, blurDataURL }) => {
	return (
		<Link href={`/article/${slug}`} className='flex w-full py-8 group'>
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className='relative overflow-hidden w-32 h-20 rounded-lg'
			>
				<Image
					src={thumbnail}
					alt='thumbnail'
					layout='fill'
					objectFit='cover'
					placeholder='blur'
					blurDataURL={blurDataURL}
					className='transition-all duration-300 ease-in-out delay-0 scale-100 group-hover:scale-110'
				/>
			</motion.div> */}
			<div className='flex flex-col gap-2 w-[calc(100%-4rem)]'>
				<CardTitle>{title}</CardTitle>
				<CardDescription className='transition-all duration-300 ease group-hover:text-black dark:group-hover:text-white'>
					{description}
				</CardDescription>
				<CardDescription className='pt-1 transition-all duration-300 ease group-hover:text-black dark:group-hover:text-white'>{`${category} • ${date}`}</CardDescription>
			</div>
		</Link>
	);
};

export default BlogPostCard;
