import Image from 'next/image';
import { FaPlayCircle } from 'react-icons/fa';

export default function WhyChooseUsSection() {
  const features = [
    {
      number: '01',
      title: 'Results-Focused:',
      description: 'We measure success by the tangible business outcomes we deliver for our clients.',
    },
    {
      number: '02',
      title: 'Collaborative Partnership:',
      description: 'We work as an extension of your team, ensuring transparency throughout the process and building a relationship of trust and mutual respect.',
    },
    {
      number: '03',
      title: 'Technical Excellence:',
      description: 'Our developers and designers are certified experts in leading technologies and platforms',
    },
    {
      number: '04',
      title: 'Innovative Solutions:',
      description: 'We embrace emerging technologies to give our clients competitive advantages',
    },
  ];

  return (
    <section className="py-20 px-8 bg-darkBg text-lightText">
      <div className="max-w-[1280px] mx-auto">
        {/* Video Thumbnail Section */}
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden mb-16">
          <Image
            src="/assets/why-choose-us-video-bg.png"
            alt="Why Choose Us Video"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {/* Play Button */}
            <button className="text-[#EF7915] text-8xl transition-transform duration-300 hover:scale-110">
              <FaPlayCircle />
            </button>
          </div>
          {/* Optional: Overlay if image is too bright */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Section Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            Why <span className='text-[#EF7915]'>Choose</span> Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We aim to empower brands of all sizes and industries with data-driven strategies that yield tangible results.
            <br className="hidden sm:inline" />believe in crafting campaigns that not only drive.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1C1C1C] p-8 rounded-2xl shadow-lg flex flex-col items-start text-left">
              <p className="text-5xl font-bold text-gray-100 opacity-20 mb-4">{feature.number}</p> {/* Large faded number */}
              <h3 className="text-2xl font-semibold text-lightText mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="bg-[#1C1C1C] p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-3xl font-bold text-gray-100 mb-4">At Webxcell Digital, we believe that:</h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            our relationship with you doesn't end at launch. We are committed to providing ongoing optimisation and optimisation, ensuring that your digital presence continues to drive meaningful results for your business.
          </p>
        </div>
      </div>
    </section>
  );
}