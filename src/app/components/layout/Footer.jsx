import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; 
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md'; 

export default function Footer() {


  return (
    <footer className="relative bg-[#444444] text-grayText pt-32 mt-48">

      {/* NewsLetter section */}
      <section
        className="absolute -top-24 right-2/12 w-8/12 max-w-[1024px] mx-auto bg-[#EF7915] py-12 px-8 text-center overflow-hidden -mt-10" 
        style={{ backgroundImage: "url('/assets/dot-graphic.png')" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto text-lightText">
          <h2 className="text-4xl md:text-2xl font-bold leading-tight mb-6">
            Stay Abreast Of The Latest In Digital<br />with Our Curated Content Every Week<br />In Your Inbox
          </h2>

          <form  className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full sm:w-2/3 px-4 py-2 rounded-full bg-white bg-opacity-20 border border-white border-opacity-30 text-lightText placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-lg"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-gray-500 font-bold py-2 px-10 rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="container mx-auto py-10 px-8"> {/* Added padding for main footer content */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
          {/* Logo & Description & Social Icons */}
          <div>
            <Link href="/" className="text-3xl font-bold text-lightText mb-4 block">
              WEBXCELL
            </Link>
            <p className="text-sm mb-4">
              Webxcell Digital is a digital marketing agency that provides businesses with digital promotion strategies to companies globally.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Icons with rounded backgrounds */}
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#EF7915] hover:bg-primary transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#EF7915] hover:bg-primary transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#EF7915]hover:bg-primary transition-colors">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#EF7915] hover:bg-primary transition-colors">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4 text-[#EF7915]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact us</Link></li>
              <li><Link href="/faqs" className="hover:text-primary transition-colors">FAQ's</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/blogs" className="hover:text-primary transition-colors">Blogs & News</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4 text-[#EF7915]">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/digital-marketing" className="hover:text-primary transition-colors">Digital Marketing</Link></li> 
              <li><Link href="/services/web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services/seo-optimized" className="hover:text-primary transition-colors">SEO Optimized</Link></li>
              <li><Link href="/services/brand-design-identity" className="hover:text-primary transition-colors">Brand Design Identity</Link></li>
              <li><Link href="/services/email-marketing" className="hover:text-primary transition-colors">Email Marketing</Link></li>
            </ul>
          </div>

          {/* Contact Info (with icons) */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4 text-[#EF7915]">Contact Us On</h3> 
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <MdPhone size={20} className="text-primary mr-3 text-[#EF7915]" />
                <span>+44 800 195 7512</span>
              </div>
              <div className="flex items-center text-sm ">
                <MdEmail size={20} className="text-primary mr-3 text-[#EF7915]" />
                <span>contact@webxcell.com</span>
              </div>
              <div className="flex items-start text-sm"> 
                <MdLocationOn size={20} className="text-primary mr-3 flex-shrink-0 mt-1 text-[#EF7915]" />
                <span>Courtyard Business Ctr, Nottingham NG8 1PA, UK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Policies */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs space-y-2 md:space-y-0">
          <p className="text-grayText">&copy; All Copyright {new Date().getFullYear()} by Webxcell Digital</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/cookies-policy" className="hover:text-primary transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}