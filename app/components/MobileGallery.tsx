'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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

const MobileGallery = () => {
  return (
    <section className="md:hidden bg-[#eceef0] py-20 overflow-hidden">
      <div className="px-6 mb-12">
        <span className="font-sans text-xs tracking-[0.3em] uppercase opacity-50 text-[#191c1e]">Curated Spaces</span>
        <h2 className="font-serif text-4xl text-[#191c1e] mt-2 italic">Discovery</h2>
      </div>

      {/* Snap Scroll Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 gap-6 pb-8">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="flex-none w-[85vw] snap-center"
          >
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border border-white/20">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* Bottom Label */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-serif text-xl tracking-tight italic">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {galleryItems.slice(0, 4).map((_, i) => (
          <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-[#775a19]' : 'w-2 bg-[#775a19]/20'}`} />
        ))}
      </div>
    </section>
  );
};

export default MobileGallery;
