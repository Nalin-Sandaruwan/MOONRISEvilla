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
    <div className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-16 lg:px-24 pb-20 md:pb-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y }}
        className={`max-w-5xl space-y-12 md:space-y-10 flex flex-col ${layout === 'right' ? 'md:ml-auto md:text-right md:items-end' : 'md:mr-auto md:text-left md:items-start'} items-center text-center md:items-start md:text-left`}
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-[#775a19] font-medium block">
            A Sanctuary Awaits
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-white leading-[0.9] tracking-[-0.04em]">
            Pure <br /> 
            <span className="italic font-light opacity-90 pl-4 md:pl-12">Stillness.</span>
          </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="font-sans text-white/50 max-w-lg text-sm md:text-base lg:text-lg leading-[1.8] font-light tracking-[0.05em]">
          Moonrise Villa is a boutique coastal retreat <br className="hidden md:block" /> 
          designed for the art of slow living. Discover <br className="hidden md:block" /> 
          architectural beauty on the edge of the Indian Ocean.
        </motion.p>

        <motion.div variants={itemVariants} className="pt-6">
          <Link
            href="/reserve"
            className="group relative inline-flex items-center gap-6 text-white text-[10px] uppercase tracking-[0.5em] font-medium"
          >
            <span className="relative">
              Begin Your Journey
              <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#775a19] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out" />
            </span>
            <div className="size-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
