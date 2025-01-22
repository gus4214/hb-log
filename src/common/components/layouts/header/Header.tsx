import GradientText from '@/common/components/typography/GradientText';
import { MENU_ITEMS } from '@/common/constant/menu';
import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<div className='container mx-auto flex items-center justify-between px-8 py-6'>
				{/* Logo */}
				<Link href='/' aria-label='HB log - Homepage'>
					<GradientText as='h1' className='text-2xl'>
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
		</header>
	);
};

export default Header;
