import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 

export default function ContactInfoCardsSection() {
  const contactInfo = [
    {
      icon: FaPhone,
      label: 'Phone number',
      value: '+44 800 195 7512',
    },
    {
      icon: FaEnvelope,
      label: 'Email Address',
      value: 'contact@webxcell.com',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Office Address',
      value: 'Courtyard Business Ctr, Nottingham NG8 1PA, UK',
    },
  ];

  return (
    <section className="py-20 relative  px-8 bg-darkBg">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactInfo.map((item, index) => (
          <div key={index} className="bg-[#1C1C1C] p-8 rounded-xl shadow-lg flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-[#EF7915] flex items-center  justify-center text-lightText text-2xl mb-20">
              <item.icon className="text-2xl" />
            </div>
            <p className="text-gray-400 text-base mb-2">{item.label}</p>
            <p className="text-gray-100 text-xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}