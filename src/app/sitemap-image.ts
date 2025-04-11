import { MetadataRoute } from 'next';

import { SITE_CONFIG } from '@/config/site';
import { getBlogPosts } from '@/services/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = SITE_CONFIG.url;
	const currentDate = new Date().toISOString();

	// 블로그 포스트 URL과 이미지
	const posts = await getBlogPosts();
	const postUrls = posts.map((post) => ({
		url: `${baseUrl}/article/${post.slug}`,
		lastModified: new Date().toISOString(),
		changeFrequency: 'monthly' as const,
		priority: 0.6,
		images: [post.thumbnail],
	}));

	// 블로그 배너 이미지
	const blogBannerUrl = {
		url: `${baseUrl}/blog`,
		lastModified: currentDate,
		changeFrequency: 'weekly' as const,
		priority: 0.8,
		images: [SITE_CONFIG.blog.bannerImage],
	};

	return [...postUrls, blogBannerUrl];
}
