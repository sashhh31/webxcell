import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Innovative Ideas",
    category: "Agency",
    image: "/assets/portfolio/project1.png",
    cta: true,
  },
  {
    title: "Ideas",
    category: "Design",
    image: "/assets/portfolio/project2.png",
  },
  {
    title: "Digital Marketing",
    category: "Web Viral",
    image: "/assets/portfolio/project3.png",
  },
  {
    title: "Email Marketing",
    category: "Campaign",
    image: "/assets/portfolio/project4.png",
  },
];

export default function ProjectGallery() {
  return (
    <section className="w-full bg-black py-16 px-4 text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s See Our <br /> Completed Projects!!
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition-colors"
          >
            View More ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {project.cta ? (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 text-black">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-orange-500">{project.category}</p>
                  <div className="mt-2 text-orange-500 font-bold rounded-full text-xl">→</div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
