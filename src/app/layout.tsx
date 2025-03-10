import './globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import MainLayout from '@/components/layouts/MainLayout';
import { ThemeProvider } from '@/components/provider/ThemeProvider';

export const metadata: Metadata = {
	title: 'HB Log',
	description: 'Personal WebSite',
	icons: {
		icon: '/favicon/favicon.ico',
		shortcut: '/favicon/favicon-16x16.png',
		apple: '/favicon/apple-touch-icon.png',
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='min-h-svh bg-background font-sans antialiased'>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
					<MainLayout>{children}</MainLayout>
				</ThemeProvider>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
