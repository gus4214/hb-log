import { DatabaseObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

import { generateRemoteBlurDataURL } from '@/lib/imagePlaceholder';
import { extractProperty, NotionProperty } from '@/lib/notion';
import { getBlogPageProperties, queryBlogDatabase } from '@/services/notion';
import { ArticleHeaderInfo, BlogCategory, BlogItem } from '@/types/blog';

export const getBlogPosts = async (category?: BlogCategory): Promise<BlogItem[]> => {
	const response = await queryBlogDatabase(category || '');

	return mapNotionResponseToBlogItems(response);
};

export function mapNotionResponseToBlogItems(response: QueryDatabaseResponse): Promise<BlogItem[]> {
	const posts: Promise<BlogItem[]> = Promise.all(
		response.results.map(async (page) => {
			if (!('properties' in page)) {
				throw new Error('Page does not have properties');
			}

			const properties = page.properties as Record<string, NotionProperty>;
			// const thumbnail = extractProperty(properties.thumbnail);
			const cover = (page as DatabaseObjectResponse).cover as { type: 'file'; file: { url: string; expiry_time: string } };
			const thumbnail = cover.file.url;
			const blurDataURL = await generateRemoteBlurDataURL(thumbnail);

			return {
				id: page.id,
				slug: extractProperty(properties.slug),
				title: extractProperty(properties.title),
				description: extractProperty(properties.description),
				category: extractProperty(properties.category) as BlogCategory,
				date: extractProperty(properties.date),
				thumbnail,
				blurDataURL,
			};
		})
	);

	return posts;
}

export const getBlogArticleHeaderInfo = async (slug: string): Promise<ArticleHeaderInfo> => {
	const properties = await getBlogPageProperties(slug);

	const thumbnail = extractProperty(properties.thumbnail);
	const blurDataURL = await generateRemoteBlurDataURL(thumbnail);

	return {
		title: extractProperty(properties.title),
		description: extractProperty(properties.description),
		date: extractProperty(properties.date),
		category: extractProperty(properties.category) as BlogCategory,
		thumbnail,
		blurDataURL,
	};
};
