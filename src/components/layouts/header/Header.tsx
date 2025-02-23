import { MessageCircleCode } from 'lucide-react';
import Link from 'next/link';

import ThemeSwitcher from '@/components/layouts/header/ThemeSwitcher';

const Header = () => {
	return (
		<div className='border-grid sticky top-0 z-50 w-full border-b backdrop-blur bg-background/95 supports-[backdrop-filter]:bg-background/60'>
			<div className='container-wrapper'>
				<div className='container flex h-14 items-center justify-between'>
					{/* Logo */}
					<nav>
						<Link href='/' aria-label='HB log - Homepage'>
							<div className='flex gap-1'>
								<span className='font-bold'>H・B</span>
								<MessageCircleCode size={20} className='pb-1' />
							</div>
						</Link>
					</nav>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	);
};

export default Header;
