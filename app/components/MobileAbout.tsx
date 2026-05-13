'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const MobileAbout = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  return (
    <section className="lg:hidden relative py-20 bg-[#f7f9fb] text-[#191c1e] overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Headlines */}
        <div className="space-y-4 mb-12">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="font-serif text-5xl text-[#191c1e] tracking-tighter leading-none"
          >
            EFFORTLESS <br /> <span className="text-[#775a19]">LUXURY.</span>
          </motion.h2>
        </div>

        {/* Main Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative w-full aspect-[4/5] max-w-sm overflow-hidden shadow-2xl rounded-[2rem] border border-[#775a19]/10 mb-16"
        >
          <Image
            src="/about/interior.png"
            alt="Villa Interior"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Second Headline */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="font-serif text-4xl text-[#191c1e] tracking-tighter leading-none mb-12"
        >
          MINDFUL & <br /> <span className="text-[#775a19]/60 italic">SOULFUL</span> SPACES.
        </motion.h2>

        {/* Paragraphs */}
        <div className="space-y-10 max-w-md">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="font-sans text-base leading-relaxed text-[#565e74] opacity-90"
          >
            At Moonrise Villa, we specialize in elevated boho interiors — where natural textures, earthy palettes, and artisan details come together in perfect harmony.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="font-sans text-base leading-relaxed text-[#565e74] opacity-90"
          >
            Bohemian elegance meets timeless design. We craft warm, textured interiors that tell your story — beautifully.
          </motion.p>
        </div>

      </div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#775a19]/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default MobileAbout;
