"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    
    // 1. Setup Scroll Progress for Parallax
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // 2. Transformations: Background stays, Text moves up & fades out on scroll
    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section 
            ref={containerRef}
            id="home" 
            className="relative w-full h-screen flex flex-col items-center text-white overflow-hidden"
        >
            {/* Background Video with Parallax Scale */}
            <motion.div 
                style={{ scale: scaleVideo }}
                className="absolute inset-0 z-0"
            >
                <video
                    // src="https://pixabay.com/videos/city-downtown-midtown-cityscape-219339/"
                    src="/219339.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/65 z-10"></div>
            </motion.div>

            {/* Main Text Content with Entrance & Scroll Animation */}
            <motion.div 
                style={{ y: yText, opacity: opacityText }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20 flex-1 flex flex-col justify-center text-center px-4 sm:px-6 max-w-5xl pb-32"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                    Translating Technical Plans into <br className="hidden sm:block" />
                    <span className="text-orange-500"> Economic Reality.</span>
                </h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-200 px-2"
                >
                    Premier Techno-Economic Viability & Valuation Consultancy
                </motion.p>
                
                {/* Scroll Indicator Icon */}
                <motion.div 
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 hidden md:block"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-orange-500 rounded-full" />
                    </div>
                </motion.div>
            </motion.div>

            {/* Action Cards with Staggered Entrance */}
            <div className="absolute bottom-0 left-0 w-full z-20 flex flex-wrap justify-center gap-4 pb-10 pt-32 bg-gradient-to-t from-black via-black/80 to-transparent">
                {[
                    { href: "#who", titleOrange: "Who", titleWhite: "We Are" },
                    { href: "#what", titleOrange: "What", titleWhite: "We Do" },
                    { href: "#why", titleOrange: "Why", titleWhite: "Choose Us" },
                    { href: "#strength", titleOrange: "Our", titleWhite: "Strength" },
                    { href: "#goal", titleOrange: "Our", titleWhite: "Goal" },
                ].map((card, index) => (
                    <motion.a 
                        key={index} 
                        href={card.href}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + (index * 0.1), duration: 0.2 }}
                        whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.15)" }}
                        className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-4 min-w-[130px] sm:min-w-[160px] shadow-2xl transition-colors duration-300 group"
                    >
                        <span className="text-orange-500 font-bold text-lg sm:text-xl mb-1 group-hover:text-orange-400 transition-colors uppercase tracking-wider">
                            {card.titleOrange}
                        </span>
                        <span className="text-white/90 font-medium tracking-wide text-xs sm:text-base whitespace-nowrap">
                            {card.titleWhite}
                        </span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Hero;
