import { FC, ReactNode } from 'react';

interface ContainerProps {
	children: ReactNode;
	className?: string;
	[propName: string]: ReactNode | string | undefined;
}

const Container: FC<ContainerProps> = ({ children, className = '', ...others }) => {
	return (
		<div className={`p-8 ${className}`} {...others}>
			{children}
		</div>
	);
};

export default Container;
