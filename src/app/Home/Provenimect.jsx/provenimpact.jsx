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
            className="relative flex flex-col items-center p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group overflow-hidden"
        >
            {/* Animated Icon Container */}
            <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="p-5 bg-orange-50 rounded-2xl group-hover:bg-orange-600 transition-colors duration-500"
            >
                <Icon size={40} className="text-orange-600 group-hover:text-white transition-colors duration-500" />
            </motion.div>

            {/* Counter Section */}
            <div className="mt-8 flex items-baseline text-6xl font-black tracking-tighter text-blue-950 group-hover:text-orange-600 transition-colors duration-500">
                <motion.span>{displayValue}</motion.span>
                <span className="text-orange-600 ml-1">{suffix}</span>
            </div>

            {/* Labels */}
            <div className="text-center mt-4">
                <p className="text-[11px] font-bold tracking-[0.3em] text-gray-500 group-hover:text-blue-950 transition-colors uppercase">
                    {label}
                </p>
                {subtext && (
                    <p className="mt-3 text-[14px] text-gray-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        {subtext}
                    </p>
                )}
            </div>

            {/* Bottom Accent Bar */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-orange-600 transition-all duration-700 group-hover:w-full" />
        </motion.div>
    );
};

export default function ProvenImpact() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gray-50 selection:bg-orange-100 selection:text-orange-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
                >
                    <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-3 block">Our Proven Impact</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6 tracking-tight leading-tight">
                        Delivering Excellence Through <span className="text-orange-600">Precision</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        Measurable results and a legacy of actionable impact across global industries.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
