import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';

export default function PortfolioGridSection() {
  const projects = [
    {
      image: '/assets/portfolio/project1.png',
      category: 'Agency', 
      title: 'Innovative Ideas',
      link: '/portfolio/project1', 
    },
    {
      image: '/assets/portfolio/project2.png', 
      category: 'Strategy',
      title: 'Creative Concepts',
      link: '/portfolio/project2',
    },
    {
      image: '/assets/portfolio/project3.png', 
      category: 'Marketing',
      title: 'Digital Marketing',
      link: '/portfolio/project3',
    },
    {
      image: '/assets/portfolio/project4.png', 
      category: 'Development',
      title: 'Web Design',
      link: '/portfolio/project4',
    },
    {
      image: '/assets/portfolio/project5.png', 
      category: 'B2B',
      title: 'B2B Solutions',
      link: '/portfolio/project5',
    },
    {
      image: '/assets/portfolio/project6.png', 
      category: 'Collaboration',
      title: 'Team Work',
      link: '/portfolio/project6',
    },
    // Add more projects here as needed for multiple pages
  ];

  return (
    <section className="py-20 px-8 bg-darkBg text-lightText">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-[#1C1C1C] rounded-xl overflow-hidden shadow-lg relative">
              <div className="relative w-[500px] h-[500px]"> 
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 p-10 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3 flex justify-between rounded-xl bg-white text-black w-full">
                  <div>

                  <p className="text-[#EF7915] text-sm font-semibold mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold text-lightText mb-4">{project.title}</h3>
                  </div>
                  <Link href={project.link} className="inline-flex bg-orange-500 rounded-full p-2 w-10 h-10 items-center text-lightText font-semibold hover:text-primary transition-colors">
                    <span className="ml-1 text-white "><FaArrowRight/></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots and Arrow */}
        <div className="flex items-center justify-center mt-16 space-x-4">
          <div className="w-8 h-8 rounded-full text-center flex justify-center items-center bg-[#EF7915]">1</div>
          <div className="w-8 h-8 rounded-full text-center flex justify-center items-center bg-gray-600 hover:bg-gray-500 transition-colors cursor-pointer">2</div>
          <div className="w-8 h-8 rounded-full text-center flex justify-center items-center bg-gray-600 hover:bg-gray-500 transition-colors cursor-pointer">3</div>
          
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#EF7915] text-lightText ml-8 hover:bg-opacity-90 transition-colors">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}