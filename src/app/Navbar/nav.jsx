"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../LogoandImage/TEVQuest-Official-New-Logo.png';

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
                    <a href="#company" className="hover:text-[#FF4F00] transition-colors">ABOUT</a>
                    <span className="opacity-20">|</span>
                    <a href="#services" className="hover:text-[#FF4F00] transition-colors">PRACTICE AREAS</a>
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
                            <a href="#company" onClick={closeMenu} className="hover:text-[#FF4F00] transition-colors">ABOUT</a>
                            <a href="#services" onClick={closeMenu} className="hover:text-[#FF4F00] transition-colors">PRACTICE AREAS</a>
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
