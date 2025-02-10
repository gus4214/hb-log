import { Client } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

import { extractProperty, NotionProperty } from '@/lib/notion';
import { BlogCategory, BlogItem } from '@/types/blog';

const NOTION_BLOG_API = process.env.NOTION_DATABASE_BLOG_ID;

const notion = new Client({ auth: process.env.NOTION_TOKEN });

// 노션 블로그 글 목록 가져오기
export const getNotionBlogApi = async (category?: BlogCategory): Promise<QueryDatabaseResponse> => {
	if (!NOTION_BLOG_API) {
		throw new Error('Missing Notion Database ID');
	}

	const response = await notion.databases.query({
		database_id: NOTION_BLOG_API,
		// 정렬, 필터 등 옵션을 추가 가능
		filter: {
			property: 'category',
			select: {
				equals: category || '',
			},
		},
	});

	return response;
};

export function mapNotionResponseToBlogItems(response: QueryDatabaseResponse): BlogItem[] {
	const posts = response.results.map((page) => {
		if (!('properties' in page)) {
			throw new Error('Page does not have properties');
		}

		const properties = page.properties as Record<string, NotionProperty>;

		return {
			id: page.id,
			title: extractProperty(properties.title),
			description: extractProperty(properties.description),
			category: extractProperty(properties.category) as BlogCategory,
			date: extractProperty(properties.date),
		};
	});

	return posts;
}

export const getBlogPosts = async (category?: BlogCategory): Promise<BlogItem[]> => {
	const response = await getNotionBlogApi(category);

	return mapNotionResponseToBlogItems(response);
};
