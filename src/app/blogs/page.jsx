import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ConsultationCTA from "../components/sections/ConsultationCTA";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "Mobile-First Indexing: Optimizing Your Website for the Way People Browse",
    date: "March 26, 2024",
    category: "Marketing",
    image: "/assets/blogs/blog1.png",
    slug: "mobile-first-indexing",
  },
  {
    title: "Data-Driven Decision Making: How Analytics Can Transform Your Marketing Strategy",
    date: "March 26, 2024",
    category: "Marketing",
    image: "/assets/blogs/blog2.png",
    slug: "data-driven-decision-making",
  },
  {
    title: "7 Digital Marketing Trends That Will Transform Your Business in 2025",
    date: "March 26, 2024",
    category: "Marketing",
    image: "/assets/blogs/blog3.png",
    slug: "digital-marketing-trends-2025",
  },
];

const categories = [
  { name: "Marketing Agency", count: 3 },
  { name: "Business", count: 10 },
  { name: "Development", count: 5 },
  { name: "UI UX Design", count: 2 },
  { name: "Marketing", count: 4 },
];

const recentPosts = blogs;

export default function BlogPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <div
        className="relative bg-contain bg-center h-[580px] w-[1420px] items-center justify-center flex flex-col  text-center p-16"
        style={{ backgroundImage: "url('/assets/bg-grid.png')" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Blogs & News
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Access to our latest added blogs and news to get to know more about us
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Grid */}
          <div className="lg:col-span-2 space-y-12">
            {blogs.map((blog, idx) => (
              <div key={idx} className="bg-[#181818] rounded-xl overflow-hidden shadow-lg">
                <div className="relative w-[840px] h-[600px]">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <p className="text-sm text-gray-400 mb-2">
                    {blog.date} &bull; {blog.category}
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    <Link href={`/blogs/${blog.slug}`} className="hover:text-[#FE7915] transition-colors">
                      {blog.title}
                    </Link>
                  </h2>
                  <Link href={`/blogs/${blog.slug}`} className="inline-block bg-[#FE7915] text-white font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
            {/* Pagination */}
            <div className="flex items-center space-x-2 mt-8">
              <button className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">1</button>
              <button className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">2</button>
              <button className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">3</button>
              <button className="w-8 h-8 rounded-full bg-[#FE7915] text-white flex items-center justify-center ml-2">&rarr;</button>
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
                {recentPosts.map((post, idx) => (
                  <li key={idx} className="flex items-center space-x-4">
                    <div className="relative w-[100px] h-[100px] flex-shrink-0 rounded overflow-hidden">
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
