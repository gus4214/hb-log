import BlogPostCard from '@/modules/blog/components/BlogPostCard';

const Blog = () => {
	return (
		<>
			{/* 블로그 포스팅 리스트 */}
			<section className='flex flex-col gap-6'>
				<header>
					<h5 className='text-lg'>총 50개의 포스트가 있어요.</h5>
				</header>
				<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-1'>
					<BlogPostCard src='/sample.png' title='블로그 제목' category='개발' date='2025.01.23' />
				</ul>
			</section>
		</>
	);
};

export default Blog;
