export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-24">
        <h2 className="text-5xl font-black text-quantum-slate uppercase italic mb-12">Who We Are</h2>
        <p className="text-lg text-slate-600 leading-relaxed font-light max-w-4xl">
          Established to address the critical gap in Sierra Leone’s mining sector, we pioneer a model where 
          wealth creation extends beyond extraction into manufacturing and infrastructure.
        </p>
      </section>

      {/* Mission & Vision Grid */}
      <section className="bg-quantum-slate text-white py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="border-l-4 border-quantum-red pl-8">
            <h4 className="text-quantum-red uppercase font-bold text-sm mb-4">Our Mission</h4>
            <p className="text-slate-400 font-light italic">
              Transforming raw ores into high-value products that stimulate industrial growth 
              and create jobs for our communities.
            </p>
          </div>
          <div className="border-l-4 border-quantum-red pl-8">
            <h4 className="text-quantum-red uppercase font-bold text-sm mb-4">Our Vision</h4>
            <p className="text-slate-400 font-light italic">
              Becoming Africa’s leading mineral processing company, setting the benchmark 
              for efficiency and industrial innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}