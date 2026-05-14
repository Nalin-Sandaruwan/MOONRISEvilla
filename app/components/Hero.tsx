'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import HeroContent from './hero/HeroContent';

const slides = [
  {
    id: 1,
    image: '/hero image/Artboard 4.png',
    layout: 'left' as const,
  },
  {
    id: 2,
    image: '/hero image/Artboard 2.png',
    layout: 'left' as const,
    floaters: [
      { src: '/hero image/hero 2/679210522.jpg', pos: 'top-left-1' },
      { src: '/hero image/hero 2/741340754.jpg', pos: 'top-left-2' },
      { src: '/hero image/hero 2/778175606.jpg', pos: 'bottom-right-1' },
      { src: '/hero image/hero 2/778175698.jpg', pos: 'bottom-right-2' },
    ]
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 12000);
    return () => clearInterval(timer);
  }, [currentSlide]); // Reset timer on slide change

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#0f1113]">
      {/* Immersive Background Layer with Curtain Transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ clipPath: 'inset(0 0 0 100%)', scale: 1.1 }}
            animate={{ clipPath: 'inset(0 0 0 0%)', scale: 1.05 }}
            exit={{ clipPath: 'inset(0 100% 0 0%)', scale: 1.1 }}
            transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt="Moonrise Villa Grand Entrance"
              fill
              className="object-cover animate-ken-burns opacity-70"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic atmospheric overlays (Stay static for consistency) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1113]/40 via-transparent to-[#0f1113] z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,17,19,0.4)_100%)] z-[1]" />
        {/* Soft Film Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-[1]" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex-grow flex flex-col">
        <HeroContent layout={slides[currentSlide].layout} />
      </div>

      {/* Manual Slider Navigation - Minimalist Boutique Style */}
      <div className="absolute bottom-12 left-1/2 pb-20 md:pb-0 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-16 flex items-center gap-4 z-30">
        <button
          onClick={prevSlide}
          className="group size-12 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-500 hover:bg-white hover:text-black"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:-translate-x-1">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] text-white/40">
          <span className="text-white">0{currentSlide + 1}</span>
          <div className="w-8 h-[1px] bg-white/10" />
          <span>0{slides.length}</span>
        </div>
        <button
          onClick={nextSlide}
          className="group size-12 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-500 hover:bg-white hover:text-black"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Boutique Sidebar - Minimalist Brand Touch */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-12 z-20 pointer-events-none">
        <div className="w-[1px] h-24 bg-white/10" />
        <div className="rotate-90 text-[10px] font-sans uppercase tracking-[0.5em] text-white/40 whitespace-nowrap origin-center">
          Est. 2024 — Southern Coast
        </div>
        <div className="w-[1px] h-24 bg-white/10" />
      </div>

      {/* Bottom Architectural Bar */}
      <div className="absolute bottom-12 left-16 hidden lg:flex items-end z-20 pointer-events-none">
        <div className="flex gap-12">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#775a19] font-bold">Location</span>
            <span className="text-xs text-white/60 font-sans tracking-wide">Tangalle, Sri Lanka</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#775a19] font-bold">Atmosphere</span>
            <span className="text-xs text-white/60 font-sans tracking-wide">Coastal Sanctuary</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
