import Image from 'next/image';
import Link from 'next/link';

export default function AboutPageHeroSection() {
  const satisfiedCustomersAvatars = [
    '/assets/avatars/avatar1.png',
    '/assets/avatars/avatar2.png',
    '/assets/avatars/avatar3.png',
  ];

  return (
    <section className="relative py-20 px-8 bg-darkBg overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Column */}
        <div className="relative w-full h-[500px] lg:h-[500px] flex items-center justify-center">
          {/* Main background image */}
          <Image
            src="/assets/about-team.png"
            alt="Team working"
            fill 
            sizes="width: 645px, height: 700px"
            className="object-cover object-center rounded-xl shadow-lg"
          />

          {/* Small Review Card */}
          <div className="absolute right-0 bottom-0 bg-white p-4 rounded-xl shadow-2xl z-10 w-[240px] text-left flex items-center space-x-3">
            <div className="flex -space-x-3">
              {satisfiedCustomersAvatars.map((src, index) => (
                <div key={index} className="w-10 h-10 rounded-full overflow-hidden border-2 border-white first:ml-0">
                  <Image src={src} alt={`Customer ${index + 1}`} width={40} height={40} className="object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-700 font-bold text-lg">
                +
              </div>
            </div>
            <p className="text-gray-700 font-semibold text-sm">2566+ More Then Clients Global Reviews</p>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="text-left">
          <p className="text-[#EF7915] text-lg font-semibold mb-3">About Us</p>
          <h2 className="text-5xl md:text-6xl font-bold text-lightText leading-tight mb-8">
            We're A <br />Strategic Digital<br />Media Agency
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            To scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey. Our team has a successful track record of helping brands scale
          </p>

          {/* Bullet Points */}
          <ul className="text-lightText text-lg space-y-3 mb-8">
            <li className="flex items-center">
              <span className="text-[#EF7915] mr-3 text-2xl">✔</span> Simplicity The Biggest Idea A Looked
            </li>
            <li className="flex items-center">
              <span className="text-[#EF7915] mr-3 text-2xl">✔</span> Mastering The Art Of Conversion
            </li>
            <li className="flex items-center">
              <span className="text-[#EF7915] mr-3 text-2xl">✔</span> Keeping Advertising Standards High
            </li>
          </ul>

          <Link href="/about" className="inline-flex items-center bg-[#EF7915] text-lightText font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300 text-lg">
            More About Us
            <span className="ml-2">↗</span>
          </Link>
        </div>
        
      </div>
    </section>
  );
}