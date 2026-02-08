import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center pt-24 overflow-hidden">
      {/* Background Topographic Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-quantum-grey opacity-40 pointer-events-none border-l border-slate-200">
        <div className="absolute inset-0 bg-[url('/topography.svg')] bg-cover opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[2px] bg-quantum-red"></div>
            <span className="text-quantum-red font-black text-sm uppercase tracking-[0.5em]">
              Industrial Excellence
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-quantum-slate uppercase italic leading-[0.85] mb-10 tracking-tighter">
            TRANSFORMING <br />
            <span className="text-quantum-red">RAW ORE</span> <br />
            <span className="text-slate-300">INTO VALUE.</span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-600 font-light max-w-3xl mb-12 leading-tight border-l-4 border-slate-100 pl-8">
            Quantum Metals Limited is a Sierra Leonean firm dedicated to unlocking 
            mineral wealth through local processing and engineering.
          </p>

          <div className="flex flex-wrap gap-8">
            <button className="bg-quantum-slate text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-quantum-red transition-all flex items-center gap-4 group">
              Explore Our Work <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="bg-white text-quantum-slate border-2 border-quantum-slate px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}