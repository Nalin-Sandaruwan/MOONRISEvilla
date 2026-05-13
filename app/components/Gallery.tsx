'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const galleryItems = [
  { id: 1, src: '/villa_gallery_1.png', title: 'The Bathing Ritual' },
  { id: 2, src: '/villa_gallery_2.png', title: 'Organic Living' },
  { id: 3, src: '/villa_gallery_3.png', title: 'Serene Slumber' },
  { id: 4, src: '/hero image/hero 2/679210522.jpg', title: 'Morning Glow' },
  { id: 5, src: '/about/interior.png', title: 'The Studio' },
  { id: 6, src: '/hero image/hero 2/741340754.jpg', title: 'Sunset Niche' },
  { id: 7, src: '/hero image/hero 2/778175606.jpg', title: 'Midnight Dip' },
  { id: 8, src: '/hero image/hero 2/778175698.jpg', title: 'Starlit Veranda' },
];

const Gallery = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section ref={targetRef} className="hidden md:block relative h-[500vh] bg-[#eceef0]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 md:gap-12 px-6 md:px-24">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} scrollYProgress={scrollYProgress} />
          ))}
        </motion.div>
      </div>

      {/* Background Text Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 select-none">
        <h2 className="text-[40vw] md:text-[25vw] font-serif leading-none whitespace-nowrap">CURATED SPACES</h2>
      </div>
    </section>
  );
};

const GalleryCard = ({ item, index, scrollYProgress }: { item: any, index: number, scrollYProgress: any }) => {
  // Individual card animations based on progress
  const start = index * 0.1;
  const end = start + 0.2;

  const rotate = useTransform(scrollYProgress, [start, end], [index % 2 === 0 ? 5 : -5, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);

  return (
    <motion.div
      style={{
        rotateZ: rotate,
        scale,
      }}
      className="relative group shrink-0"
    >
      <div className="relative w-[80vw] md:w-[25vw] aspect-[3/4] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl border-4 border-white/10 group-hover:border-white/40 transition-colors duration-500">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <p className="text-white font-serif text-2xl lg:text-3xl tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {item.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
