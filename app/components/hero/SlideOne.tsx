import Image from 'next/image';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
  image: string;
}

const SlideOne = ({ isActive, image }: SlideProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="absolute inset-0 z-0 overflow-hidden"
    >
      <Image
        src={image}
        alt="Moonlight Villa Slide 1"
        fill
        className="object-cover scale-110 animate-ken-burns"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
    </motion.div>
  );
};

export default SlideOne;
