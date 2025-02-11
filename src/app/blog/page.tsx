import Blog from '@/modules/blog';
import { getBlogPosts } from '@/services/blog';

const BlogPage = async () => {
	const posts = await getBlogPosts();

	return (
		<>
			<Blog posts={posts} />
		</>
	);
};

export default BlogPage;
