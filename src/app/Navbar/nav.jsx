"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../LogoandImage/TEVQuest-Official-New-Logo.png';

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header 
            className={`fixed top-0 inset-x-0 z-[100] w-full transition-all duration-500 ease-in-out ${
                scrolled 
                ? 'bg-[#0B1D33]/95 backdrop-blur-lg py-3 shadow-2xl border-b border-white/10' 
                : 'bg-transparent py-8' 
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                {/* Logo */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`relative transition-all duration-500 ease-in-out ${
                        scrolled ? 'w-32 h-10' : 'w-44 h-16'
                    }`}
                >
                    <Image src={logoImg} alt="TEVQuest Logo" fill priority className="object-contain object-left" />
                </motion.div>

                {/* Desktop Navigation */}
                <nav className={`hidden lg:flex items-center text-white transition-all duration-500 ${
                    scrolled ? 'space-x-5 text-[11px]' : 'space-x-8 text-[13px]'
                } font-bold tracking-[0.2em]`}>
                    <a href="#home" className="hover:text-[#FF4F00] transition-colors">HOME</a>
                    <span className="opacity-20">|</span>
                    
                    <div className="relative group py-2">
                        <button className="hover:text-[#FF4F00] transition-colors flex items-center gap-1 focus:outline-none uppercase">
                            ABOUT TEVQUEST
                            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-120 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                            {[
                                'Our Company', 
                                'Our Leadership'
                            ].map((item, idx, arr) => (
                                <a key={idx} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className={`px-5 py-3.5 text-white/90 hover:text-[#FF4F00] hover:bg-white/10 transition-colors text-[14px] font-medium text-left w-full ${idx !== arr.length - 1 ? 'border-b border-white/20' : ''}`}>
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <span className="opacity-20">|</span>
                    
                    <div className="relative group py-2">
                        <button className="hover:text-[#FF4F00] transition-colors flex items-center gap-1 focus:outline-none uppercase">
                            PRACTICE AREAS
                            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-120 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                            {[
                                'Techno Economic Feasibility Study', 
                                'Valuation of Tangible Asset', 
                                'Valuation of Securities', 
                                'Risk Analysis', 
                                'Compliance and Regulatory Evaluation', 
                                'Real Estate Advisory', 
                                'Auditing'
                            ].map((item, idx, arr) => (
                                <a key={idx} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className={`px-5 py-3.5 text-white/90 hover:text-[#FF4F00] hover:bg-white/10 transition-colors text-[14px] font-medium text-left w-full ${idx !== arr.length - 1 ? 'border-b border-white/20' : ''}`}>
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <span className="opacity-20">|</span>
                    <a href="#news" className="hover:text-[#FF4F00] transition-colors">NEWS</a>
                    
                    <a href="#contact" className={`ml-6 bg-[#FF4F00] text-white font-black transition-all transform hover:scale-105 shadow-lg active:scale-95 ${
                        scrolled ? 'px-6 py-2 text-[10px]' : 'px-8 py-3 text-[12px]'
                    }`}>
                        CONTACT US
                    </a>
                </nav>

                {/* Hamburger Button (Visible on Mobile) */}
                <button 
                    className="lg:hidden relative z-[110] p-2 text-white outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="w-6 h-5 flex flex-col justify-between items-end">
                        <span className={`block h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'}`}></span>
                        <span className={`block h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                        <span className={`block h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-5'}`}></span>
                    </div>
                </button>
            </div>

            {/* --- THE MISSING MOBILE MENU --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[105] bg-[#0B1D33] lg:hidden flex flex-col items-center justify-center space-y-8"
                    >
                        {/* Background Text Overlay */}
                        <div className="absolute top-10 left-10 text-white/5 font-black text-8xl pointer-events-none uppercase">TEV</div>

                        <nav className="flex flex-col items-center space-y-6 text-white text-xl font-black tracking-[0.3em]">
                            <a href="#home" onClick={closeMenu} className="hover:text-[#FF4F00] transition-colors">HOME</a>
                            
                            <div className="flex flex-col items-center w-full">
                                <button 
                                    onClick={() => setIsAboutOpen(!isAboutOpen)} 
                                    className="hover:text-[#FF4F00] transition-colors flex items-center gap-2 focus:outline-none uppercase"
                                >
                                    ABOUT TEVQUEST
                                    <svg className={`w-6 h-6 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </button>
                                <AnimatePresence>
                                    {isAboutOpen && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="flex flex-col items-center mt-3 overflow-hidden w-full border border-white/10 rounded-xl bg-black/50 backdrop-blur-xl"
                                        >
                                            {[
                                                'Our Company', 
                                                'Our Leadership'
                                            ].map((item, idx, arr) => (
                                                <a key={idx} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={closeMenu} className={`text-sm text-white/90 hover:text-[#FF4F00] hover:bg-white/10 transition-colors font-medium text-center w-full py-3 px-4 ${idx !== arr.length - 1 ? 'border-b border-white/20' : ''}`}>
                                                    {item}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="flex flex-col items-center w-full">
                                <button 
                                    onClick={() => setIsServicesOpen(!isServicesOpen)} 
                                    className="hover:text-[#FF4F00] transition-colors flex items-center gap-2 focus:outline-none uppercase"
                                >
                                    PRACTICE AREAS
                                    <svg className={`w-6 h-6 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </button>
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="flex flex-col items-center mt-3 overflow-hidden w-full border border-white/10 rounded-xl bg-black/50 backdrop-blur-xl"
                                        >
                                            {[
                                                'Techno Economic Feasibility Study', 
                                                'Valuation of Tangible Asset', 
                                                'Valuation of Securities', 
                                                'Risk Analysis', 
                                                'Compliance and Regulatory Evaluation', 
                                                'Real Estate Advisory', 
                                                'Auditing'
                                            ].map((item, idx, arr) => (
                                                <a key={idx} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={closeMenu} className={`text-sm text-white/90 hover:text-[#FF4F00] hover:bg-white/10 transition-colors font-medium text-center w-full py-3 px-4 ${idx !== arr.length - 1 ? 'border-b border-white/20' : ''}`}>
                                                    {item}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <a href="#news" onClick={closeMenu} className="hover:text-[#FF4F00] transition-colors">NEWS</a>
                            <div className="w-12 h-1 bg-[#FF4F00] my-4" />
                            <a href="#contact" onClick={closeMenu} className="bg-[#FF4F00] px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-[#0B1D33] transition-all">
                                CONTACT US
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Nav;
