export type BlogCategory = 'tech' | 'essay';

export interface BlogItem {
	id: string;
	slug: string;
	title: string;
	description: string;
	category: BlogCategory;
	date: string;
}
