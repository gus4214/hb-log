import './globals.css';

import type { Metadata } from 'next';

import MainLayout from '@/components/layouts/MainLayout';
import { ThemeProvider } from '@/components/provider/ThemeProvider';

export const metadata: Metadata = {
	title: 'HB log',
	description: 'Personal WebSite',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='min-h-svh bg-background font-sans antialiased'>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
					<MainLayout>{children}</MainLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}
