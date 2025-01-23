import Image from 'next/image';
import { FC } from 'react';

interface BlogBannerProps {
	src: string;
	title: string;
	subTitle: string;
}

const BlogBanner: FC<BlogBannerProps> = ({ src, title, subTitle }) => {
	return (
		<div className='relative w-full h-64 md:h-96'>
			{/* 배경 이미지 */}
			<Image src={src} alt='배너 이미지' layout='fill' objectFit='cover' quality={100} priority />

			{/* 그라디언트 오버레이 */}
			<div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>

			{/* 배너 텍스트 */}
			<div className='absolute bottom-4 left-4 text-white z-20 p-4'>
				<h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>
				<p className='mt-2'>{subTitle}</p>
			</div>
		</div>
	);
};

export default BlogBanner;
