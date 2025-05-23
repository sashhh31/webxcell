import React from 'react';

export default function WorkingProcessSection() {
  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'Etiam imperdiet orci. Curabitur nisi. Fusce fermentum. Nunc nonummy metus. Phasellus orci ullamcorper ipsum rutrum nunc.',
    },
    {
      number: 2,
      title: 'Strategy Development',
      description: 'Etiam imperdiet orci. Curabitur nisi. Fusce fermentum. Nunc nonummy metus. Phasellus orci ullamcorper ipsum rutrum nunc.',
    },
    {
      number: 3,
      title: 'Design & Development',
      description: 'Etiam imperdiet orci. Curabitur nisi. Fusce fermentum. Nunc nonummy metus. Phasellus orci ullamcorper ipsum rutrum nunc.',
    },
    {
      number: 4,
      title: 'Testing & Quality Assurance',
      description: 'Etiam imperdiet orci. Curabitur nisi. Fusce fermentum. Nunc nonummy metus. Phasellus orci ullamcorper ipsum rutrum nunc.',
    },
    {
      number: 5,
      title: 'Launch & post-Launch Support',
      description: 'From pre-launch checks and deployment to training, optimization, and maintenance planning.',
    },
  ];

  return (
    <section className="py-20 px-8 bg-darkBg">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Content: Title and Description */}
        <div className="text-left lg:pr-12"> 
          <h2 className="text-5xl font-bold text-gray-400 mb-6">
            Our <span className="text-[#EF7915]">Working</span> Process
          </h2>
          <p className="text-lg text-gray-400">
            We aim to empower brands of all sizes and industries with data-driven strategies that yield tangible results. believe in crafting campaigns that not only drive.
          </p>
        </div>

        {/* Right Content: Process Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gray-700"></div>

          {processSteps.map((step, index) => (
            <div key={index} className="relative flex items-start mb-10 last:mb-0">
              {/* Number Circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EF7915] text-gray-100 font-bold text-xl flex items-center justify-center relative z-10">
                {step.number}
              </div>
              
              {/* Step Content Card */}
              <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg ml-8 flex-grow">
                <h3 className="text-xl font-semibold text-lightText mb-2">{step.title}</h3>
                <p className="text-grayText text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}