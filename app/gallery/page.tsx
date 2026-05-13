'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LuxuryNavbar from '../components/LuxuryNavbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/hero%20image/Artboard%202.png', category: 'Architecture', title: 'The Main Sanctuary' },
  { id: 2, src: '/villa_gallery_1.png', category: 'Sanctuary', title: 'Private Horizon Pool' },
  { id: 3, src: '/packages/suite.png', category: 'Interior', title: 'Luminous Living Space' },
  { id: 4, src: '/packages/studio.png', category: 'Exterior', title: 'Sunset Deck' },
  { id: 5, src: '/hero%20image/Artboard%203.png', category: 'Nature', title: 'Tropical Gardens' },
  { id: 6, src: '/villa_gallery_2.png', category: 'Lifestyle', title: 'Morning Rituals' },
];

const galleryImages2 = [
  { id: 7, src: '/hero%20image/Artboard%202.png', category: 'Architecture', title: 'The Main Sanctuary' },
  { id: 8, src: '/villa_gallery_1.png', category: 'Sanctuary', title: 'Private Horizon Pool' },
  { id: 9, src: '/packages/suite.png', category: 'Interior', title: 'Luminous Living Space' },
  { id: 10, src: '/packages/studio.png', category: 'Exterior', title: 'Sunset Deck' },
  { id: 11, src: '/hero%20image/Artboard%203.png', category: 'Nature', title: 'Tropical Gardens' },
  { id: 12, src: '/villa_gallery_2.png', category: 'Lifestyle', title: 'Morning Rituals' },
];

const GalleryPage = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col">
      <LuxuryNavbar isLightPage={true} />

      <section className="relative flex-grow pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden container mx-auto">
        <div className="container mx-auto max-w-7xl">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1.5 bg-white border border-black/5 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#191c1e]/40 shadow-sm"
              >
                Our Stories
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-6xl md:text-8xl tracking-tighter leading-[0.9] font-medium"
              >
                Photo Gallery
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-xs font-sans text-sm text-[#191c1e]/50 leading-relaxed"
            >
              Captured moments from our sanctuary and the scenic landscapes of the Southern coast.
            </motion.p>
          </div>

          {/* Dynamic Expanding Grid */}
          <div className="flex flex-col md:flex-row gap-4 h-[500px] md:h-[600px] ">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  flex: hoveredId === null ? 1 : (hoveredId === image.id ? 2.5 : 0.7),
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full overflow-hidden rounded-[2rem] md:rounded-[3rem] cursor-pointer group"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60 block mb-2">{image.category}</span>
                  <h3 className="font-serif text-2xl italic">{image.title}</h3>
                </div>

                {/* Number Indicator (Visible when collapsed) */}
                <div className={`absolute top-8 left-8 w-10 h-10 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center text-[10px] text-white font-bold transition-opacity duration-500 ${hoveredId === image.id ? 'opacity-0' : 'opacity-100'}`}>
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary Grid (Masonry Style) */}
          <div className="flex flex-col md:flex-row gap-4 h-[500px] md:h-[600px] mt-10">
            {galleryImages2.map((image, index) => (
              <motion.div
                key={image.id}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  flex: hoveredId === null ? 1 : (hoveredId === image.id ? 2.5 : 0.7),
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full overflow-hidden rounded-[2rem] md:rounded-[3rem] cursor-pointer group"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60 block mb-2">{image.category}</span>
                  <h3 className="font-serif text-2xl italic">{image.title}</h3>
                </div>

                {/* Number Indicator (Visible when collapsed) */}
                <div className={`absolute top-8 left-8 w-10 h-10 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center text-[10px] text-white font-bold transition-opacity duration-500 ${hoveredId === image.id ? 'opacity-0' : 'opacity-100'}`}>
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GalleryPage;
