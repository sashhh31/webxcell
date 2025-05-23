"use client";

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function AccordionItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#1C1C1C] mb-2 rounded-xl overflow-hidden">
      <button
        className={`w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors duration-300
          ${isOpen ? 'bg-[#EF7915] text-white' : 'bg-[#1C1C1C] text-lightText hover:bg-[#EF7915] hover:text-white'}`}
        onClick={toggleAccordion}
      >
        <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-lightText group-hover:text-white'}`}>
          {question}
        </span>
        <span className="ml-4 flex items-center">
          {isOpen ? (
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20">
              <FaMinus className="text-white text-base" />
            </span>
          ) : (
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-[#EF7915] group-hover:bg-white/20 transition-colors">
              <FaPlus className="text-[#EF7915] group-hover:text-white text-base transition-colors" />
            </span>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-0 bg-[#EF7915] rounded-b-xl  transition-all duration-500 ease-in-out">
          <p className="text-white text-base leading-relaxed pt-2">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}