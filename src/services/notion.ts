import { Client } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';

import { NotionProperty } from '@/lib/notion';

const NOTION_BLOG_DATABASE_ID = process.env.NOTION_DATABASE_BLOG_ID;

const notionClient = new Client({ auth: process.env.NOTION_TOKEN });

export const queryBlogDatabase = async (category: string): Promise<QueryDatabaseResponse> => {
	if (!NOTION_BLOG_DATABASE_ID) {
		throw new Error('Missing Notion Database ID');
	}

	return await notionClient.databases.query({
		database_id: NOTION_BLOG_DATABASE_ID,
		filter: {
			property: 'category',
			select: {
				equals: category,
			},
		},
		sorts: [{ property: 'date', direction: 'descending' }],
	});
};

export const getBlogPageProperties = async (slug: string) => {
	const pageId = await getBlogPageIdFromSlug(slug);
	const page = await notionClient.pages.retrieve({ page_id: pageId });

	if (!('properties' in page)) {
		throw new Error('Page does not have properties');
	}

	const properties = page.properties as Record<string, NotionProperty>;

	return properties;
};

export const getRecordMapForRenderer = async (slug: string): Promise<ExtendedRecordMap> => {
	const notion = new NotionAPI();
	const pageId = await getBlogPageIdFromSlug(slug);

	return await notion.getPage(pageId);
};

export const getBlogPageIdFromSlug = async (slug: string): Promise<string> => {
	if (!NOTION_BLOG_DATABASE_ID) {
		throw new Error('Missing Notion Database ID');
	}

	const response = await notionClient.databases.query({
		database_id: NOTION_BLOG_DATABASE_ID,
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
