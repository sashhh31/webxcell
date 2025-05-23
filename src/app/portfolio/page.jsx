import React from "react";
import ConsultationCTA from "../components/sections/ConsultationCTA";
import PortfolioGridSection from "../components/sections/PortfolioGridSection";


export default function portfolio() {
  return (
    <main>
        {/* Hero section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex flex-col  text-center p-16"
        style={{ backgroundImage: "url('/assets/bg-grid.png')" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Portfolio
        </h1>
        <p>Home &gt;&gt; Portfolio</p>
      </div>


      <PortfolioGridSection />
      <ConsultationCTA />
    </main>
  );
}
