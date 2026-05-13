'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const ReserveHero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-[#191c1e]/40 hover:text-[#775a19] transition-colors group"
      >
        <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
        Back to Sanctuary
      </Link>
      <h1 className="font-serif text-6xl md:text-8xl tracking-tighter leading-[0.85] text-[#191c1e]">
        THE <br />
        <span className="italic text-[#775a19] opacity-80">ARRIVAL.</span>
      </h1>
      <p className="font-sans text-sm text-[#191c1e]/60 max-w-sm leading-relaxed tracking-wide">
        Your reservation is the first step into a world of curated seclusion. Every detail of your stay at Moonrise Villa is orchestrated for absolute tranquility.
      </p>
    </motion.div>
  );
};

export default ReserveHero;
