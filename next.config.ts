import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */

	images: {
		domains: ['secure.notion-static.com', 's3-us-west-2.amazonaws.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.s3.us-west-2.amazonaws.com',
			},
		],
	},
};

export default nextConfig;
