export default function Footer() {
  return (
    <footer className="bg-hellcat-black border-t border-white/10 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        <div className="flex flex-col items-center md:items-start tracking-widest uppercase">
          <h2 className="font-serif text-lg text-[#e5e5e5] mb-2 font-medium">
            SRT Hellcat
          </h2>
          <p className="font-sans text-xs text-white/30">
            Absolute performance. No compromise.
          </p>
        </div>
        
        <div className="flex gap-12 font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">
          <a href="#" className="hover:text-[#d4af37] transition-colors duration-500">Legal</a>
          <a href="#" className="hover:text-[#d4af37] transition-colors duration-500">Privacy</a>
          <a href="#" className="hover:text-[#d4af37] transition-colors duration-500">Cookie Policy</a>
        </div>
        
      </div>
    </footer>
  );
}
