// src/components/sections/HeroSection.jsx
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[600px] flex justify-center text-center p-16"
      style={{ backgroundImage: "url('/assets/bg-grid.png')" }} 
    >

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className='text-lg text-[#EF7915]'>Transforms Visions</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-lightText leading-tight mb-6">
          Your Digital Future Designed Today
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10">
          Webxcell is Transforming your visions into Digital experiences that will inspire and Engage you throughout your digital journey!! explore our services and get started!!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button href="/services" variant="primary">
            Explore Services ↗
          </Button>
        </div>
      </div>

      <div 
        className='absolute top-64 w-full h-[600px]'
        style={{ backgroundImage: "url('/assets/dot-graphic.png')" }} 
      ></div>
    </section>
  );
}