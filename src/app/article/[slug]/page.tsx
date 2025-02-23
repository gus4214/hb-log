import Article from '@/modules/article';
import { getRecordMapForRenderer } from '@/services/notion';

const ArticlePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;

	const recordMap = await getRecordMapForRenderer(slug);

	return <Article recordMap={recordMap} />;
};

export default ArticlePage;
