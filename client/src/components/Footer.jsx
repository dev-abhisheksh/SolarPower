import React from 'react';
import { Link } from 'react-router-dom';
import { RiSunFill, RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <RiSunFill className="text-3xl text-yellow-500" />
              <span className="text-2xl font-bold text-white">Solar House</span>
            </Link>
            <p className="text-gray-400 leading-relaxed italic">
              || Om Ganeshay Namah ||
            </p>
            <p className="text-gray-400 leading-relaxed">
              Solar House | Roof Top Solutions<br />
              <span className="text-xs text-gray-500">GSTIN: 30AFXFS4194R1ZW</span>
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-all">
                <RiFacebookFill size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-all">
                <RiInstagramFill size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-all">
                <RiLinkedinFill size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-all">
                <RiYoutubeFill size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-500 transition-colors">Latest News</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Residential Solar</Link></li>
              <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Commercial Solar</Link></li>
              <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Expert Installation</Link></li>
              <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Dukle Heaven at Shop No. 5, Block 1, ST Inez, Panjim, Goa</li>
              <li>Aman R Dubey: +91 7219730511</li>
              <li>Reshma Naik: +91 77190 39958</li>
              <li>Email: info@solarhousegoa.com</li>
              <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Solar House (Roof Top Solutions) LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
