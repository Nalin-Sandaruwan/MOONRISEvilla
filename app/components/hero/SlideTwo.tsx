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
      alt="Moonlight Villa Slide 2"
      fill
      className="object-cover scale-110 animate-ken-burns"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

    {/* Floating Gallery */}
    <div className="absolute inset-0 hidden md:block overflow-hidden">
      {/* Top Left Floaties */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15, x: -100 }}
        animate={{ opacity: 1, scale: 1, rotate: -6, x: 0 }}
        whileHover={{ scale: 1.05, rotate: 0, zIndex: 50, transition: { duration: 0.4 } }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute top-[15%] left-[5%] w-64 lg:w-80 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 z-10 cursor-pointer"
      >
        <Image src={floaters[0].src} alt="Detail 1" fill className="object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 10, x: -100 }}
        animate={{ opacity: 1, scale: 1, rotate: 3, x: 0 }}
        whileHover={{ scale: 1.05, rotate: 0, zIndex: 50, transition: { duration: 0.4 } }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className="absolute top-[40%] left-[15%] w-64 lg:w-80 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 z-20 cursor-pointer"
      >
        <Image src={floaters[1].src} alt="Detail 2" fill className="object-cover" />
      </motion.div>

      {/* Bottom Right Floaties (If you decide to re-enable them later) */}
    </div>
  </motion.div>
);

export default SlideTwo;
