"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const pillarsData = [
  {
    id: 1,
    title: 'Industry Experience',
    short: '30 Years of industry-specific knowledge at your service.',
    icon: (
      <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M3 17.5l4-4 4 4 10-10m0 0v4m0-4h-4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="18" y="16" width="3" height="3" rx="0.5" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Commitment',
    short: 'Dedicated to your success, today and tomorrow.',
    icon: (
      <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Capabilities',
    short: 'Empowering your goals with versatile expertise.',
    icon: (
      <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Leaders',
    short: 'Guided by visionary minds and strong leadership.',
    icon: (
      <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 2v20M2 12h20" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const WhyChooseUs = () => {
  // --- FIX FOR HYDRATION ERROR ---
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <section className="py-24 bg-[#0a0c10]" />; 
  // -------------------------------

  return (
    <section className="relative py-24 px-6 bg-[#0a0c10] overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ backgroundImage: `radial-gradient(#FF4F00 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-white text-3xl md:text-5xl font-serif mb-4 uppercase tracking-tighter">
            Our Commitment to <span className="text-[#FF4F00]">Excellence</span>
          </h2>
          <div className="w-24 h-[2px] bg-[#003399] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light tracking-wide italic">
            Join forces with a team driven by expertise and a deep commitment to achieving your ambitions.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {pillarsData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="relative p-10 group flex flex-col items-center text-center transition-all duration-500 rounded-lg 
                         bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="text-[#003399] mb-8 transition-all duration-500 group-hover:scale-110 group-hover:text-[#FF4F00] group-hover:drop-shadow-[0_0_15px_rgba(255,79,0,0.5)]">
                {item.icon}
              </div>
              
              <h3 className="text-white text-lg font-bold mb-3 uppercase tracking-widest group-hover:text-white transition-colors relative z-10">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-xs italic group-hover:text-gray-200 transition-colors leading-relaxed relative z-10">
                {item.short}
              </p>
              
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#FF4F00] transition-all duration-1000 ease-out group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;