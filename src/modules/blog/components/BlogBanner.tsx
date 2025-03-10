'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { PageActions, PageHeaderContent, PageHeaderDescription, PageHeaderHeading } from '@/components/ui/page-header';
import { SITE_CONFIG } from '@/config/site';
import BlogCategoryTab from '@/modules/blog/components/BlogCategoryTab';
const BlogBanner = () => {
	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className='relative h-[420px] md:h-[520px] -mt-14'
		>
			<PageHeaderContent>
				<PageHeaderHeading>{SITE_CONFIG.blog.title}</PageHeaderHeading>
				<PageHeaderDescription>{SITE_CONFIG.blog.description}</PageHeaderDescription>
				<PageActions>
					<BlogCategoryTab />
				</PageActions>
			</PageHeaderContent>
			<Image src={SITE_CONFIG.blog.bannerImage} alt='배너 이미지' layout='fill' objectFit='cover' quality={100} priority />
			<div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent'></div>
		</motion.header>
	);
};

export default BlogBanner;
