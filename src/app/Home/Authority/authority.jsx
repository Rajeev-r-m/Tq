"use client";
import React from 'react';
import Image from 'next/image';

// Temporary mock logos array. Replace with real objects/images.
const mockLogos = [
    { id: 1, name: 'Partner 1' },
    { id: 2, name: 'Partner 2' },
    { id: 3, name: 'Partner 3' },
    { id: 4, name: 'Partner 4' },
    { id: 5, name: 'Partner 5' },
    { id: 6, name: 'Partner 6' },
    { id: 7, name: 'Partner 7' }, // Remove or comment this line to test the <= 6 centered grid!
];

const Authority = () => {
    // Determine condition based closely on the requirement: If > 6 logos -> carousel
    const isCarousel = mockLogos.length > 6;

    return (
        <section id="authority" className="w-full py-16 md:py-24 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Trusted Partners</h2>
                <p className="text-lg text-gray-500 mb-6 max-w-2xl mx-auto">Embracing excellence alongside industry leaders across the technological landscape.</p>
                <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            {/* Container Fluid Equivalent (Full Width with some optional padding) */}
            <div className="w-full relative px-4 md:px-8">
                {isCarousel ? (
                    // Infinite Horizontal Carousel (Auto-scroll for > 6 elements)
                    <div className="relative w-full flex overflow-hidden group py-4">
                        {/* Gradient Masks to cover the harsh entrance/exits */}
                        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

                        {/* Scrolling Track */}
                        <div className="flex w-max scrolling-track cursor-pointer">
                            {/* Duplicate array mapping to create seamless infinite loop effect */}
                            {[...mockLogos, ...mockLogos].map((logo, index) => (
                                <div key={index} className="flex-none px-4 md:px-10 flex items-center justify-center">
                                    <div className="w-36 md:w-48 h-20 md:h-24 transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 flex items-center justify-center bg-gray-50/50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-200">
                                        {/* Replace this span with an <Image /> component when you have the actual logo files */}
                                        <span className="font-bold text-gray-400 text-lg">{logo.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    // Centered Flexbox layout / 2-Column Grid on Mobile (For <= 6 elements)
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 md:gap-12 items-center py-4">
                        {mockLogos.map((logo) => (
                            <div key={logo.id} className="flex items-center justify-center">
                                <div className="w-full max-w-[160px] md:w-48 h-20 md:h-24 transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 flex items-center justify-center bg-gray-50/50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-200 cursor-pointer">
                                    <span className="font-bold text-gray-400 text-lg">{logo.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Custom Keyframes embedded safely to strictly support the Auto-Scroll logic natively without Tailwind config editing */}
            <style>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .scrolling-track {
                    animation: infinite-scroll 25s linear infinite;
                }
                /* Optional feature: Pauses auto-scroll on user hover so they can inspect a logo */
                .scrolling-track:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default Authority;