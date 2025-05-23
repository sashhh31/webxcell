import Image from 'next/image';

export default function TechCard({ techName, children }) {
  return (
    <div className="bg-gray-800 p-6 flex flex-col items-center justify-center border-[0.5px] border-[#EF7915] h-48 w-full">
      {children }
      <h3 className="text-xl font-semibold text-lightText text-center">{techName}</h3>
    </div>
  );
}