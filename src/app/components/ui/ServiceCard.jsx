import { FaBookOpen, FaEnvelope, FaLaptopCode, FaLink, FaPalette, FaVideo } from 'react-icons/fa';

export default function ServiceCard({ title, description, icon }) {
  const cardClasses = `p-8 rounded-lg shadow-lg h-full flex flex-col justify-between
    bg-[#1C1C1C] text-grayText hover:opacity-90 transition-opacity duration-300 transform hover:-translate-y-1`;

  const iconClasses = `mb-6 text-4xl text-[#EF7915]`;

  const renderIcon = () => {
    switch (icon) {
      case 'FaBookOpen':
        return <FaBookOpen className={iconClasses} />;
      case 'FaEnvelope':
        return <FaEnvelope className={iconClasses} />;
      case 'FaLaptopCode':
        return <FaLaptopCode className={iconClasses} />;
      case 'FaLink':
        return <FaLink className={iconClasses} />;
      case 'FaPalette':
        return <FaPalette className={iconClasses} />;
      case 'FaVideo':
        return <FaVideo className={iconClasses} />;
      default:
        return null;
    }
  };

  return (
    <div className={cardClasses}>
      {renderIcon()}
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}