import React from 'react';

export default function AboutPageStatsSection() {
  const stats = [
    {
      value: '28+',
      title: 'Years of Experience',
      description: 'It looks like you have a great starting point for describing your creative agency. Here\'s a refined.',
    },
    {
      value: '427+',
      title: 'Successful Projects',
      description: 'It looks like you have a great starting point for describing your creative agency. Here\'s a refined.',
    },
    {
      value: '241+',
      title: 'Satisfied Customers',
      description: 'It looks like you have a great starting point for describing your creative agency. Here\'s a refined.',
    },
  ];

  return (
    <section className="bg-[#EF7915] py-20 px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-400">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-5xl text-gray-100 md:text-6xl font-bold mb-4">{stat.value}</p>
            <h3 className="text-2xl text-gray-100 font-semibold mb-3">{stat.title}</h3>
            <p className="text-base text-gray-100 leading-relaxed max-w-sm">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}