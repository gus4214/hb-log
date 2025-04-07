'use client';

import Image from 'next/image';
import React, { FC, useState } from 'react';

import { PageHeaderContent, PageHeaderDescription, PageHeaderHeading } from '@/components/ui/page-header';
import { SITE_CONFIG } from '@/config/site';
import ArticleMetaInfo from '@/modules/article/components/ArticleMetaInfo';
import { ArticleHeaderInfo } from '@/types/blog';

type ArticleBannerProps = ArticleHeaderInfo;

const ArticleBanner: FC<ArticleBannerProps> = ({ title, description, date, category, thumbnail, blurDataURL }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	return (
		<header className='-mt-14'>
			<PageHeaderContent className='container-article'>
				<ArticleMetaInfo category={category} date={date} />
				<PageHeaderHeading>{title}</PageHeaderHeading>
				<PageHeaderDescription>{description}</PageHeaderDescription>
			</PageHeaderContent>
			{/* <Image
				src={thumbnail || SITE_CONFIG.blog.bannerImage}
				alt='배너 이미지'
				layout='fill'
				objectFit='cover'
				quality={80}
				priority
				loading='eager'
				placeholder='blur'
				blurDataURL={blurDataURL}
				className={`transition-all duration-1000 ease-in-out ${isLoaded ? 'brightness-50' : 'brightness-90'}`}
				onLoadingComplete={() => setIsLoaded(true)}
			/> */}
		</header>
	);
};

export default ArticleBanner;
