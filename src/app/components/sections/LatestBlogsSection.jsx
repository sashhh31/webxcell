import BlogCard from '../ui/BlogCard';
import Link from 'next/link'; // Import Link for the "View More" button

export default function LatestBlogsSection() {
  const blogPosts = [
    {
      title: 'Mobile-First Indexing: Optimizing Your Website for the Way People Browse',
      date: 'March 26, 2024',
      category: 'Branding',
      imageUrl: '/assets/blogs/blog1.png',
      href: '/blogs/mobile-first-indexing',
    },
    {
      title: 'Data-Driven Decision Making: How Analytics Can Transform Your Marketing Strategy',
      date: 'March 26, 2024',
      category: 'Branding',
      imageUrl: '/assets/blogs/blog2.png',
      href: '/blogs/data-driven-decision-making',
    },
    {
      title: 'Local SEO Strategies: How to Dominate Google Maps and Local Search Results',
      date: 'March 26, 2024',
      category: 'Branding',
      imageUrl: '/assets/blogs/blog3.png',
      href: '/blogs/local-seo-strategies',
    },
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Let's See Our Latest <br className="hidden sm:inline" />News and Blogs
          </h2>
          <Link href="/blogs" className="bg-[#FE7915] text-white font-semibold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors flex items-center">
            View More
            <span className="ml-2">↗</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              date={post.date}
              category={post.category}
              imageUrl={post.imageUrl}
              href={post.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}