'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const CurtainTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 2400);
    return () => clearTimeout(timer);
  }, [pathname]);

  const panelColors = [
    "#191c1e",
    "#191c1e",
    "#191c1e",
    "#191c1e",
    "#191c1e",
    "#191c1e",
    "#191c1e",
    "#191c1e",
    "#191c1e",
    "#191c1e",
    "#191c1e",
    "#191c1e",
    "#191c1e"
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <div className="fixed inset-0 z-[9999] pointer-events-none">
            {/* White Base Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.4, times: [0, 0.15, 0.85, 1] }}
              className="absolute inset-0 bg-white"
            />

            <div className="absolute inset-0 flex">
              {panelColors.map((color, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: [0, 1, 1, 0] }}
                  transition={{
                    duration: 2,
                    times: [0, 0.45, 0.55, 1],
                    ease: [0.87, 0, 0.13, 1],
                    delay: i * 0.05,
                  }}
                  style={{
                    originY: i % 2 === 0 ? 0 : 1,
                    backgroundColor: color
                  }}
                  className="flex-1 h-full"
                />
              ))}
            </div>

            {/* Logo Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.1] }}
              transition={{
                duration: 2.2,
                times: [0, 0.4, 0.6, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-white drop-shadow-2xl">
                  MOONRISE
                </span>
                <div className="h-px w-16 bg-[#775a19] my-6" />
                <span className="text-xl md:text-2xl font-serif italic text-[#775a19] drop-shadow-lg">
                  Villa
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default CurtainTransition;
