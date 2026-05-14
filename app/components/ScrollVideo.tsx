'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface ScrollVideoProps {
  src: string;
}

const ScrollVideo = ({ src }: ScrollVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Load metadata to get video duration
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    // If metadata is already loaded, set it immediately
    if (video.readyState >= 1) {
      setDuration(video.duration);
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
  }, []);

  // Update video time based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && duration > 0) {
      // Direct assignment for maximum performance during scroll
      // This ensures the video "plays" only as much as you scroll
      const targetTime = latest * duration;
      videoRef.current.currentTime = targetTime;
    }
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      {/* Sticky video container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover opacity-60"
          muted
          playsInline
          preload="auto"
        />

        {/* Optional Overlay Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 pointer-events-none"
        >
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter text-center max-w-4xl">
            Where the Moon Meets the Clouds
          </h2>
          <p className="mt-6 text-lg md:text-xl font-sans tracking-[0.2em] uppercase text-white/60">
            A Cinematic Sanctuary
          </p>
        </motion.div>

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />
      </div>
    </div>
  );
};

export default ScrollVideo;
