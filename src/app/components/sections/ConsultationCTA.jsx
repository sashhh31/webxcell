// src/components/sections/ConsultationCTA.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function ConsultationCTA() {
    return (

        <section className="relative w-full min-h-[450px] flex items-stretch my-10 overflow-hidden">
            {/* Left Content with Gradient Background */}
            <div className="relative z-10 w-full lg:w-7/12 bg-gradient-to-r from-orange-600 to-orange-200 text-white flex flex-col justify-center px-8 lg:px-16 py-12">
                <p className="text-xl font-medium mb-3">Book your free no obligation</p>
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
                    Consultation Today! <br /> Get a Digital Makeover
                </h2>
                <Link
                    href="/contact"
                    className="inline-flex items-center bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg w-fit"
                >
                    Let's Talk <span className="ml-2">↗</span>
                </Link>
            </div>

            {/* Right Image Section */}
            <div className="relative w-5/12 hidden lg:block">
                <Image
                    src="/assets/consultation-bg.png"
                    alt="Consultation Background"
                    fill
                    className="object-cover object-center"
                />

                {/* Overlay to fade image under gradient */}
                <div className="absolute inset-0 bg-white opacity-30"></div>
            </div>
        </section>
    );
}