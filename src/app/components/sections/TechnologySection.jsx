import TechCard from '../ui/TechCards';
import { FaReact } from "react-icons/fa6";
import { RiAngularjsLine } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";



export default function TechnologiesSection() {
  const technologies = [
    { name: 'React.js', component: <FaReact /> },
    { name: 'Next.js', component: <RiNextjsLine /> },
    { name: 'Prisma', component: <SiPrisma /> },
    { name: 'Vue', component: <FaVuejs /> },
    { name: 'Node', component: <FaNode /> },
    { name: 'PostGRE', component: <SiPostgresql /> },
    { name: 'Angular', component: <RiAngularjsLine /> },
  ];

  return (
    <section className="py-20 max-w-[1280px] px-8 container mx-auto text-center">
      <h2 className="text-4xl font-bold text-lightText mb-4">
        Core <span className="text-primary">Technologies</span>
      </h2>
      <p className="text-lg text-grayText mb-12 max-w-2xl mx-auto">
        We leverage cutting-edge technologies to build robust, scalable, and innovative digital solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {technologies.map((tech, index) => (
          <TechCard key={index} techName={tech.name} children={tech.component} />
        ))}
      </div>
    </section>
  );
}