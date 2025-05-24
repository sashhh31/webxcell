import React from "react";
import FAQSection from "../components/sections/FAQSection";

export default function FAQs() {
  return (
    <main>
      {/* Hero section */}
      <div
        className="relative bg-contain bg-center h-[580px] w-[1420px] items-center justify-center flex flex-col  text-center p-16"
        style={{ backgroundImage: "url('/assets/bg-grid.png')" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          FAQ's
        </h1>
        <p>Home &gt;&gt; FAQ's</p>
      </div>

      <FAQSection />
    </main>
  );
}
