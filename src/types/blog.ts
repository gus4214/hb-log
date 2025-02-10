export type BlogCategory = 'tech' | 'essay';

export interface BlogItem {
	id: string;
	title: string;
	description: string;
	category: BlogCategory;
	date: string;
}
