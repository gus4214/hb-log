import { ElementType, FC, ReactNode } from 'react';

interface GradientTextProps {
	children: ReactNode;
	className?: string;
	as?: ElementType;
}

const GradientText: FC<GradientTextProps> = ({ children, className, as: Component = 'span' }) => {
	return (
		<Component
			className={`font-semibold leading-8 tracking-normal bg-gradient-to-r from-[#FF6B0A] to-[#A855F7] bg-clip-text text-transparent ${className}`}
		>
			{children}
		</Component>
	);
};

export default GradientText;
