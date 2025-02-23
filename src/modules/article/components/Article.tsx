import { ExtendedRecordMap } from 'notion-types';

import NotionRenderer from '@/modules/article/components/NotionRenderer';

const Article = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
	return <NotionRenderer recordMap={recordMap} />;
};

export default Article;
