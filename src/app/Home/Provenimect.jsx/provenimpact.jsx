"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Search, Globe, Building2 } from 'lucide-react';

const StatCounter = ({ value, label, icon: Icon, suffix = "+", delay = 0, subtext = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, { mass: 1, stiffness: 60, damping: 20 });
    const displayValue = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            setTimeout(() => spring.set(value), delay * 1000);
        }
    }, [isInView, spring, value, delay]);

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: delay }}
            whileHover={{ y: -12 }}
            className="relative flex flex-col items-center p-10 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(0,51,153,0.05)] transition-all duration-500 group overflow-hidden"
        >
            {/* Soft Inner Glow for Light Glass */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none" />

            {/* Animated Icon Container */}
            <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="p-5 bg-[#f0f4f8] rounded-2xl border border-blue-50 group-hover:bg-[#FF4F00] transition-colors duration-500"
            >
                <Icon size={40} className="text-[#003399] group-hover:text-white transition-colors duration-500" />
            </motion.div>

            {/* Counter Section */}
            <div className="mt-8 flex items-baseline text-6xl font-black tracking-tighter text-[#003399]">
                <motion.span>{displayValue}</motion.span>
                <span className="text-[#FF4F00] ml-1">{suffix}</span>
            </div>

            {/* Labels */}
            <div className="text-center mt-4">
                <p className="text-[10px] font-black tracking-[0.3em] text-slate-400 group-hover:text-[#003399] transition-colors uppercase">
                    {label}
                </p>
                {subtext && (
                    <p className="mt-3 text-sm text-slate-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        {subtext}
                    </p>
                )}
            </div>

            {/* Bottom Engineering Accent Bar */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#FF4F00] transition-all duration-700 group-hover:w-full" />
        </motion.div>
    );
};

export default function ProvenImpact() {
    return (
        <section className="relative py-32 overflow-hidden bg-white">
            {/* Subtle Engineering Grid (Light Blue) */}
            <div className="absolute inset-0 z-0 opacity-[0.08]" 
                 style={{ backgroundImage: `radial-gradient(#003399 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
            />
            
            {/* Large Decorative Faint Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />

            <div className="container relative mx-auto px-6 z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <h2 className="text-[#003399] text-3xl md:text-5xl font-serif mb-6 uppercase tracking-tight">
                        Delivering Excellence Through <span className="text-[#FF4F00]">Precision</span>
                    </h2>
                    <div className="h-[2px] w-24 bg-[#FF4F00] mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <StatCounter 
                        value={500} 
                        label="Projects Evaluated" 
                        icon={Search} 
                        delay={0.1}
                        subtext="Techno-Economic Accuracy"
                    />
                    <StatCounter 
                        value={10} 
                        label="Industries Covered" 
                        icon={Globe} 
                        delay={0.3}
                        subtext="Real Estate to Aviation"
                    />
                    <StatCounter 
                        value={3} 
                        label="Regional Offices" 
                        icon={Building2} 
                        delay={0.5}
                        subtext="Lucknow • Gorakhpur • Gurugram"
                    />
                </div>
            </div>
        </section>
    );
}
