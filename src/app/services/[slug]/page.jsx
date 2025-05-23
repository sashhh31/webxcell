import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ServiceDetailsPage({ params }) {
  // Mock data for demonstration; replace with real data fetching as needed
  const service = {
    title: "SEO Link Building Optimization",
    image: "/assets/seo-service.jpg", // Replace with your actual image path
    description:
      "75% of online searchers don't go beyond the first page. This means you're invisible if you're not there. The solution is simple: Search Engine Optimisation",
    sections: [
      {
        heading: "Maximising Visibility",
        content: "It's essential to increase your visibility on search engines. To include your products, services, and industry. Because search engines rely on over 200 factors, our operation ensures you don't waste time and money. And you'll experience actual progress.",
      },
      {
        heading: "Our SEO marketing",
        content: "Services include: Local SEO, E-commerce SEO, Voice SEO, SEO Audits",
      },
      {
        heading: "Specific Areas Of SEO:",
        content: `On-page SEO: This is to optimise your website. It includes title tags, meta descriptions, and content.\nOff-page SEO: This focuses on optimising your website's presence through backlinks.\nTechnical SEO: To optimise your website's backend, including page speed and site architecture.`,
      },
    ],
    services: [
      "Local SEO",
      "E-commerce SEO",
      "Voice SEO",
      "SEO Audits",
      "Technical SEO",
    ],
    detailedServices: [
      {
        title: "SEO Audit",
        desc: "We conduct an in-depth review of your current strategy. If you don't have one, we work with your team to develop solutions from an SEO perspective. Our experts also review audit tools. But they don't provide the full picture. It's through an SEO audit, you'll be able to create a custom strategy for your business.",
      },
      {
        title: "Competitor Analysis:",
        desc: "A competitive analysis enhances SEO strategy. We assess your competitors to spot opportunities for you.",
      },
      {
        title: "Custom Strategy:",
        desc: "Don't use a cookie-cutter approach to SEO. A personalised approach helps to maximise your ROI from SEO. This means more engagements and sales.",
      },
      {
        title: "Off-page optimisation:",
        desc: "We optimise factors outside of your website. This influences your search engine rankings. The quality and quantity of websites linking to you significantly impact your search result success.",
      },
      {
        title: "On-page optimisation:",
        desc: "Here we focus on optimising the content on your website. This includes updating title tags, creating a sitemap, and auditing your site structure. We also use relevant keywords and optimise for speed and design.",
      },
      {
        title: "Monthly Reports:",
        desc: "Our reputation is built on trust. This is why we provide monthly reports. A performance review will show you the progress and current performance.",
      },
      {
        title: "Advanced optimisation:",
        desc: "Since SEO is an ongoing process, we continually optimise your site. This ensures you're never left behind and, instead, continue to maximise your SEO strategy.",
      },
    ],
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="relative bg-cover bg-center h-[120px] flex flex-col text-center justify-center p-8" style={{ backgroundImage: "url('/assets/bg-grid.png')" }}>
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">Service Detail</h1>
        <p className="text-gray-300 text-sm">Home &gt;&gt; Services &gt;&gt; Services Details</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Main Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full h-56 md:h-72">
              <Image src={service.image} alt={service.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-300 mb-4">{service.description}</p>
              {service.sections.map((sec, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-xl font-semibold mb-1">{sec.heading}</h3>
                  <p className="text-gray-300 whitespace-pre-line">{sec.content}</p>
                </div>
              ))}
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">We offer</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {service.services.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Our Services</h3>
                <ul className="space-y-2">
                  {service.detailedServices.map((ds, i) => (
                    <li key={i}>
                      <span className="font-bold text-white">{ds.title}</span> <span className="text-gray-300">{ds.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside className="space-y-8">
          {/* All Services List */}
          <div className="bg-[#181818] rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">All Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/seo-link-building-optimization" className="block text-[#FE7915] hover:underline">SEO Link Building Optimization</Link></li>
              <li><Link href="/services/web-development" className="block text-[#FE7915] hover:underline">Web Development</Link></li>
              <li><Link href="/services/digital-marketing" className="block text-[#FE7915] hover:underline">Digital Marketing</Link></li>
            </ul>
          </div>
          {/* Opening Hours */}
          <div className="bg-[#181818] rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>Mon-Fri: 9:00-21:00 (GMT)</li>
              <li>Sat: 9:00-19:00 (GMT)</li>
              <li>Sun: Closed</li>
            </ul>
            <button className="mt-4 w-full bg-[#FE7915] text-white font-bold py-2 rounded hover:bg-opacity-90 transition">Book Appointment Now</button>
          </div>
          {/* Contact Card */}
          <div className="bg-[#181818] rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#FE7915] flex items-center justify-center mb-4">
              <span className="text-2xl text-white">&#128222;</span>
            </div>
            <p className="font-semibold mb-2">Need Help? Connect Here</p>
            <a href="tel:+448001957512" className="text-[#FE7915] font-bold text-lg">+44 800 195 7512</a>
          </div>
        </aside>
      </div>

      {/* CTA Section */}
      <section className="w-full bg-[#FE7915] py-10 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Book your free no obligation Consultation Today! Get a Digital Makeover
        </h2>
        <button className="bg-white text-[#FE7915] font-bold py-3 px-10 rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg">
          Let's Talk
        </button>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-[#181818] py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
          Stay Abreast of The Latest In Digital<br />with Our Curated Content Every Week<br />In Your Inbox
        </h2>
        <form className="flex flex-col sm:flex-row justify-center items-center max-w-2xl mx-auto mt-8">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full sm:w-2/3 px-4 py-3 rounded-full bg-white bg-opacity-80 border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-lg mb-4 sm:mb-0"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-white text-[#FE7915] font-bold py-3 px-10 rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg ml-0 sm:ml-4"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
} 