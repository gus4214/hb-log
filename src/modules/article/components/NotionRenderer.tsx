'use client';

import 'katex/dist/katex.min.css'; // 공식등 수학적 기호 스타일용 (선택)
import 'prismjs/themes/prism-tomorrow.css';
import 'react-notion-x/src/styles.css'; // 노션 스타일 (필수)

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ExtendedRecordMap } from 'notion-types';
import { FC } from 'react';
import { NotionRenderer as _NotionRenderer } from 'react-notion-x';

import { useIsMounted } from '@/hooks/useIsMounted';

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection));
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation));

interface NotionRendererProps {
	recordMap: ExtendedRecordMap;
}

const NotionRenderer: FC<NotionRendererProps> = ({ recordMap }) => {
	const { resolvedTheme } = useTheme();

	const mounted = useIsMounted();

	if (!mounted) return null;

	return (
		<_NotionRenderer
			darkMode={resolvedTheme === 'dark'}
			recordMap={recordMap}
			showTableOfContents
			previewImages
			components={{ Code, Collection, Equation, nextImage: Image, nextLink: Link }}
		/>
	);
};

export default NotionRenderer;
