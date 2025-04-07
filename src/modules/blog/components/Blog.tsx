import { FC } from 'react';

import BlogPostCard from '@/modules/blog/components/BlogPostCard';
import { BlogItem } from '@/types/blog';

interface BlogProps {
	posts: BlogItem[];
}

const Blog: FC<BlogProps> = ({ posts }) => {
	return (
		<div className='flex flex-col max-w-3xl'>
			<h2 className='text-lg'>
				📒 총 <span className='font-bold'>{posts.length}개</span>의 포스트가 있어요.
			</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<BlogPostCard {...post} thumbnail={post.thumbnail || '/blog-banner.png'} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Blog;
