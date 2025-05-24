import React from "react";
import DigitalAgencySection from "../components/sections/DigitalAgencySection";
import WorkingProcessSection from "../components/sections/WorkingProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ConsultationCTA from "../components/sections/ConsultationCTA";
import AllServicesGridSection from "../components/sections/AllServicesGridSection";
import Link from "next/link";

export default function services() {
  return (
    <main>
        {/* Hero section */}
      <div
        className="relative bg-contain bg-center h-[580px] w-[1420px] items-center justify-center flex flex-col  text-center p-16"
        style={{ backgroundImage: "url('/assets/bg-grid.png')" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Services
        </h1>
        <p>Home &gt;&gt; Services</p>
      </div>

      <AllServicesGridSection />
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "SEO Link Building Optimization", slug: "seo-link-building-optimization" },
          { title: "Web Development", slug: "web-development" },
          { title: "Digital Marketing", slug: "digital-marketing" },
        ].map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="block bg-[#181818] rounded-xl p-6 text-white hover:bg-[#232323] transition">
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <span className="text-[#FE7915]">View Details &rarr;</span>
          </Link>
        ))}
      </div>
      <DigitalAgencySection />
      <WorkingProcessSection />
      <TestimonialsSection />
      <ConsultationCTA />
    </main>
  );
}
