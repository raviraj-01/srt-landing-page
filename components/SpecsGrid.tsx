export default function SpecsGrid() {
  return (
    <section className="bg-hellcat-black py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-white/20 pb-8">
          <h2 className="font-serif font-medium text-3xl md:text-5xl uppercase tracking-wide text-[#e5e5e5]">
            Technical Breakdown
          </h2>
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mt-4 md:mt-0">
            Dodge Challenger SRT Hellcat Ref.001
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/20">
          
          <div className="border-r border-b border-white/20 p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-500 min-h-[220px]">
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-white/50 mb-8">Displacement</h3>
            <div>
              <p className="font-mono text-4xl text-[#e5e5e5] mb-2 tracking-wide">6.2L</p>
              <p className="font-serif text-sm tracking-widest text-[#d4af37] uppercase">Supercharged V8</p>
            </div>
          </div>

          <div className="border-r border-b border-white/20 p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-500 min-h-[220px]">
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-white/50 mb-8">Peak Power</h3>
            <div>
              <p className="font-mono text-4xl text-[#e5e5e5] mb-2 tracking-wide">717 <span className="font-sans text-lg text-white/50 tracking-[0.2em]">HP</span></p>
              <p className="font-serif text-sm tracking-widest text-[#d4af37] uppercase">@ 6,000 RPM</p>
            </div>
          </div>

          <div className="border-r border-b border-white/20 p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-500 min-h-[220px]">
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-white/50 mb-8">Max Torque</h3>
            <div>
              <p className="font-mono text-4xl text-[#e5e5e5] mb-2 tracking-wide">656 <span className="font-sans text-lg text-white/50 tracking-[0.2em]">LB-FT</span></p>
              <p className="font-serif text-sm tracking-widest text-[#d4af37] uppercase">@ 4,800 RPM</p>
            </div>
          </div>

          <div className="border-r border-b border-white/20 p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-500 min-h-[220px]">
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-white/50 mb-8">Acceleration</h3>
            <div>
              <p className="font-mono text-4xl text-[#e5e5e5] mb-2 tracking-wide">3.6 <span className="font-sans text-lg text-white/50 tracking-[0.2em]">SEC</span></p>
              <p className="font-serif text-sm tracking-widest text-[#d4af37] uppercase">0-60 MPH</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
