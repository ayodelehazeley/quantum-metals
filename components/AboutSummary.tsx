export default function AboutSummary() {
  return (
    <section className="py-32 bg-quantum-grey border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-black text-quantum-slate uppercase italic tracking-tighter mb-8">
              Beyond <br /><span className="text-quantum-red">Extraction.</span>
            </h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Unlike traditional mining firms that focus only on extraction, we specialize in 
              transforming raw ore into refined metals and alloys that power global industry.
            </p>
          </div>
          
          <div className="space-y-12">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-quantum-red mb-4 underline decoration-2 underline-offset-8">Our Mission</h4>
              <p className="text-2xl text-quantum-slate font-bold leading-snug">
                "To harness Sierra Leone’s mineral wealth responsibly, stimulating industrial growth and creating jobs."
              </p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-quantum-red mb-4 underline decoration-2 underline-offset-8">Our Vision</h4>
              <p className="text-2xl text-quantum-slate font-bold leading-snug">
                "To become Africa’s leading mineral processing company and a critical hub in the global supply chain."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}