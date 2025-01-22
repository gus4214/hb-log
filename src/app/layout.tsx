import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/common/components/layouts';

export const metadata: Metadata = {
	title: 'HB log',
	description: 'Personal WebSite',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
