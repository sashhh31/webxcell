import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioGridSection() {
  const projects = [
    {
      image: '/assets/portfolio/project1.png',
      category: 'Agency', 
      title: 'Innovative Ideas',
      link: '#', 
    },
    {
      image: '/assets/portfolio/project2.png', 
      category: 'Strategy',
      title: 'Creative Concepts',
      link: '#',
    },
    {
      image: '/assets/portfolio/project3.png', 
      category: 'Marketing',
      title: 'Digital Marketing',
      link: '#',
    },
    {
      image: '/assets/portfolio/project4.png', 
      category: 'Development',
      title: 'Web Design',
      link: '#',
    },
    {
      image: '/assets/portfolio/project5.png', 
      category: 'B2B',
      title: 'B2B Solutions',
      link: '#',
    },
    {
      image: '/assets/portfolio/project6.png', 
      category: 'Collaboration',
      title: 'Team Work',
      link: '#',
    },
    // Add more projects here as needed for multiple pages
  ];

  return (
    <section className="py-20 px-8 bg-darkBg text-lightText">
      <div className="max-w-[1280px] mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1C1C1C] rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-64"> 
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <p className="text-{#EF7915} text-sm font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-lightText mb-4">{project.title}</h3>
                <Link href={project.link} className="inline-flex items-center text-lightText font-semibold hover:text-primary transition-colors">
                  View Project
                  <span className="ml-2 text-primary">↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots and Arrow */}
        <div className="flex items-center justify-center mt-16 space-x-4">
          {/* Example dots - you'd control active state with useState for actual pagination */}
          <div className="w-8 h-8 rounded-full text-center flex justify-center items-center bg-[#EF7915]">1</div> {/* Active dot */}
          <div className="w-8 h-8 rounded-full text-center flex justify-center items-center bg-gray-600 hover:bg-gray-500 transition-colors cursor-pointer">2</div>
          <div className="w-8 h-8 rounded-full text-center flex justify-center items-center bg-gray-600 hover:bg-gray-500 transition-colors cursor-pointer">3</div>
          
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#EF7915] text-lightText ml-8 hover:bg-opacity-90 transition-colors">
            &rarr; {/* Right arrow */}
          </button>
        </div>
      </div>
    </section>
  );
}