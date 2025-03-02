import { ExtendedRecordMap } from 'notion-types';

import NotionRenderer from '@/modules/article/components/NotionRenderer';

const Article = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
	return (
		<div>
			<NotionRenderer recordMap={recordMap} />
		</div>
	);
};

export default Article;
