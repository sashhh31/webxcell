
"use client";

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function AccordionItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#1C1C1C] rounded-lg shadow-lg mb-4 overflow-hidden">
      <button
        className={`w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors duration-300
          ${isOpen ? 'bg-primary text-lightText' : 'bg-[#1C1C1C] hover:bg-gray-800 text-lightText'}`}
        onClick={toggleAccordion}
      >
        <span className={`text-xl font-semibold ${isOpen ? 'text-lightText' : 'text-lightText'}`}>
          {question}
        </span>
        <span className="text-xl">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {isOpen && (
        <div className={`p-6 pt-0 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="text-grayText text-lg leading-relaxed pt-4">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}