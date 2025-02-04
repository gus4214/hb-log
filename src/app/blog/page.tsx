import { getBlogPosts } from '@/lib/notion';
import Blog from '@/modules/blog';

const BlogPage = async () => {
	const posts = await getBlogPosts('');

	return (
		<>
			<Blog />
		</>
	);
};

export default BlogPage;
