import React from "react";
import Image from "next/image";
import Link from "next/link";

// This would typically come from an API or database
const blogs = [
  {
    title: "Mobile-First Indexing: Optimizing Your Website for the Way People Browse",
    date: "March 26, 2024",
    category: "Marketing",
    image: "/assets/blogs/blog1.png",
    slug: "mobile-first-indexing",
    content: `The selection of key laboratories of the Ministry of Agriculture and Rural Affairs must meet the requirements of leading agricultural industrialization enterprises or high-tech enterprises at or above the provincial level, with a leading level of technological innovation in China, mastery of core industrial technologies and independent intellectual property rights,\n\nA sound internal research and development system and intellectual property management system, strong industry radiation and driving ability, and the condition of independently establishing and operating a research team for at least two years. Bama, along with Yili, New Hope, COFCO and other groups, were jointly selected\n\nThe Key Laboratory of Oolong Tea Processing Technology of the Ministry of Agriculture and Rural Affairs is an important carrier for the innovative development of Bama Tea Industry. With the goal of enhancing independent innovation capabilities, focusing on tea industry technology research and integration transformation, strengthening the construction of innovative talent teams, improving infrastructure and equipment levels, consolidating the foundation of enterprise application research, and further consolidating the foundation and enhancing the core competitiveness of Bama Tea Industry in the field of oolong tea. Bama Tea Industry continues to deeply implement innovation-driven development strategy, driving the high-quality development of China's tea industry.`,
    author: {
      name: "Johnathon Cramier",
      title: "CEO, Webxcell.",
      avatar: "/assets/avatars/avatar1.png",
    },
  },
  {
    title: "Data-Driven Decision Making: How Analytics Can Transform Your Marketing Strategy",
    date: "March 26, 2024",
    category: "Marketing",
    image: "/assets/blogs/blog2.png",
    slug: "data-driven-decision-making",
    content: `Data-driven decision making is transforming how businesses operate in the digital age. By leveraging analytics and insights, companies can make more informed decisions that drive growth and success.\n\nThis blog explores how analytics can revolutionize your marketing strategy and help you stay ahead of the competition.`,
    author: {
      name: "Johnathon Cramier",
      title: "CEO, Webxcell.",
      avatar: "/assets/avatars/avatar1.png",
    },
  },
  {
    title: "7 Digital Marketing Trends That Will Transform Your Business in 2025",
    date: "March 26, 2024",
    category: "Marketing",
    image: "/assets/blogs/blog3.png",
    slug: "digital-marketing-trends-2025",
    content: `The digital marketing landscape is constantly evolving, and staying ahead of the curve is crucial for business success. In this blog, we'll explore seven key trends that are set to transform the industry in 2025.\n\nFrom AI-powered marketing to voice search optimization, these trends will shape the future of digital marketing.`,
    author: {
      name: "Johnathon Cramier",
      title: "CEO, Webxcell.",
      avatar: "/assets/avatars/avatar1.png",
    },
  },
];

const categories = [
  { name: "Marketing Agency", count: 3 },
  { name: "Business", count: 10 },
  { name: "Development", count: 5 },
  { name: "UI UX Design", count: 2 },
  { name: "Marketing", count: 4 },
];

const comments = [
  {
    author: "Laura Johnson",
    date: "December 23,2023 at 8:50 P.M",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making",
  },
];

export default function BlogDetailsPage({ params }) {
  const { slugs } = params;
  const blog = blogs.find(b => b.slug === slugs) || blogs[0];
  const currentIndex = blogs.findIndex(b => b.slug === slugs);
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  return (
    <>
      <main>
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-[300px] flex flex-col text-center p-16"
          style={{ backgroundImage: "url('/assets/bg-grid.png')" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Blogs Details</h1>
          <p className="text-lg text-gray-300">Home&gt;&gt; Blogs &gt;&gt; Blogs Details</p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Content */}
          <div className="lg:col-span-2">
            <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-80 rounded-t-xl overflow-hidden">
                <Image src={blog.image} alt={blog.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <p className="text-sm text-gray-400 mb-2">
                  {blog.date} &bull; {blog.category}
                </p>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {blog.title}
                </h2>
                <div className="text-gray-300 text-base leading-relaxed space-y-4 mb-8 whitespace-pre-line">
                  {blog.content}
                </div>
                {/* Author */}
                <div className="flex items-center space-x-4 mt-8 mb-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image src={blog.author.avatar} alt={blog.author.name} width={48} height={48} className="object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{blog.author.name}</p>
                    <p className="text-gray-400 text-sm">{blog.author.title}</p>
                  </div>
                </div>
                {/* Prev/Next Navigation */}
                <div className="flex justify-between items-center border-t border-gray-700 pt-6 mb-8">
                  {prevBlog ? (
                    <Link href={`/blogs/${prevBlog.slug}`} className="text-[#FE7915] hover:underline">&larr; Previous Blog</Link>
                  ) : (
                    <span className="text-gray-500">&larr; Previous Blog</span>
                  )}
                  {nextBlog ? (
                    <Link href={`/blogs/${nextBlog.slug}`} className="text-[#FE7915] hover:underline">Next Blog &rarr;</Link>
                  ) : (
                    <span className="text-gray-500">Next Blog &rarr;</span>
                  )}
                </div>
                {/* Comments */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">All comments</h3>
                  {comments.map((c, idx) => (
                    <div key={idx} className="bg-[#222] rounded-lg p-4 mb-4">
                      <p className="text-gray-200 mb-2">{c.text}</p>
                      <div className="text-sm text-gray-400">{c.author} <span className="ml-2">{c.date}</span></div>
                    </div>
                  ))}
                </div>
                {/* Comment Form */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-2">Leave A Comment</h3>
                  <textarea className="w-full h-32 rounded-lg bg-[#181818] border border-gray-700 text-white p-4 mb-4" placeholder="Comment"></textarea>
                  <button className="bg-[#FE7915] text-white font-bold py-2 px-8 rounded-full hover:bg-opacity-90 transition-colors">Send Comment</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Search */}
            <div className="bg-[#181818] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Search Blogs Here</h3>
              <div className="flex">
                <input type="text" placeholder="Search..." className="flex-1 px-4 py-2 rounded-l bg-black text-white border-none focus:ring-2 focus:ring-[#FE7915]" />
                <button className="bg-[#FE7915] px-4 py-2 rounded-r text-white font-bold">🔍</button>
              </div>
            </div>
            {/* Categories */}
            <div className="bg-[#181818] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Blog categories</h3>
              <ul className="space-y-2">
                {categories.map((cat, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span className="text-gray-300">{cat.name}</span>
                    <span className="bg-[#FE7915] text-white rounded px-2 py-0.5 text-xs ml-2">{cat.count.toString().padStart(2, '0')}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Recent Posts */}
            <div className="bg-[#181818] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                {blogs.map((post, idx) => (
                  <li key={idx} className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{post.date}</p>
                      <Link href={`/blogs/${post.slug}`} className="text-sm text-white hover:text-[#FE7915] font-semibold">
                        {post.title.length > 40 ? post.title.slice(0, 40) + '...' : post.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
