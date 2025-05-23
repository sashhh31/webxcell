'use client'

import { useState } from 'react';
import { FaBookOpen, FaEnvelope, FaLaptopCode, FaLink, FaPalette, FaVideo } from 'react-icons/fa';

export default function ServiceCard({ title, description, icon }) {
  // Card base and conditional classes
  const cardClasses = `relative p-8 rounded-xl h-[340px] flex flex-col justify-between transition-all duration-300 cursor-pointer
    bg-[#1C1C1C] text-lightText hover:bg-[#EF7915] hover:text-lightText shadow-lg group`;

  // Icon circle background
  const iconCircleClasses = `w-12 h-12 flex items-center justify-center rounded-full mb-6 transition-all duration-300
    bg-[#232323] group-hover:bg-[#ff9d47] group-hover:bg-opacity-20 text-[#EF7915] text-2xl`;

  const iconMap = {
    FaBookOpen: FaBookOpen,
    FaEnvelope: FaEnvelope,
    FaLaptopCode: FaLaptopCode,
    FaLink: FaLink,
    FaPalette: FaPalette,
    FaVideo: FaVideo,
  };
  const IconComponent = iconMap[icon] || null;

  // Show description on hover (always show if present, but for empty, only show on hover)
  return (
    <div className={cardClasses}>
      <div className={iconCircleClasses}>
        {IconComponent && <IconComponent />}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className={`text-sm leading-relaxed hidden group-hover:block opacity-80 transition-opacity duration-300 ${description ? '' : 'opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto'}`}>
          {description || 'Designed user interface contributes to a positive user experience, and a good user experience. Designed interface contributes to a positive experience, and a good user experience.'}
        </p>
      </div>
    </div>
  );
}