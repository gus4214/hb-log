import Link from 'next/link';

import { MENU_ITEMS } from '@/config/menu';

const MainNavBar = () => {
	return (
		<nav aria-label='Main Navigation'>
			<ul className='flex items-center gap-5'>
				{MENU_ITEMS.map((menu, index) => (
					<li key={index}>
						<Link href={menu.href}>{menu.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default MainNavBar;
