import BlogPostCard from '@/modules/blog/components/BlogPostCard';

const samplePosts = [
	{ id: 1, src: '/sample.png', title: '블로그 제목', category: '개발', date: '2025.01.23' },
	{ id: 2, src: '/sample.png', title: '블로그 제목', category: '개발', date: '2025.01.23' },
	{ id: 3, src: '/sample.png', title: '블로그 제목', category: '개발', date: '2025.01.23' },
];

const Blog = () => {
	return (
		<>
			{/* 블로그 포스팅 리스트 */}
			<div className='flex flex-col gap-6'>
				<header>
					<h2 className='text-base'>총 50개의 포스트가 있어요.</h2>
				</header>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1'>
					{samplePosts.map((post) => (
						<BlogPostCard key={post.id} src={post.src} title={post.title} category={post.category} date={post.date} />
					))}
				</ul>
			</div>
		</>
	);
};

export default Blog;
