import { Layers, Factory, Zap } from "lucide-react";

const services = [
  {
    title: "Ore Processing",
    desc: "From crushing and grinding to flotation and magnetic separation, maximizing valuable mineral liberation.",
    icon: Layers
  },
  {
    title: "Metal Products",
    desc: "Producing high-grade concentrates and custom alloys for automotive, energy, and construction.",
    icon: Zap
  },
  {
    title: "Engineering",
    desc: "Designing infrastructure projects, roads, and energy systems to support sustainable industrial growth.",
    icon: Factory
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-16 hover:bg-quantum-slate hover:text-white transition-all duration-500 group">
              <s.icon className="text-quantum-red mb-10 group-hover:scale-125 transition-transform" size={56} />
              <h3 className="text-3xl font-black uppercase italic mb-6 tracking-tighter">{s.title}</h3>
              <p className="text-lg text-slate-500 font-light group-hover:text-slate-300 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}