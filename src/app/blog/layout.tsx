import React, { ReactNode } from 'react';

import BlogBanner from '@/modules/blog/components/BlogBanner';

const BlogPageLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<BlogBanner src='/sample.png' title='블로그 제목' subTitle='블로그 서브 타이틀 또는 설명' />
			<div className='container-wrapper'>
				<div className='container py-10'>
					<main id='blog'>{children}</main>
				</div>
			</div>
		</>
	);
};

export default BlogPageLayout;
