import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-quantum-slate text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand & Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/quantum-logo.png" 
                alt="Quantum Metals Logo" 
                width={40} 
                height={40}
                className="brightness-0 invert" // Ensures it appears white if the file has dark colors
              />
              <h3 className="text-2xl font-black italic uppercase tracking-tighter">
                Quantum <span className="text-quantum-red">Metals.</span>
              </h3>
            </div>
            <p className="text-slate-500 text-xs font-light max-w-xs leading-relaxed">
              Positioning Sierra Leone as a critical hub in the global metals supply chain 
              through local value-addition and industrial excellence.
            </p>
          </div>

          {/* Global Vision Section */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">Global Vision</h4>
            <p className="text-slate-500 text-xs font-light leading-relaxed">
              Developing partnerships with global buyers and exploring export opportunities 
              across Europe, Asia, and the Middle East to elevate Sierra Leone's economic standing.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">Inquiries</h4>
            <div className="text-slate-500 text-xs font-light space-y-2">
              <p>Email: info@quantummetals.sl</p>
              <p>Phone: +232 (0)76 XXX XXX</p>
              <p className="pt-2 italic">Freetown, Sierra Leone</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 text-[9px] font-mono text-slate-600 flex flex-col md:flex-row justify-between gap-4">
          {/* Fixed the 'uppercase' attribute error here */}
          <p className="uppercase tracking-widest">
            © 2026 QUANTUM METALS LIMITED // VALUE-ADDED LOGISTICS // NONIE & COMPANY GROUP
          </p>
          
          <div className="flex gap-6">
            <Link href="#" className="hover:text-quantum-red transition-colors uppercase">Safety Policy</Link>
            <Link href="#" className="hover:text-quantum-red transition-colors uppercase">Compliance</Link>
            <Link href="#" className="hover:text-quantum-red transition-colors uppercase">ESG Report</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}