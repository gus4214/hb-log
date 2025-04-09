import './globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import MainLayout from '@/components/layouts/MainLayout';
import { ThemeProvider } from '@/components/provider/ThemeProvider';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
	title: {
		default: SITE_CONFIG.name,
		template: `%s | ${SITE_CONFIG.name}`,
	},
	metadataBase: new URL(SITE_CONFIG.url),
	description: SITE_CONFIG.description,
	creator: '@hyunbeom',
	openGraph: {
		type: 'website',
		locale: 'ko-KR',
		url: SITE_CONFIG.url,
		title: SITE_CONFIG.name,
		description: SITE_CONFIG.description,
		siteName: SITE_CONFIG.name,
		images: [
			{
				url: SITE_CONFIG.ogImage,
				width: 1200,
				height: 630,
				alt: SITE_CONFIG.name,
			},
		],
	},
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
