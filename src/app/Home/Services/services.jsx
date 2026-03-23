"use client";
import React from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Techno-Economic Feasibility',
    short: 'Comprehensive TEV studies evaluating technical viability and financial models for complex projects.',
    detail: 'Our TEV studies involve deep-dive risk assessment, cost-benefit analysis, and accurate operational forecasting necessary for massive bank approvals and regulatory compliance.',
    icon: ( <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> )
  },
  {
    id: 2,
    title: 'Tangible Asset Valuation',
    short: 'Precise valuation of industrial plants, real estate, heavy machinery, and infrastructure assets.',
    detail: 'Leveraging CBDT-approved frameworks, we provide legally compliant, stress-tested asset valuation reports critical for taxation, major acquisitions, and balance sheet structuring.',
    icon: ( <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> )
  },
  {
    id: 3,
    title: 'Securities & Financial Assets',
    short: 'Expert valuation of corporate shares, bonds, complex derivatives, and financial instruments.',
    detail: 'Utilizing discounted cash flow models and market comparative methods to precisely determine the fair value of unlisted securities and complex intangible portfolios.',
    icon: ( <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> )
  },
  {
    id: 4,
    title: 'Risk & Mitigation Analysis',
    short: 'Identifying, quantifying, and strategizing against deep operational and systemic financial risks.',
    detail: 'We build robust risk matrices and bulletproof mitigation playbooks to protect your tier-1 capital investments from unforeseen environmental, operational, or market shocks.',
    icon: ( <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> )
  },
  {
    id: 5,
    title: 'Compliance & Regulatory',
    short: 'Ensuring total adherence to local, state, and federal industrial regulations unconditionally.',
    detail: 'From navigating environmental clearances to securing critical municipal structural approvals, our compliance teams guarantee a completely frictionless project deployment.',
    icon: ( <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> )
  },
  {
    id: 6,
    title: 'Real Estate Advisory',
    short: 'Strategic consulting for sprawling commercial and residential real estate developments.',
    detail: 'We provide highest-and-best-use studies, advanced demographic analysis, and zoning intelligence to absolutely maximize baseline returns on massive land acquisitions.',
    icon: ( <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> )
  },
  {
    id: 7,
    title: 'Project Setup Auditing',
    short: 'Rigorous technical and financial audits spanning the complete lifecycle of heavy industrial setups.',
    detail: 'Continuous real-time monitoring of material quality, cash burn rates, and timeline adherence to systematically prevent cost overruns and structural deficiencies.',
    icon: ( <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> )
  },
  {
    id: 8,
    title: 'Structural Engineering',
    short: 'Designing incredibly robust and maximally cost-effective architectural structural frameworks.',
    detail: 'Applying advanced CAD AI modelling and extreme load-bearing stress tests for high-magnitude civil engineering and heavy industrial factory deployment.',
    icon: ( <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> )
  },
  {
    id: 9,
    title: 'Financial Restructuring',
    short: 'Optimizing debt profiles and capital structures for distressed or rapidly expanding global assets.',
    detail: 'We work closely alongside key NPA boards and private equity firms to systematically reinvent capital chains, stabilizing core operations while unlocking true enterprise value.',
    icon: ( <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> )
  },
  {
    id: 10,
    title: 'M&A Due Diligence',
    short: 'Uncovering the hidden, deeply embedded liabilities and actual raw value inside target acquisitions.',
    detail: 'Intensive forensic technical inspections paired seamlessly with accounting scrutiny to ensure corporate mergers are priced correctly without catastrophic post-deal surprises.',
    icon: ( <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg> )
  },
  {
    id: 11,
    title: 'Insolvency Valuation',
    short: 'Liquidating or reinventing assets strictly under the IBC (Insolvency & Bankruptcy Code).',
    detail: 'Executing rapid, highly certified property and complex machinery appraisals directly for National Company Law Tribunal (NCLT) authorized resolution professionals.',
    icon: ( <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> )
  },
  {
    id: 12,
    title: 'ESG Consulting',
    short: 'Adapting operations to rapidly evolving Environmental & Social Governance legal frameworks.',
    detail: 'Implementing massive carbon-neutral roadmaps, waste management efficiencies, and equitable corporate labor practices that actively attract modern institutional investors.',
    icon: ( <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> )
  }
];

const Services = () => {
    return (
        <section id="services" className="w-full py-20 md:py-32 bg-gray-50 selection:bg-orange-100 selection:text-orange-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-3 block">Our Core Competencies</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6 tracking-tight leading-tight">Elevating Value Through Precision</h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        We deliver a comprehensive suite of techno-economic consulting services designed to maximize operational efficiency and enterprise valuation.
                    </p>
                </div>

                {/* 3-Column Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <div 
                            key={service.id}
                            className="group relative overflow-hidden bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out hover:-translate-y-[10px] focus-within:-translate-y-[10px] focus-within:ring-2 focus-within:ring-orange-500 focus-within:outline-none"
                            tabIndex={0}
                            role="region"
                            aria-labelledby={`service-title-${service.id}`}
                        >
                            {/* Inner Padding Container */}
                            <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
                                
                                {/* Icon Wrapper */}
                                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-8 shrink-0 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 ease-in-out">
                                    {service.icon}
                                </div>
                                
                                {/* Text Content */}
                                <div className="flex-1 flex flex-col">
                                    <h3 id={`service-title-${service.id}`} className="text-xl md:text-2xl font-bold text-blue-950 mb-4 transition-colors group-hover:text-orange-600">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-base text-gray-600 leading-[1.7]">
                                        {service.short}
                                    </p>

                                    {/* CSS Accordion Expandable Effect */}
                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                        <div className="overflow-hidden opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 delay-100">
                                            <p className="text-[15px] text-gray-500 leading-relaxed mt-5 pt-5 border-t border-gray-100">
                                                {service.detail}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Learn More Call to Action */}
                                <div className="mt-8 flex items-center text-blue-900 font-semibold text-sm tracking-wide">
                                    <span className="group-hover:text-orange-600 transition-colors">Explore Capability</span>
                                    <svg 
                                        className="w-4 h-4 ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-2 group-focus-within:translate-x-2 transition-all duration-300 text-orange-600" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Subtle Glassmorphism Overlay (Hover Base Glow) */}
                            <div className="absolute inset-0 bg-linear-to-br from-orange-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
