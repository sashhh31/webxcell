import React from "react";

export default function blog() {
  return (
    <main>
        {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex flex-col  text-center p-16"
        style={{ backgroundImage: "url('/assets/bg-grid.png')" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Blog
        </h1>
        <p>Home &gt;&gt; Blog</p>
      </div>


    </main>
  );
}
