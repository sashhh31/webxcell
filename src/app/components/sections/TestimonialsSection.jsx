import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export default function TestimonialsSection() {
  const currentTestimonial = {
    rating: 5,
    quote: `"Webxcell Digital services solved Our Business Challenges"`,
    review: `Highly Skilled Developers! I was looking for a Web Design Company for making my company website. I found Webxcell Digital on Google. I am thrilled with the service and response they have provided us. I am looking for two more websites to be built by them and also opting.`,
    clientName: 'Daniyel Karlos',
    clientTitle: 'UX Designer',
    clientAvatar: '/assets/avatars/avatar2.png', 
  };

  return (
    <section className="py-20 px-8 bg-gray-900 text-lightText">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content: Title */}
        <div className="text-left">
          <h2 className="text-5xl font-bold mb-4">
            What Our <span className="text-[#EF7915]">Clients</span> <br />Says About US
          </h2>
        </div>

        {/* Right Content: Testimonial Card and Navigation */}
        <div className="relative pl-0 lg:pl-12"> 
          {/* Testimonial Quote */}
          <p className="text-3xl font-bold text-lightText mb-6">{currentTestimonial.quote}</p>

          {/* Star Rating */}
          <div className="flex text-[#EF7915] mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <FaStar key={i} className="text-xl" />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-lg text-gray-400 mb-8">
            {currentTestimonial.review}
          </p>

          {/* Client Info and Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={currentTestimonial.clientAvatar}
                  alt={currentTestimonial.clientName}
                  width={64}
                  height={64}
                  className="object-cover rotate-90"
                />
              </div>
              <div>
                <p className="text-xl font-semibold text-lightText">{currentTestimonial.clientName}</p>
                <p className="text-grayText text-sm">{currentTestimonial.clientTitle}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-4">
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1C1C1C] text-grayText hover:bg-primary hover:text-lightText transition-colors">
                &larr; {/* Left arrow */}
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#EF7915] text-lightText hover:bg-opacity-90 transition-colors">
                &rarr; {/* Right arrow */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}