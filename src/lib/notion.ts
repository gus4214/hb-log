import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

// 블로그 글 목록 가져오기
export async function getBlogPosts(category: '' | 'essay' | 'tech') {
	if (!process.env.NOTION_DATABASE_ID) {
		throw new Error('Missing Notion Database ID');
	}

	const response = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID,
		// 정렬, 필터 등 옵션을 추가 가능
		filter: {
			property: 'category',
			select: {
				equals: category,
			},
		},
	});

	return response.results;
}
