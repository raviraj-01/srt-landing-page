import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  scrollYProgress?: MotionValue<number>;
}

export default function Navbar({ scrollYProgress }: NavbarProps) {
  // If scrollYProgress is provided, fade out navbar after 60% scroll (Engine phase starts ~66%)
  // If not provided (like on other pages if they existed), remain fully visible.
  const baseOpacity = scrollYProgress ? useTransform(scrollYProgress, [0.6, 0.66], [1, 0]) : 1;
  return (
    <motion.nav 
      style={{ opacity: baseOpacity }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent mix-blend-difference"
    >
      <Link href="/" className="flex items-center gap-6 cursor-pointer">
        <div className="relative w-8 h-8 opacity-80">
          <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
        </div>
        <h2 className="font-serif text-lg tracking-widest text-[#e5e5e5] uppercase font-medium">
          SRT Hellcat
        </h2>
      </Link>
      <div>
        <Link href="/engine">
          <button className="font-sans text-xs font-medium tracking-[0.2em] uppercase px-8 py-3 border border-white/20 text-[#e5e5e5] hover:border-[#d4af37] hover:text-[#d4af37] transition-colors duration-500 rounded-none bg-transparent cursor-pointer">
            About SRT
          </button>
        </Link>
      </div>
    </motion.nav>
  );
}
