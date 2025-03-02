import { ReactNode } from 'react';

import Header from '@/components/layouts/header/Header';

interface LayoutProps {
	children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
	return (
		<div className='flex flex-1 flex-col'>
			<Header />
			<div className='flex flex-1 flex-col'>{children}</div>
		</div>
	);
};

export default MainLayout;
