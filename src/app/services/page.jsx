import React from "react";
import DigitalAgencySection from "../components/sections/DigitalAgencySection";
import WorkingProcessSection from "../components/sections/WorkingProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ConsultationCTA from "../components/sections/ConsultationCTA";
import AllServicesGridSection from "../components/sections/AllServicesGridSection";

export default function services() {
  return (
    <main>
        {/* Hero section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex flex-col  text-center p-16"
        style={{ backgroundImage: "url('/assets/bg-grid.png')" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Services
        </h1>
        <p>Home &gt;&gt; Services</p>
      </div>

      <AllServicesGridSection />
      <DigitalAgencySection />
      <WorkingProcessSection />
      <TestimonialsSection />
      <ConsultationCTA />
    </main>
  );
}
