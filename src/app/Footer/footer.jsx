"use client";

import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1C1E] text-white pt-24 pb-10 px-6 font-sans relative overflow-hidden">
      {/* Subtle Engineering Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#FF4F00 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Contact Info in Engineering Blue */}
          <div>
            <h3 className="text-xl font-serif mb-6 border-b-2 border-[#003399] pb-2 inline-block tracking-tight text-white">
              TevQuest <span className="text-[#FF4F00]">Private Limited</span>
            </h3>
            <div className="space-y-5 text-gray-400 text-sm font-light">
              <p className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#003399] shrink-0 transition-transform group-hover:scale-110" />
                <span>Regd. Off: 8/96, Indra Nagar, Lucknow, 226016 (UP)</span>
              </p>
              <p className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#003399] shrink-0 transition-transform group-hover:scale-110" />
                <span>Branch Offices: Gorakhpur, Lucknow and Gurugram</span>
              </p>
              <p className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#003399] shrink-0 transition-transform group-hover:scale-110" />
                <span className="hover:text-white transition-colors cursor-pointer">+91 9335918885</span>
              </p>
              <p className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#003399] shrink-0 transition-transform group-hover:scale-110" />
                <span className="hover:text-white transition-colors cursor-pointer">tevquest@gmail.com</span>
              </p>
            </div>
            
            <div className="mt-10">
              <h4 className="text-[#FF4F00] uppercase tracking-[0.2em] text-[10px] font-black mb-5">Connect with us</h4>
              <div className="flex gap-5">
                {[Facebook, Twitter, Youtube, Linkedin].map((Icon, idx) => (
                  <Icon key={idx} className="w-5 h-5 cursor-pointer text-gray-400 hover:text-[#FF4F00] transition-all transform hover:-translate-y-1" />
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-[#FF4F00] uppercase tracking-[0.2em] text-[10px] font-black mb-8">Useful Links</h3>
            <ul className="space-y-4 text-gray-400 text-xs tracking-wider">
              {['Home', 'About Us', 'Our Leadership', 'News & Updates', 'Careers', 'Sitemap', 'Contact Us'].map((link) => (
                <li key={link} className="flex items-center gap-2 group cursor-pointer">
                  <span className="w-0 h-[1px] bg-[#003399] transition-all group-hover:w-3"></span>
                  <span className="group-hover:text-white group-hover:translate-x-1 transition-all uppercase">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h3 className="text-[#FF4F00] uppercase tracking-[0.2em] text-[10px] font-black mb-8">Practice Areas</h3>
            <ul className="space-y-4 text-gray-400 text-xs tracking-wider">
              {[
                'Techno Economic Feasibility', 'Valuation of Tangible Asset', 
                'Valuation of Securities', 'Risk Analysis', 'Compliance & Regulatory',
                'Assist to Bank', 'Real Estate Advisory', 'Auditing'
              ].map((area) => (
                <li key={area} className="flex items-center gap-2 group cursor-pointer">
                  <span className="w-0 h-[1px] bg-[#003399] transition-all group-hover:w-3"></span>
                  <span className="group-hover:text-white group-hover:translate-x-1 transition-all uppercase">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Request A Call Back in Engineering Orange */}
          <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm relative rounded-sm shadow-2xl">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#FF4F00]" />
            <h3 className="text-[#FF4F00] uppercase tracking-[0.2em] text-[10px] font-black mb-6">Request A Call Back</h3>
            <form className="space-y-4">
              <input type="text" placeholder="NAME" className="w-full bg-[#121417] border border-gray-800 p-3 text-[10px] tracking-widest focus:outline-none focus:border-[#FF4F00] transition-colors" />
              <input type="email" placeholder="EMAIL" className="w-full bg-[#121417] border border-gray-800 p-3 text-[10px] tracking-widest focus:outline-none focus:border-[#FF4F00] transition-colors" />
              <input type="tel" placeholder="PHONE" className="w-full bg-[#121417] border border-gray-800 p-3 text-[10px] tracking-widest focus:outline-none focus:border-[#FF4F00] transition-colors" />
              <textarea placeholder="MESSAGE" rows="2" className="w-full bg-[#121417] border border-gray-800 p-3 text-[10px] tracking-widest focus:outline-none focus:border-[#FF4F00] transition-colors"></textarea>
              <button className="w-full bg-[#FF4F00] text-white font-black py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1C1E] transition-all duration-300 shadow-lg shadow-[#FF4F00]/20">
                Submit Request
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] tracking-[0.25em] text-gray-500 uppercase">
          <p>© {new Date().getFullYear()} TevQuest Private Limited. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#FF4F00] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#FF4F00] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
