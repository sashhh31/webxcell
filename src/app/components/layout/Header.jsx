import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
  return (
    <header className="bg-darkBg py-4 px-8 border-b border-gray-800 text-lightText">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          YourLogo
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-primary transition-colors">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-primary transition-colors">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/FAQ" className="hover:text-primary transition-colors">
              FAQ's
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-primary transition-colors">
              Contact us
            </Link>
          </li>
        </ul>

        {/* Contact Us Button */}
        <Link href="/contact">
          <Button>
            Free Consultation
          </Button>
        </Link>
      </nav>
    </header>
  );
}