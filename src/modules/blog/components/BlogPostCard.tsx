import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { CardDescription, CardTitle } from '@/components/ui/card';
import { BlogItem } from '@/types/blog';

type BlogPostCardProps = Omit<BlogItem, 'id'>;

const BlogPostCard: FC<BlogPostCardProps> = async ({ slug, title, category, description, date, thumbnail, blurDataURL }) => {
	return (
		<Link href={`/article/${slug}`} scroll={false} className='flex w-full py-8 group'>
			<div className='relative overflow-hidden w-32 h-20 rounded-lg'>
				<Image
					src={thumbnail}
					alt='thumbnail'
					layout='fill'
					objectFit='cover'
					placeholder='blur'
					blurDataURL={blurDataURL}
					className='transition-all duration-300 ease transform scale-100 group-hover:scale-110'
				/>
			</div>
			<div className='flex flex-col gap-2 pl-5 w-[calc(100%-4rem)]'>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
				<CardDescription className='pt-1'>{`${category} • ${date}`}</CardDescription>
			</div>
		</Link>
	);
};

export default BlogPostCard;
