import React from 'react';
import Link from 'next/link';

const Error = () => {
  return (
    <main>
      {/* Hero section */}
      <div
        className="relative bg-contain bg-center h-[580px] w-[1420px] items-center justify-center flex flex-col  text-center p-16"
        style={{ backgroundImage: "url('/assets/bg-grid.png')" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Error
        </h1>
        <p>Home &gt;&gt; Error</p>
      </div>

      <section className='relative -top-40 py-20 px-8 bg-darkBg'>
        <div className="flex flex-col items-center justify-center bg-darkBg text-lightText px-4">
          <h1 className="text-9xl md:text-[200px] font-bold text-[#EF7915] mb-8 animate-bounce">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 text-center">
            Look Like You're Lost
          </h2>
          <p className="text-lg text-gay-400 mb-12 text-center max-w-xl">
            The link you followed probably broken or the page has been removed
          </p>
          <Link
            href="/"
            className="bg-[#EF7915] text-gray-100 font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300 text-lg"
          >
            Back To Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Error;