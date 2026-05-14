'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  progress: number;
  isLoading: boolean;
}

const LoadingScreen = ({ progress, isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"
          />

          {/* Branding */}
          <div className="relative mb-12 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="text-white text-3xl md:text-5xl font-serif tracking-[0.3em] font-light leading-none">
                MOONRISE
              </span>
              <span className="mt-4 text-white/30 text-[10px] md:text-xs font-sans tracking-[0.5em] uppercase">
                Sanctuary in the Sky
              </span>
            </motion.div>
          </div>

          {/* Progress Section */}
          <div className="relative w-64 md:w-80 h-[2px] bg-white/5 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-white/40"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 font-mono text-[10px] text-white/20 tracking-[0.2em] uppercase"
          >
            Initializing Experience {Math.round(progress)}%
          </motion.div>

          {/* Ornamental elements */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
            <div className="text-white/10 text-[9px] font-mono tracking-widest uppercase rotate-90 origin-left">
              Loading Cinematic
            </div>
            <div className="text-white/10 text-[9px] font-mono tracking-widest uppercase -rotate-90 origin-right">
              Est. 2024
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
