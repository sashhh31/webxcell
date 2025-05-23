import React from "react";
import Image from "next/image";
import Link from "next/link";

const project = {
  title: "Website UI UX Design",
  mainImage: "/assets/portfolio/portfolio-main.png",
  description: `At tempus aenean sapien torquent sed diam class efficitur in mus morbi eros dictum quam augue ac hac erat velit quam libero mi commodo nibh hac fermentum orci ad pharetra consequat justo odio cursus lorem elit dui consectetur magna lacinia sed eleifend egestas egestas viverra volutpat mauris morbi ac primis imperdiet posuere eu erat enim gravida cras congue\n\npellentesque vulputate malesuada dictumst. fames interdum cursus an eu tellus porta ullamcorper accumsan eu adipiscing integer venenatis sagittis a cras curabitur nisi dui cursus eu quam velit accumsan sociosqu vitae sollicitudin sit consequat ultricies rutrum egestas. semper risus nec habitant nullam necus consequat elementum inceptos nam felis penatibus feugiat` ,
  gallery: [
    "/assets/portfolio/portfolio-gallery1.png",
    "/assets/portfolio/portfolio-gallery2.png",
  ],
  goal: `At tempus aenean sapien torquent sed diam class efficitur in mus morbi eros dictum quam augue ac hac erat velit quam libero mi commodo nibh hac fermentum orci ad pharetra consequat justo odio cursus lorem elit dui consectetur magna lacinia sed eleifend egestas egestas viverra volutpat mauris morbi ac primis imperdiet posuere eu erat enim gravida cras congue`,
  challenges: `Future, as it seeks to lead the industry in technological innovation and suit enoble building practices to deliver long-lasting value for its clients.`,
  results: `For a most 50 years Leighton Asia, one of the region's largest and most respected construction companies, has been progressively building for a better future by leveraging international expertise with local intelligence. In that time Leighton has delivered some of Asia's prestigious buildings and transformation infrastructure projects.`,
  info: {
    client: "Jessica Brown",
    cost: "USD 150,499",
    category: "Business, Marketing",
    date: "20 October 2023",
    socials: [
      { icon: "fa-facebook-f", href: "#" },
      { icon: "fa-twitter", href: "#" },
      { icon: "fa-linkedin-in", href: "#" },
      { icon: "fa-instagram", href: "#" },
    ],
    phone: "+44 800 195 7512",
  },
};

const recentProjects = [
  {
    image: "/assets/portfolio/portfolio-gallery1.png",
    title: "Web Site & App Design",
    category: "Branding Design",
    href: "#",
  },
  {
    image: "/assets/portfolio/portfolio-gallery2.png",
    title: "Web Site & App Design",
    category: "Branding Design",
    href: "#",
  },
  {
    image: "/assets/portfolio/portfolio-main.png",
    title: "App UI Design",
    category: "Branding Design",
    href: "#",
  },
];

export default function PortfolioDetailsPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-[300px] flex flex-col text-center p-16"
          style={{ backgroundImage: "url('/assets/bg-grid.png')" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Portfolio Details</h1>
          <p className="text-lg text-gray-300">Home&gt;&gt; Portfolio &gt;&gt; Portfolio details</p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Content */}
          <div className="lg:col-span-2">
            <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-80 rounded-t-xl overflow-hidden">
                <Image src={project.mainImage} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
                <div className="text-gray-300 text-base leading-relaxed space-y-4 mb-8 whitespace-pre-line">
                  {project.description}
                </div>
                {/* Gallery */}
                <div className="flex space-x-4 mb-8">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="relative w-1/2 h-40 rounded-lg overflow-hidden">
                      <Image src={img} alt="Gallery" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-gray-300 text-base leading-relaxed space-y-4 mb-8">
                  {project.description}
                </div>
                {/* Project Goal */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Project Goal</h3>
                  <p className="text-gray-300 whitespace-pre-line">{project.goal}</p>
                </div>
                {/* Challenges & Solutions */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Challenges & Solutions</h3>
                  <p className="text-gray-300 whitespace-pre-line">{project.challenges}</p>
                </div>
                {/* Final Results */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Final Results</h3>
                  <p className="text-gray-300 whitespace-pre-line">{project.results}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Project Info */}
            <div className="bg-[#181818] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Project Information</h3>
              <ul className="text-gray-300 text-sm space-y-2 mb-4">
                <li><span className="font-semibold text-white">Client:</span> {project.info.client}</li>
                <li><span className="font-semibold text-white">Cost:</span> {project.info.cost}</li>
                <li><span className="font-semibold text-white">Category:</span> {project.info.category}</li>
                <li><span className="font-semibold text-white">Date:</span> {project.info.date}</li>
              </ul>
              <div className="flex space-x-3 mb-4">
                {/* Social icons as placeholders */}
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FE7915] text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FE7915] text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FE7915] text-white"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FE7915] text-white"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            {/* Contact Card */}
            <div className="bg-[#181818] rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#FE7915] flex items-center justify-center mb-4">
                <span className="text-2xl text-white">&#128222;</span>
              </div>
              <p className="text-white font-semibold mb-2">Need Help? Connect Here</p>
              <a href="tel:+448001957512" className="text-[#FE7915] font-bold text-lg">{project.info.phone}</a>
            </div>
          </aside>
        </div>

        {/* Recently Completed Work */}
        <section className="max-w-7xl mx-auto py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Explore Our Recently <span className="text-[#FE7915]">Completed</span> Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recentProjects.map((proj, idx) => (
              <div key={idx} className="bg-[#181818] rounded-xl overflow-hidden shadow-lg group">
                <div className="relative w-full h-56">
                  <Image src={proj.image} alt={proj.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-sm text-[#FE7915] mb-2">{proj.category}</p>
                  <Link href={proj.href} className="inline-block bg-[#FE7915] text-white font-semibold py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors">
                    <span className="mr-2">&#8594;</span> View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section (from Footer) */}
        <section className="w-full bg-[#FE7915] py-12 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
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
    </>
  );
} 