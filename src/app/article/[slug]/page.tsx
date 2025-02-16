import { NotionAPI } from 'notion-client';

import Article from '@/modules/article';
import { getBlogPosts, getPageIdFromSlug } from '@/services/blog';

const ArticlePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const notion = new NotionAPI();

	const pageId = await getPageIdFromSlug(slug);
	const recordMap = await notion.getPage(pageId);

	return (
		<>
			<Article recordMap={recordMap} />
		</>
	);
};

export const generateStaticParams = async () => {
	const posts = await getBlogPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
};

export default ArticlePage;
