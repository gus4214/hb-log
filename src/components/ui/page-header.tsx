import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<header className={className} {...props}>
			<div className='container flex flex-col items-start gap-1 py-8 md:py-10'>{children}</div>
		</header>
	);
}

async function PageImageHeader({
	src,
	blurDataURL,
	imageClassName,
	imageBlackShadow,
	children,
}: {
	src: string;
	blurDataURL?: string;
	imageClassName?: string;
	imageBlackShadow?: boolean;
	children: ReactNode;
}) {
	const imagePlaceHolder = {
		...(blurDataURL && { placeholder: 'blur', blurDataURL }),
	} as { placeholder?: PlaceholderValue; blurDataURL?: string };

	return (
		<header className={cn('relative h-[420px] md:h-[520px] -mt-14')}>
			{children}
			<Image src={src} alt='배너 이미지' layout='fill' objectFit='cover' quality={100} priority {...imagePlaceHolder} className={imageClassName} />
			{imageBlackShadow && <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent'></div>}
		</header>
	);
}
function PageHeaderContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className='relative z-10 mt-14'>
			<div className={cn('container flex flex-col items-start gap-2 py-8 md:py-10 mt-44', className)} {...props}>
				{children}
			</div>
		</div>
	);
}

function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
	return <h1 className={cn('text-2xl md:text-4xl font-bold text-white', className)} {...props} />;
}

function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
	return <p className={cn('text-sm md:text-base text-white', className)} {...props} />;
}

function PageActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn('flex w-full items-center justify-start gap-2 pt-4', className)} {...props} />;
}

export { PageActions, PageHeader, PageHeaderContent, PageHeaderDescription, PageHeaderHeading, PageImageHeader };
