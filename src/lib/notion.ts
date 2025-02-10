import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

type DateResponse = {
	start: string;
	end: string | null;
	time_zone: string | null;
};

type SelectColor = 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
type PartialSelectResponse = {
	id: string;
	name: string;
	color: SelectColor;
};

export type NotionProperty =
	| {
			type: 'title';
			title: Array<RichTextItemResponse>;
			id: string;
	  }
	| {
			type: 'rich_text';
			rich_text: Array<RichTextItemResponse>;
			id: string;
	  }
	| {
			type: 'select';
			select: PartialSelectResponse | null;
			id: string;
	  }
	| {
			type: 'date';
			date: DateResponse | null;
			id: string;
	  };

export function extractProperty(property: NotionProperty) {
	if (!property) {
		return '';
	}
	switch (property.type) {
		case 'title':
			return property.title[0].plain_text || '';
		case 'rich_text':
			return property.rich_text?.[0]?.plain_text || '';
		case 'select':
			return property.select?.name || '';
		case 'date':
			return property.date?.start || '';
		default:
			return '';
	}
}
