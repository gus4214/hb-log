import Link from 'next/link';

import GradientText from '@/components/ui/GradientText';
import { MENU_ITEMS } from '@/config/menu';

const Header = () => {
	return (
		<header className='border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container-wrapper'>
				<div className='container flex h-14 items-center justify-between'>
					{/* Logo */}
					<Link href='/' aria-label='HB log - Homepage'>
						<GradientText as='h1' className='text-xl'>
							HB log
						</GradientText>
					</Link>
					{/* Navigation */}
					<nav aria-label='Main Navigation'>
						<ul className='flex items-center gap-5'>
							{MENU_ITEMS.map((menu, index) => (
								<li key={index}>
									<Link href={menu.href} className='text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'>
										{menu.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
