import Image from 'next/image';
import { FC } from 'react';

interface BlogBannerProps {
	src: string;
	title: string;
	subTitle: string;
}

const BlogBanner: FC<BlogBannerProps> = ({ src, title, subTitle }) => {
	return (
		<div className='relative w-full h-80 md:h-96 -mt-14'>
			{/* 배경 이미지 */}
			<Image src={src} alt='배너 이미지' layout='fill' objectFit='cover' quality={100} priority />
			{/* 그라디언트 오버레이 */}
			<div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent'></div>
			{/* 배너 텍스트 */}
			<div className='absolute z-20 w-full h-80 md:h-96'>
				<div className='container flex flex-col justify-end h-full pb-16'>
					<div className='flex flex-col gap-2 items-center md:items-start'>
						<h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>
						<p className='text-sm md:text-base'>{subTitle}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogBanner;
