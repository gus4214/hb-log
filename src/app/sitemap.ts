import { MetadataRoute } from 'next';

import { SITE_CONFIG } from '@/config/site';
import { getBlogPosts } from '@/services/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = SITE_CONFIG.url;
	const currentDate = new Date().toISOString();

	// 기본 페이지 URL
	const routes = [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'daily' as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: currentDate,
			changeFrequency: 'daily' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog/tech`,
			lastModified: currentDate,
			changeFrequency: 'weekly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/essay`,
			lastModified: currentDate,
			changeFrequency: 'weekly' as const,
			priority: 0.7,
		},
	];

	// 블로그 포스트 URL
	const posts = await getBlogPosts();
	const postUrls = posts.map((post) => ({
		url: `${baseUrl}/article/${post.slug}`,
		lastModified: post.date,
		changeFrequency: 'monthly' as const,
		priority: 0.6,
	}));

	return [...routes, ...postUrls];
}
