import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSummary from "@/components/AboutSummary";
import WhatWeDo from "@/components/WhatWeDo";
import Sustainability from "@/components/Sustainability";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";
import { Globe, TrendingUp, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-quantum-white selection:bg-quantum-red selection:text-white">
      {/* Navigation Layer */}
      <Navbar />
      
      {/* 00. Hero Section */}
      <Hero />
      
      {/* 01. Strategic Summary Section */}
      <section id="about">
        <AboutSummary />
      </section>

      {/* 02. Core Business Operations (Processing) */}
      <section id="processing">
        <WhatWeDo />
      </section>

      {/* 03. Market Intelligence & Global Vision */}
      <section className="py-24 bg-quantum-slate text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/topography.svg')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-quantum-red font-bold text-xs uppercase tracking-[0.4em] mb-4 block">03 // Global Vision</span>
              <h2 className="text-5xl font-black uppercase italic mb-8 leading-none">
                Positioning Sierra Leone <br />
                <span className="text-quantum-red underline decoration-1 underline-offset-8">Globally.</span>
              </h2>
              <p className="text-slate-400 font-light text-lg leading-relaxed mb-10">
                While our roots are firmly planted in Sierra Leone, our reach extends far beyond. 
                We are developing partnerships with global buyers across Europe, Asia, and the Middle East.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Globe className="text-quantum-red" size={24} />
                  <h4 className="font-bold uppercase text-xs">Export Logistics</h4>
                  <p className="text-[10px] text-slate-500 uppercase">Seamless market intelligence & global trade routes.</p>
                </div>
                <div className="space-y-2">
                  <TrendingUp className="text-quantum-red" size={24} />
                  <h4 className="font-bold uppercase text-xs">Value Optimization</h4>
                  <p className="text-[10px] text-slate-500 uppercase">Transforming potential into measurable progress.</p>
                </div>
              </div>
            </div>

            {/* Industrial Metrics Display */}
            <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
              <div className="bg-quantum-slate p-8 hover:bg-white/5 transition-colors">
                <span className="text-4xl font-black italic text-quantum-red">END-TO-END</span>
                <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">Mineral Processing Value Chain</p>
              </div>
              <div className="bg-quantum-slate p-8 hover:bg-white/5 transition-colors">
                <span className="text-4xl font-black italic text-white">ISO COMPLIANT</span>
                <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">Strict Health & Safety Protocols</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Engineering & Infrastructure Hub */}
      <section id="engineering" className="py-24 bg-quantum-grey border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-white p-2 border border-slate-200">
            <div className="lg:w-1/3 bg-quantum-slate p-12 text-white">
              <h3 className="text-2xl font-black uppercase italic mb-6">Engineering & Construction</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-8">
                We develop roads, energy systems, and industrial facilities, ensuring that the ecosystems surrounding mining operations are equipped to handle growth.
              </p>
              <button className="flex items-center gap-2 text-quantum-red text-[10px] font-black uppercase tracking-widest">
                Infrastructure Specs <ArrowRight size={14} />
              </button>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 gap-8 p-6">
              {[
                { label: 'Turnkey Construction', value: 'Mining Facilities' },
                { label: 'Energy Systems', value: 'Industrial Power' },
                { label: 'Water Treatment', value: 'Eco-Management' },
                { label: 'Consulting', value: 'Project Mgmt' }
              ].map((spec) => (
                <div key={spec.label} className="border-l-2 border-slate-100 pl-4">
                  <span className="text-[9px] uppercase font-bold text-slate-400 block mb-1">{spec.label}</span>
                  <span className="text-sm font-black uppercase italic text-quantum-slate">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05. Sustainability & Environmental Innovation */}
      <section id="sustainability">
        <Sustainability />
      </section>

      {/* 06. Careers & Talent Launchpad */}
      <section id="careers">
        <Careers />
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}