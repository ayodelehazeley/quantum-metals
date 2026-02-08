import { ShieldCheck, Recycle, Zap } from "lucide-react";

export default function Sustainability() {
  return (
    <section className="py-24 bg-quantum-grey relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-quantum-red font-bold text-xs uppercase tracking-[0.4em] mb-4 block">04 // Sustainability</span>
          <h2 className="text-4xl font-black text-quantum-slate uppercase italic leading-none">
            Responsibility and <br />
            <span className="text-quantum-red">Stewardship.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-sm border-t-2 border-slate-100 hover:border-quantum-red transition-all">
            <Zap className="text-quantum-red mb-6" size={32} />
            <h4 className="font-bold uppercase text-sm mb-4">Renewable Integration</h4>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              Our processing plants integrate renewable energy sources where possible to improve efficiency.
            </p>
          </div>
          
          <div className="p-8 bg-white shadow-sm border-t-2 border-slate-100 hover:border-quantum-red transition-all">
            <Recycle className="text-quantum-red mb-6" size={32} />
            <h4 className="font-bold uppercase text-sm mb-4">Circular Waste</h4>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              Waste management systems are designed to prioritize recycling, reuse, and safe disposal.
            </p>
          </div>

          <div className="p-8 bg-white shadow-sm border-t-2 border-slate-100 hover:border-quantum-red transition-all">
            <ShieldCheck className="text-quantum-red mb-6" size={32} />
            <h4 className="font-bold uppercase text-sm mb-4">ESG Alignment</h4>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              We align with international ESG standards to guarantee sustainable futures for communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}