import Link from 'next/link';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

interface HeroContentProps {
  layout: 'left' | 'right';
}

const HeroContent = ({ layout }: HeroContentProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <div className="relative z-10 flex-grow flex flex-col justify-center md:justify-end px-6 md:px-16 lg:px-24 pb-20 md:pb-24 lg:pb-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y }}
        className={`max-w-4xl space-y-8 md:space-y-4 transition-all duration-1000 ease-in-out ${layout === 'right'
            ? 'md:ml-auto md:text-right md:items-end items-center text-center'
            : 'md:mr-auto md:text-left md:items-start items-center text-center'
          } flex flex-col mx-auto md:mx-0`}
      >
        <motion.div variants={itemVariants} className="overflow-hidden">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl uppercase text-white leading-[1.05] tracking-tighter">
            Where The Ocean <br className="hidden md:block" /> Meets <span className="italic opacity-80">Serenity.</span>
          </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="font-sans text-white/80 max-w-xl text-xs md:text-base lg:text-lg leading-relaxed font-normal tracking-wide">
          A Boutique Villa Retreat On Sri Lanka's Untouched Southern Coast. <br className="hidden md:block" />
          Crafted For Those Who Seek Stillness, Beauty, And Warmth.
        </motion.p>

        <motion.div variants={itemVariants} className="pt-4 md:pt-0">
          <Link
            href="/reserve"
            className="group relative inline-flex items-center justify-center bg-white text-[#191c1e] w-36 md:w-32 h-12 md:h-9 rounded-full font-sans text-[10px] md:text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] shadow-xl overflow-hidden"
          >
            <span className="relative z-10">Inquire Now</span>
            <div className="absolute inset-0 bg-[#775a19] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
