import { ReactNode } from 'react';

import Header from '@/components/layouts/header/Header';

interface LayoutProps {
	children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='flex flex-col'>
				<Header />
				<main className='flex-grow'>{children}</main>
			</div>
		</div>
	);
};

export default MainLayout;
