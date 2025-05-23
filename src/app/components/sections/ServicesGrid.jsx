import ServiceCard from '../ui/ServiceCard';
import Link from 'next/link'; 

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export default function ServicesGrid() {
  const services = [
    {
      title: 'Digital Strategy',
      description: 'Designed user interface contributes to a positive user experience, and a good user experience. Designed interface contributes to a positive experience, and a good user experience.',
      icon: 'FaBookOpen', 
      // href: '/services/digital-strategy',
    },
    {
      title: 'Email Marketing',
      description: '',
      icon: 'FaEnvelope',
      // href: '/services/email-marketing',
    },
    {
      title: 'Web Development',
      description: '',
      icon: 'FaLaptopCode',
      // href: '/services/web-development',
    },
  ];

  return (
    <section className="py-20 px-8 bg-darkBg">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-primary text-lg font-semibold mb-2">Our Services</p>
            <h2 className="text-4xl font-bold text-lightText">
              Our Latest Client <br className="hidden sm:inline" />Solutions
            </h2>
          </div>
          {/* Navigation Arrows */}
          <div className="flex space-x-4">
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 text-lightText hover:border-primary hover:text-primary transition-colors">
              <ArrowLeft />
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 text-lightText hover:border-primary hover:text-primary transition-colors">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Card (first service) */}
          <div className="md:col-span-1"> 
            <ServiceCard
              title={services[0].title}
              description={services[0].description}
              icon={services[0].icon}
              // href={services[0].href}
            />
          </div>

          {/* Other Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-2"> 
            {services.slice(1, 3).map((service, index) => ( 
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                // href={service.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}