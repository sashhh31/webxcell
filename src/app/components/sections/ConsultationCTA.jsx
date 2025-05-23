// src/components/sections/ConsultationCTA.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function ConsultationCTA() {
    return (
        <section className="relative w-full min-h-[450px] flex items-stretch my-10 overflow-hidden rounded-xl shadow-lg">
            {/* Left Content with Gradient Background */}
            <div className="relative z-10 w-1/2 bg-gradient-to-br  backdrop-blur-2xl from-orange-700 to-orange-300  text-white flex flex-col justify-center px-8 lg:px-16 py-12">

                <p className="text-base font-medium mb-2 opacity-90">Book your free no obligation</p>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                    Consultation<br />Today! Get a <br />Digital Makeover
                </h2>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 text-lg w-fit mt-2"
                >
                    Let's Talk
                    <span className="flex items-center justify-center w-7 h-7 bg-orange-100 rounded-full ml-2 text-orange-600 text-xl">
                        ↗
                    </span>
                </Link>
            </div>

            {/* Right Image Section */}
            <div className="relative w-1/2 hidden lg:block">
                <Image
                    src="/assets/consultation-bg.png"
                    alt="Consultation Background"
                    fill
                    className="object-cover scale-125 object-center"
                />

                {/* Overlay to fade image under gradient */}
                <div className="absolute inset-0 bg-white opacity-15"></div>
            </div>
        </section>
    );
}