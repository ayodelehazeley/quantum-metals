import { Users, HardHat, Atom, Briefcase, ArrowRight } from "lucide-react";

export default function Careers() {
  const opportunities = [
    { title: "Metallurgical Engineer", type: "Technical", icon: Atom },
    { title: "Infrastructure Designer", type: "Engineering", icon: HardHat },
    { title: "Project Manager", type: "Operations", icon: Briefcase },
    { title: "ESG & Policy Lead", type: "Corporate", icon: Users },
  ];

  return (
    <section id="careers" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-quantum-red font-bold text-xs uppercase tracking-[0.4em] mb-4 block">05 // Careers</span>
          <h2 className="text-5xl font-black text-quantum-slate uppercase italic leading-none">
            A Launchpad for <br />
            <span className="text-quantum-red">Industrial Leaders.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {opportunities.map((job) => (
            <div key={job.title} className="bg-white p-8 group hover:bg-quantum-slate transition-all duration-500">
              <job.icon className="text-quantum-red mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-lg font-black uppercase italic text-quantum-slate group-hover:text-white mb-2 leading-tight">
                {job.title}
              </h4>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                {job.type} // Open Access
              </span>
              <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-white/10">
                <button className="text-[10px] font-black uppercase tracking-[0.2em] text-quantum-red group-hover:text-white flex items-center gap-2">
                  Apply Now <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}