import { Calendar, PenTool, Rocket } from 'lucide-react';
import { FC, ReactElement } from 'react';

import { BlogCategory } from '@/types/blog';

interface ArticleMetaInfoProps {
	category: BlogCategory;
	date: string;
}

const CATEGORY_ICON = {
	tech: <Rocket className='text-white' size={14} />,
	essay: <PenTool className='text-white' size={14} />,
} as Record<BlogCategory, ReactElement>;

const ArticleMetaInfo: FC<ArticleMetaInfoProps> = ({ category, date }) => {
	return (
		<h6 className='flex gap-1 items-center'>
			<div className='flex gap-1 items-center'>
				{CATEGORY_ICON[category]}
				<span className='text-white text-sm'>{category}</span>
			</div>
			<span className='text-white text-sm'>•</span>
			<div className='flex gap-1 items-center'>
				<Calendar className='text-white' size={14} />
				<time className='text-white text-sm'>{date}</time>
			</div>
		</h6>
	);
};

export default ArticleMetaInfo;
