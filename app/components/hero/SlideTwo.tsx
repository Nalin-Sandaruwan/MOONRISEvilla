import Image from 'next/image';
import { motion } from 'framer-motion';

interface SlideTwoProps {
  isActive: boolean;
  image: string;
  floaters: { src: string; pos: string }[];
}

const SlideTwo = ({ isActive, image, floaters }: SlideTwoProps) => (
  <motion.div
    initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
    animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
    exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
    transition={{ duration: 2, ease: "easeInOut" }}
    className="absolute inset-0 z-0 overflow-hidden"
  >
    <Image
      src={image}
      alt="Moonrise Villa Slide 2"
      fill
      className="object-cover scale-110 animate-ken-burns"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

    {/* Floating Gallery - Elevated z-index to allow hover interactions above HeroContent */}
    <div className="absolute inset-0 hidden md:block overflow-hidden z-20">
      {/* Top Left Floaties */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15, x: -100 }}
        animate={{ opacity: 1, scale: 1, rotate: -6, x: 0 }}
        whileHover={{
          scale: 1.15,
          width: "24rem", // Expanding width for 'wow' factor
          rotate: 0,
          y: -30,
          rotateY: 10,
          zIndex: 100,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute top-[15%] left-[5%] w-64 lg:w-80 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-white/20 z-10 cursor-pointer group perspective-1000"
      >
        <Image
          src={floaters[0].src}
          alt="Architectural Detail 1"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        {/* Subtle Shimmer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 10, x: -100 }}
        animate={{ opacity: 1, scale: 1, rotate: 3, x: 0 }}
        whileHover={{
          scale: 1.15,
          width: "24rem", // Expanding width for 'wow' factor
          rotate: 0,
          y: -30,
          rotateY: -10,
          zIndex: 100,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className="absolute top-[40%] left-[15%] w-64 lg:w-80 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-white/20 z-20 cursor-pointer group perspective-1000"
      >
        <Image
          src={floaters[1].src}
          alt="Architectural Detail 2"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        {/* Subtle Shimmer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out" />
      </motion.div>

      {/* Bottom Right Floaties (If you decide to re-enable them later) */}
    </div>
  </motion.div>
);

export default SlideTwo;
