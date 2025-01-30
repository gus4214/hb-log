'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';

import { Button } from '@/components/ui/shadcn/button';

const ThemeSwitcher = () => {
	const { setTheme, resolvedTheme } = useTheme();

	const handleToggleTheme = useCallback(() => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
	}, [resolvedTheme, setTheme]);

	return (
		<Button variant='ghost' className='group/toggle h-8 w-8 px-0' onClick={handleToggleTheme}>
			<SunIcon className='hidden [html.dark_&]:block' />
			<MoonIcon className='hidden [html.light_&]:block' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
};

export default ThemeSwitcher;
