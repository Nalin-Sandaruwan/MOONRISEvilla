'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';

interface ScrollImageSequenceProps {
  startIndex: number;
  endIndex: number;
  basePath: string;
  extension: string;
  children?: React.ReactNode;
  onProgress?: (progress: number) => void;
}

const ScrollImageSequence = ({
  startIndex = 0,
  endIndex = 125,
  basePath = "/Video/a_c_d_b_a_d_c_a_video_mp_",
  extension = ".jpg",
  children,
  onProgress
}: ScrollImageSequenceProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalFrames = endIndex - startIndex + 1;

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create a smoothed version of the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001
  });

  // Map scroll progress to frame index (Sequential: plays fully first)
  const frameIndex = useTransform(smoothProgress, [0, 0.75], [0, totalFrames - 1]);

  // Masking progress starts ONLY after video ends (0.75)
  const maskProgress = useTransform(smoothProgress, [0.75, 0.95], [0, 150]);
  const heroMaskImage = useTransform(maskProgress, [0, 150], [
    'radial-gradient(circle at 50% 50%, black 0%, transparent 0%)',
    'radial-gradient(circle at 50% 50%, black 100%, transparent 130%)'
  ]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = () => {
      for (let i = startIndex; i <= endIndex; i++) {
        const img = new Image();
        // Handle zero padding (e.g., 001 instead of 1)
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `${basePath}${frameNumber}${extension}`;
        img.onload = () => {
          loadedCount++;
          const progress = (loadedCount / totalFrames) * 100;
          if (loadedCount % 5 === 0 || loadedCount === totalFrames) {
            setImagesLoaded(loadedCount);
            if (onProgress) onProgress(progress);
          }
        };
        imagesRef.current[i - startIndex] = img;
      }
    };

    preloadImages();
  }, [startIndex, endIndex, basePath, extension, totalFrames, onProgress]);

  // Handle canvas drawing
  const renderCanvas = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imagesRef.current[index];

    if (canvas && ctx && img && img.complete) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.width;
      const imgHeight = img.height;

      const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const x = (canvasWidth / 2) - (imgWidth / 2) * scale;
      const y = (canvasHeight / 2) - (imgHeight / 2) * scale;

      ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
    }
  };

  // Update canvas on frame change
  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderCanvas(Math.round(latest));
  });

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const currentIndex = Math.round(frameIndex.get());
        renderCanvas(currentIndex);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [frameIndex]);

  // Initial render
  useEffect(() => {
    if (imagesLoaded > 0) {
      renderCanvas(0);
    }
  }, [imagesLoaded]);

  return (
    <div ref={containerRef} className="relative h-[600vh] w-full">
      {/* Background: Image Sequence (Plays first) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black z-0">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-70"
        />

        {/* Loading progress */}
        {imagesLoaded < totalFrames && (
          <div className="absolute bottom-10 right-10 text-white/20 text-xs font-mono uppercase tracking-widest">
            Loading Cinematic Experience... {Math.round((imagesLoaded / totalFrames) * 100)}%
          </div>
        )}

        {/* Overlay Content (Intro text) */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.6, 0.75], [1, 0]) }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 pointer-events-none z-20"
        >
          <h2 className="text-5xl md:text-8xl font-serif tracking-tighter text-center max-w-5xl leading-[0.9]">
            Where the Moon <br /> Meets the Clouds
          </h2>
          <p className="mt-8 text-sm md:text-base font-sans tracking-[0.4em] uppercase text-white/40">
            A Cinematic Sanctuary in the Sky
          </p>

          {/* Scroll Down Indicator */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
            className="absolute bottom-12 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-white/20 font-bold">Scroll</span>
            <div className="w-[1px] h-16 bg-white/5 relative overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-white/40"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Ambient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Foreground: Hero Section (Reveals itself through mask) */}
      <motion.div
        style={{
          WebkitMaskImage: heroMaskImage,
          maskImage: heroMaskImage,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: 'cover',
          maskSize: 'cover'
        }}
        className="sticky top-0 h-screen w-full overflow-hidden z-10"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollImageSequence;
