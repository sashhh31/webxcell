import React from "react";
import AboutPageHeroSection from "../components/sections/AboutPageHeroSection";
import AboutPageStatsSection from "../components/sections/AboutPageStatsSection";
import WorkingProcessSection from "../components/sections/WorkingProcessSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

export default function about() {
  return (
    <main>
        {/* Hero Section */}
      <div
        className="relative bg-contain bg-center h-[580px] w-[1420px] items-center justify-center flex flex-col  text-center p-16"
        style={{ backgroundImage: "url('/assets/bg-grid.png')" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          About
        </h1>
        <p>Home &gt;&gt; About</p>
      </div>

      <AboutPageHeroSection />
      <AboutPageStatsSection />
      <WorkingProcessSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      
    </main>
  );
}
