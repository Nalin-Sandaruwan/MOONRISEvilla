'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax X-axis transforms for headlines
  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Clip-path "filling" animation for main image
  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
  );

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="hidden lg:block relative py-24 md:py-40 lg:py-56 bg-[#f7f9fb] overflow-hidden text-[#191c1e]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Central Image and Headlines Container - Order 1 on Mobile */}
          <div className="col-span-12 lg:col-span-6 lg:order-2 relative flex flex-col items-center">

            {/* "EFFORTLESS LUXURY" Headline - Moves Right to Left */}
            <motion.h2
              style={{ x: xRight }}
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              className="relative mb-8 lg:mb-0 lg:absolute lg:-top-20 lg:-right-32 z-20 font-serif text-5xl md:text-7xl lg:text-8xl text-[#191c1e] tracking-tighter leading-none whitespace-nowrap cursor-default select-none text-center lg:text-left"
            >
              EFFORTLESS <br className="hidden lg:block" /> <span className="text-[#775a19]">LUXURY.</span>
            </motion.h2>

            {/* Main Portrait Image with Clip-Path Reveal */}
            <motion.div
              style={{ clipPath }}
              whileHover={{ scale: 1.02, rotate: -1, transition: { duration: 0.4 } }}
              className="relative w-full aspect-[4/5] max-w-md mx-auto overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] rounded-[2rem] border border-[#775a19]/10 cursor-pointer"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imageVariants}
                className="w-full h-full"
              >
                <Image
                  src="/about/interior.png"
                  alt="Moonrise Villa Interior"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* "MINDFUL & SOULFUL" Headline - Moves Left to Right */}
            <motion.h2
              style={{ x: xLeft }}
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              className="relative mt-8 lg:mt-0 lg:absolute lg:-bottom-20 lg:-left-40 z-20 font-serif text-4xl md:text-6xl lg:text-7xl text-[#191c1e] tracking-tighter leading-none whitespace-nowrap cursor-default select-none text-center lg:text-left"
            >
              MINDFUL & <br className="hidden lg:block" /> <span className="text-[#775a19]/60 italic">SOULFUL</span> SPACES.
            </motion.h2>
          </div>

          {/* Top Left Text Block - Order 2 on Mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.02, x: 10 }}
            viewport={{ once: true }}
            variants={textVariants}
            className="col-span-12 lg:col-span-3 lg:order-1 lg:self-start pt-12 lg:pt-12 space-y-6 cursor-default group"
          >
            <p className="font-sans text-sm md:text-base leading-relaxed tracking-normal font-medium opacity-80 text-[#565e74] transition-colors group-hover:text-[#191c1e] group-hover:opacity-100 text-center lg:text-left">
              At Moonrise Villa, we specialize in elevated boho interiors — where natural textures, earthy palettes, and artisan details come together in perfect harmony. Our approach is deeply collaborative, rooted in understanding your lifestyle, values, and vision. The result? Spaces that feel as good as they look.
            </p>
          </motion.div>

          {/* Right Text Block and Small Image Peek - Order 3 on Mobile */}
          <div className="col-span-12 lg:col-span-3 lg:order-3 h-full flex flex-col justify-center space-y-12 lg:space-y-24 pt-8 lg:pt-32">

            <motion.div
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.02, x: -10 }}
              viewport={{ once: true }}
              variants={textVariants}
              className="space-y-4 cursor-default group"
            >
              <p className="font-sans text-sm md:text-base leading-relaxed tracking-normal font-medium opacity-80 text-[#565e74] transition-colors group-hover:text-[#191c1e] group-hover:opacity-100 text-center lg:text-right">
                Bohemian elegance meets timeless design. We craft warm, textured interiors that tell your story — beautifully.
              </p>
            </motion.div>

            {/* Bottom Right Corner Image Peek */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 3, transition: { duration: 0.4 } }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="hidden lg:block relative w-full aspect-[4/3] -mr-32 overflow-hidden shadow-xl rounded-[2rem] border border-[#775a19]/10 cursor-pointer"
            >
              <Image
                src="/hero image/hero 2/679210522.jpg"
                alt="Detail"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#775a19]/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#565e74]/5 rounded-full blur-[150px] -z-10" />
    </section>
  );
};

export default About;
