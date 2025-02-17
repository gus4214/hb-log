import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

import { extractProperty, NotionProperty } from '@/lib/notion';
import { getBlogPageProperties, queryBlogDatabase } from '@/services/notion';
import { ArticleHeaderInfo, BlogCategory, BlogItem } from '@/types/blog';

export const getBlogPosts = async (category?: BlogCategory): Promise<BlogItem[]> => {
	const response = await queryBlogDatabase(category || '');

	return mapNotionResponseToBlogItems(response);
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

export const getBlogArticleHeaderInfo = async (slug: string): Promise<ArticleHeaderInfo> => {
	const properties = await getBlogPageProperties(slug);

	return {
		title: extractProperty(properties.title),
		description: extractProperty(properties.description),
		date: extractProperty(properties.date),
	};
};
