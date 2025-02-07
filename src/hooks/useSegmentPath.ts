'use client';

import { usePathname } from 'next/navigation';

export const useSegmentPath = () => {
	const pathname = usePathname();
	return pathname.split('/').filter(Boolean).pop();
};
