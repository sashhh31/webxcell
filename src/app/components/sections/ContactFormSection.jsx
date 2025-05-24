import Image from 'next/image';
import React from 'react';

export default function ContactFormSection() {
  return (
    <section className="relative  py-20 px-8 bg-darkBg text-lightText">
      <div className="max-w-[1280px] mx-auto">
        {/* Background Image Container */}
        <div className="relative w-full h-[600px] md:h-[700px] rounded-xl overflow-visible shadow-lg flex items-center justify-center">
          <Image
            src="/assets/contact-us-bg.png" 
            alt="Contact Us Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark Overlay */}

          {/* Contact Form */}
          <div className="relative top-56 z-10 bg-[#1C1C1C] p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-lg mx-4 md:mx-auto text-center">
            <h2 className="text-4xl font-bold text-lightText mb-6">
              Have Questions? Contact us!
            </h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-lightText placeholder-grayText"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-lightText placeholder-grayText"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-lightText placeholder-grayText resize-y"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#EF7915] text-lightText font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}