import { FC } from 'react';
import Image from 'next/image';

interface BlogPostCardProps {
	src: string;
	title: string;
	category: string;
	date: string;
}

const BlogPostCard: FC<BlogPostCardProps> = ({ src, title, category, date }) => {
	return (
		<div className='rounded-xl shadow-md overflow-hidden'>
			<div className='relative w-full h-48'>
				<Image src={src} alt={title} layout='fill' objectFit='cover' />
			</div>
			<div className='p-4'>
				<span className='text-xs'>{category}</span>
				<h3 className='mt-2 text-lg font-semibold'>{title}</h3>
				<p className='mt-1 text-gray-500 text-sm'>{date}</p>
			</div>
		</div>
	);
};

export default BlogPostCard;
