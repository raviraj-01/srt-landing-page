import Image from "next/image";

export default function Features() {
  return (
    <section className="bg-hellcat-black text-white pt-32 pb-64 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Narrative Intro */}
        <div className="mb-32">
          <h2 className="font-serif text-4xl md:text-6xl tracking-wide text-[#e5e5e5] uppercase mb-12">
            Absolute Supremacy
          </h2>
          <div className="w-[1px] h-24 bg-white/20 mx-auto mb-12" />
          <p className="font-sans text-sm md:text-base font-light tracking-[0.2em] uppercase text-white/50 leading-loose max-w-2xl mx-auto">
            The SRT Hellcat is not merely a vehicle. It is a defining statement. 
            Engineered with a widebody stance that commands the pavement and an 
            aerodynamic profile sculpted to dominate the elements.
          </p>
        </div>

        {/* Strong Visual Element */}
        <div className="w-full aspect-[21/9] relative flex items-center justify-center overflow-hidden mb-32 border border-white/10">
           <Image 
             src="/images/hellcat-sequence/ezgif-frame-240.jpg" 
             alt="Dodge Hellcat Profile" 
             fill
             className="object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-hellcat-black mix-blend-color saturate-0" /> {/* Give it an atelier B&W/Monochrome feel */}
        </div>
        
        {/* Detail List */}
        <div className="w-full border-t border-white/10 pt-16">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans text-sm tracking-[0.2em] uppercase text-white/50">
            <li className="flex flex-col items-center">
              <span className="font-serif text-2xl text-[#d4af37] mb-4">01</span>
              SRT Performance Pages
            </li>
            <li className="flex flex-col items-center">
              <span className="font-serif text-2xl text-[#d4af37] mb-4">02</span>
              Launch Control & Line Lock
            </li>
            <li className="flex flex-col items-center">
              <span className="font-serif text-2xl text-[#d4af37] mb-4">03</span>
              Adaptive Damping Suspension
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
