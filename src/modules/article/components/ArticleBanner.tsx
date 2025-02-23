import { Calendar, PenTool } from 'lucide-react';
import Image from 'next/image';

const ArticleBanner = () => {
	return (
		<>
			<div className='relative w-full h-[420px] md:h-[520px] -mt-14'>
				{/* 배경 이미지 */}
				<Image src={'/story.webp'} alt='배너 이미지' layout='fill' objectFit='cover' quality={100} priority />
				{/* 그라디언트 오버레이 */}
				<div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent'></div>

				{/* 배너 텍스트 */}
				<div className='absolute z-20 w-full h-80 md:h-96'>
					<div className='container flex flex-col justify-end h-full pb-16 gap-4'>
						<div className='flex gap-1 items-center'>
							<div className='flex gap-1 items-center'>
								<PenTool className='text-white' size={14} />
								<span className='text-white text-sm'>essay</span>
							</div>
							<span className='text-white text-sm'>•</span>
							<div className='flex gap-1 items-center'>
								<Calendar className='text-white' size={14} />
								<span className='text-white text-sm'>2023. 04. 12</span>
							</div>
						</div>
						<div className='flex flex-col gap-2 items-center md:items-start'>
							<h1 className='text-2xl md:text-4xl font-bold text-white'>코드는 0과 1로 이루어진 스토리다</h1>
							<p className='text-sm md:text-base text-white'>인상깊었던 영화의 한 장면을 계기로 코드에 관한 저의 가치관을 정립해봤습니다.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ArticleBanner;
