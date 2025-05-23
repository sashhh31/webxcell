import Image from "next/image";
import Link from "next/link";
import StatItem from "../ui/StatItem";
export default function AboutExcellenceSection() {
  const stats = [
    { value: "100+", label: "Global Clients" },
    { value: "150+", label: "Team Members" },
    { value: "15+", label: "Business Experience" },
    { value: "300+", label: "Projects Complete" },
  ];

  const satisfiedCustomersAvatars = [
    "/assets/avatars/avatar1.png",
    "/assets/avatars/avatar2.png",
    "/assets/avatars/avatar3.png",
    "/assets/avatars/avatar4.png",
  ];

  return (
    <section className="relative mt-48 py-20 px-8 bg-darkBg overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 items-center">
        {/* Top Content Column */}
        <div className="text-left flex justify-between">
          <div className="w-5/12">
            <p className="text-[#EF7915] text-lg font-semibold mb-3">About Us</p>
            <h2 className="text-5xl md:text-6xl font-bold text-lightText leading-tight mb-4">
              We're A <br />
              Strategic Digital
              <br />
              Media Agency
            </h2>
          </div>

          <div className="w-5/12">
            <p className="text-gray-400 text-lg mb-8">
              To scale new customer acquisition and retention for e-commerce
              brands, we work across the entire customer journey. Our team has a
              successful track record of helping brands scale
            </p>
            <Link
              href="/about"
              className="inline-flex items-center bg-[#EF7915] text-lightText font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300 text-lg"
            >
              About us
              <span className="ml-2">↗</span> {/* Arrow icon */}
            </Link>
          </div>
        </div>

        {/* Bottom Image and Stats Column */}
        <div className="relative w-[1000px] h-[600px] lg:h-[600px] flex items-center justify-center">
          {/* Main background image */}
          <Image
            src="/assets/about-team.png"
            alt="Team working"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center rounded-xl shadow-lg"
          />

          {/* Orange Statistics Card */}
          <div className="absolute right-0 lg:right-[-15%] top-1/2 transform -translate-y-1/2 bg-[#EF7915] p-6 rounded-2xl shadow-2xl z-10 w-[280px] lg:w-[320px] flex gap-4 items-center">
            {/* Left Section - Vertical Text + Avatars */}
            <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center w-[100px] h-[300px]">
              <div className="text-gray-500 text-xs font-semibold transform -rotate-90 mb-4">
                <p>200+</p>
                <p>Satisfied Customers</p>
              </div>
              <div className="flex flex-col items-center space-y-[-10px]">
                {satisfiedCustomersAvatars.map((src, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-white"
                  >
                    <Image
                      src={src}
                      alt={`Customer ${index + 1}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Stats */}
            <div className="text-white space-y-4">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
