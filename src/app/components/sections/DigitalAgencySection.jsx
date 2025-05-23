import Image from "next/image";
import Link from "next/link";

export default function DigitalAgencySection() {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto  items-center">
        {/* Top Content */}
        <div className="space-y-6 flex">
            {/* Left content */}
          <div className="w-1/2">
            <p className="text-sm text-orange-400 font-semibold">
              Your Inventory is time
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              We’re A <br /> Digital Agency <br /> Excellence Services
            </h2>
          </div>

          {/* Right content */}
          <div className="w-1/2">
            <p className="text-gray-300 text-base mb-6">
              And you spend over half of it on non-core functions like Following
              up for Payments or Writing Proposals from scratch or sending
              Manual Updates to your Clients.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center bg-orange-500 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition-colors duration-300 text-sm"
            >
              About us <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>

        {/* Bottom content */}
        <div className="flex justify-between">
          {/* Left content */}
          <div className="mt-10 space-y-4">
            <div>
              <p className="text-5xl font-bold text-orange-400">94%</p>
              <p className="text-gray-300">Digital Transformation</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-400">65%</p>
              <p className="text-gray-300">Marketing Strategy</p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative h-[450px]">
            <div className="w-[550px] h-[550px]">
                <Image
                    src="/assets/vr-man.png"
                    alt="VR Experience"
                    fill
                    className="object-fit rounded-lg"
                />
            </div>
            

            {/* Overlay Image */}
            <div className="absolute bottom-6 -left-4/6 w-[400px] h-[400px] border-2 border-orange-400 rounded-lg overflow-hidden">
              <Image
                src="/assets/technology-hand.png"
                alt="Tech Overlay"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
