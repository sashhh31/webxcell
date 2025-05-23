import ServiceCard from '../ui/ServiceCard';

export default function AllServicesGridSection() {
  const allServices = [
    {
      title: 'Digital Strategy',
      description: 'Designed user interface contributes to a positive user experience, and a good user experience. Designed interface contributes to a positive experience, and a good user experience.',
      icon: 'FaBookOpen',
    //   isFeatured: true, 
    },
    {
      title: 'Email Marketing',
      description: '', 
      icon: 'FaEnvelope',
    //   isFeatured: false,
    },
    {
      title: 'Web Development',
      description: '', 
      icon: 'FaLaptopCode',
    //   isFeatured: false,
    },
    {
      title: 'SEO Link Building Optimization',
      description: '',
      icon: 'FaLink', 
    //   isFeatured: false,
    },
    {
      title: 'Brand Identity Design',
      description: '',
      icon: 'FaPalette', 
    //   isFeatured: false,
    },
    {
      title: 'Video Production',
      description: '',
      icon: 'FaVideo', 
    //   isFeatured: false,
    },
    // Add more services here as needed
  ];

  return (
    <section className="py-20 px-8 bg-darkBg">
      <div className="max-w-[1280px] mx-auto">
        {/* Optional: Section Title if this is a standalone section */}
        {/*
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-lightText mb-4">Our Services</h2>
          <p className="text-lg text-grayText max-w-2xl mx-auto">
            Explore the comprehensive range of digital solutions we offer to help your business thrive.
          </p>
        </div>
        */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            //   isFeatured={service.isFeatured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}