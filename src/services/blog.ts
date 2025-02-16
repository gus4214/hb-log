import { Client } from '@notionhq/client';
import { BlockObjectResponse, GetPageResponse, PartialBlockObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

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
			slug: extractProperty(properties.slug),
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

export const getPageIdFromSlug = async (slug: string): Promise<string> => {
	if (!NOTION_BLOG_API) {
		throw new Error('Missing Notion Database ID');
	}

	const response = await notion.databases.query({
		database_id: NOTION_BLOG_API,
		filter: {
			property: 'slug',
			rich_text: {
				equals: slug,
			},
		},
	});

	if (response.results.length === 0) {
		throw new Error(`No page found for slug: ${slug}`);
	}

	return response.results[0].id;
};

export const getBlogPostDetail = async (slug: string) => {
	const pageId = await getPageIdFromSlug(slug);
	return await getNotionBlogDetail(pageId);
};

export const getNotionBlogDetail = async (
	pageId: string
): Promise<{
	page: GetPageResponse;
	blocks: (PartialBlockObjectResponse | BlockObjectResponse)[];
}> => {
	// 페이지 메타데이터 조회
	const page = await notion.pages.retrieve({ page_id: pageId });

	// 페이지 콘텐츠 블록 조회 (한 번에 최대 100개, 필요한 경우 pagination 고려)
	const blocksResponse = await notion.blocks.children.list({
		block_id: pageId,
		page_size: 100,
	});

	return {
		page,
		blocks: blocksResponse.results,
	};
};
