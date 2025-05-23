import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; 
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md'; 
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 pt-32 mt-48">
      {/* NewsLetter section */}
      <section
        className="absolute -top-24 right-2/12 w-8/12 max-w-[1024px] mx-auto py-16 px-8 text-center overflow-hidden -mt-10 rounded-2xl shadow-2xl" 
        style={{ 
          backgroundImage: "url('/frame.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h2 className="text-4xl md:text-3xl font-bold leading-tight mb-8">
            Stay Abreast Of The Latest In Digital<br />with Our Curated Content Every Week<br />In Your Inbox
          </h2>

          <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full sm:w-2/3 px-6 py-3 rounded-full bg-black bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EF7915] focus:border-transparent text-lg transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#EF7915] text-white font-bold py-3 px-12 rounded-full hover:bg-[#d66a12] transition-all duration-300 text-lg transform hover:scale-105"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="container mx-auto mt-10 bg-gray-900 py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-gray-800">
          {/* Logo & Description & Social Icons */}
          <div className="space-y-6">
            <Link href="/" className="text-4xl font-bold text-white mb-4 block hover:text-[#EF7915] transition-colors duration-300">
            <Image src="/assets/logo.png" alt="Webxcell Digital" width={150} height={150} />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Webxcell Digital is a digital marketing agency that provides businesses with digital promotion strategies to companies globally.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EF7915] hover:bg-[#d66a12] transition-all duration-300 text-white transform hover:scale-110">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EF7915] hover:bg-[#d66a12] transition-all duration-300 text-white transform hover:scale-110">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EF7915] hover:bg-[#d66a12] transition-all duration-300 text-white transform hover:scale-110">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EF7915] hover:bg-[#d66a12] transition-all duration-300 text-white transform hover:scale-110">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#EF7915] mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-[#EF7915] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About
              </Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-[#EF7915] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact us
              </Link></li>
              <li><Link href="/faqs" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-[#EF7915] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                FAQ's
              </Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-[#EF7915] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Portfolio
              </Link></li>
              <li><Link href="/blogs" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-[#EF7915] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Blogs & News
              </Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#EF7915] mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/digital-marketing" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-[#EF7915] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Digital Marketing
              </Link></li>
              <li><Link href="/services/web-development" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-[#EF7915] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Web Development
              </Link></li>
              <li><Link href="/services/seo-optimized" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-[#EF7915] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                SEO Optimized
              </Link></li>
              <li><Link href="/services/brand-design-identity" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-[#EF7915] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Brand Design Identity
              </Link></li>
              <li><Link href="/services/email-marketing" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-[#EF7915] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Email Marketing
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#EF7915] mb-6">Contact Us On</h3>
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-[#EF7915] bg-opacity-10 flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all duration-300">
                  <MdPhone size={20} className="text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-[#EF7915] transition-colors duration-300">+44 800 195 7512</span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-[#EF7915] bg-opacity-10 flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all duration-300">
                  <MdEmail size={20} className="text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-[#EF7915] transition-colors duration-300">contact@webxcell.com</span>
              </div>
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-[#EF7915] bg-opacity-10 flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all duration-300 flex-shrink-0">
                    <MdLocationOn size={20} className="text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-[#EF7915] transition-colors duration-300">Courtyard Business Ctr, Nottingham NG8 1PA, UK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Policies */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 text-sm space-y-4 md:space-y-0">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Webxcell Digital. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms-conditions" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300">Terms & Conditions</Link>
            <Link href="/cookies-policy" className="text-gray-400 hover:text-[#EF7915] transition-colors duration-300">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}