import { FC } from 'react';

import BlogPostCard from '@/modules/blog/components/BlogPostCard';
import { BlogItem } from '@/types/blog';

interface BlogProps {
	posts: BlogItem[];
}

const Blog: FC<BlogProps> = ({ posts }) => {
	return (
		<>
			<div className='flex flex-col gap-6'>
				<header>
					<h2 className='text-base'>{`총 ${posts.length}개의 포스트가 있어요.`}</h2>
				</header>
				<ul>
					{posts.map((post) => (
						<BlogPostCard key={post.id} id={post.id} title={post.title} description={post.description} category={post.category} date={post.date} />
					))}
				</ul>
			</div>
		</>
	);
};

export default Blog;
