import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ title, date, category, imageUrl, href }) {
  return (
    <Link href={href} className="block group">
      <div className="bg-[#1C1C1C] rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-transform duration-300 transform group-hover:-translate-y-1">
        {imageUrl && (
          <div className="relative w-full h-48">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-sm text-[#AAAAAA] mb-2">
            {date} &bull; {category}
          </p>
          <h3 className="text-xl font-semibold text-white mb-4 flex-grow group-hover:text-[#FE7915] transition-colors">
            {title}
          </h3>
          
        </div>
      </div>
    </Link>
  );
}