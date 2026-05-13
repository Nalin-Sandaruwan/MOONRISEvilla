'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface VillaPreviewProps {
  selectedVilla: string;
}

const VillaPreview = ({ selectedVilla }: VillaPreviewProps) => {
  const villaImage = selectedVilla === 'Horizon Villa' ? '/packages/villa.png' : '/packages/suite.png';

  return (
    <div className="grid grid-cols-1 gap-6 pt-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="p-8 bg-white border border-black/5 rounded-3xl shadow-sm space-y-3 group hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
      >
        <span className="font-sans text-[10px] uppercase tracking-widest text-[#775a19] font-bold">Selected Villa</span>
        <p className="font-serif text-2xl italic opacity-80">{selectedVilla}</p>
        <div className="relative h-[240px] w-full mt-4 overflow-hidden rounded-2xl">
          <Image 
            src={villaImage} 
            alt={selectedVilla} 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default VillaPreview;
