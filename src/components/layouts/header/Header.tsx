import Link from 'next/link';

import ThemeSwitcher from '@/components/layouts/header/ThemeSwitcher';
import GradientText from '@/components/ui/GradientText';

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
					{/* TODO: 네비바는 MVP 제외로 우선 주석 처리 */}
					{/* <MainNavBar /> */}
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	);
};

export default Header;
