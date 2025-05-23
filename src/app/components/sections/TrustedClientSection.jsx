import React from "react";
import Image from "next/image";

const TrustedClientSection = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="text-center mb-10">
        <p className="text-2xl md:text-3xl font-semibold">
          Our Trusted & Valuable{" "}
          <span className="text-orange-500">Clients</span>
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/assets/trusted-client.png"
          width={1280}
          height={70}
          alt="Trusted Clients"
          className="w-full max-w-6xl rounded-lg shadow-lg object-contain"
        />
      </div>
    </section>
  );
};

export default TrustedClientSection;
