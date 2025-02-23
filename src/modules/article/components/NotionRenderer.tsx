'use client';

import 'react-notion-x/src/styles.css'; // 노션 스타일 (필수)
import 'prismjs/themes/prism.css'; // 코드 하이라이트 스타일 (선택)
import 'katex/dist/katex.min.css'; // 공식등 수학적 기호 스타일용 (선택)

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ExtendedRecordMap } from 'notion-types';
import { FC } from 'react';
import { NotionRenderer as _NotionRenderer } from 'react-notion-x';

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection));
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation));
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
	ssr: false,
});
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
	ssr: false,
});

interface NotionRendererProps {
	recordMap: ExtendedRecordMap;
}

const NotionRenderer: FC<NotionRendererProps> = ({ recordMap }) => {
	return (
		<_NotionRenderer
			recordMap={recordMap}
			darkMode
			showTableOfContents
			components={{ Code, Collection, Equation, Pdf, Modal, nextImage: Image, nextLink: Link }}
		/>
	);
};

export default NotionRenderer;
