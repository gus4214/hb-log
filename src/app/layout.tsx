import './globals.css';

import type { Metadata } from 'next';

import MainLayout from '@/components/layouts/MainLayout';

export const metadata: Metadata = {
	title: 'HB log',
	description: 'Personal WebSite',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}
