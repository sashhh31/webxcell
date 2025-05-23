import React from "react";
import ContactInfoCardsSection from "../components/sections/ContactInfoCardSection";
import ContactFormSection from "../components/sections/ContactFormSection";

export default function contact() {
  return (
    <main>
      {/* Hero section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex flex-col  text-center p-16"
        style={{ backgroundImage: "url('/assets/bg-grid.png')" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Contact Us
        </h1>
      </div>

        <ContactInfoCardsSection />
        <ContactFormSection />

    </main>
  );
}
