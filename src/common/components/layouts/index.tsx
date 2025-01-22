import Header from '@/common/components/layouts/header/Header';
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='flex flex-col'>
				<Header />
				<main>{children}</main>
			</div>
		</div>
	);
};

export default Layout;
