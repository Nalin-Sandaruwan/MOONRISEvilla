'use client';

import { useState, useEffect } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Hero from "./components/Hero";
import About from "./components/About";
import MobileAbout from "./components/MobileAbout";
import Packages from "./components/Packages";
import LuxuryNavbar from "./components/LuxuryNavbar";
import Gallery from "./components/Gallery";
import MobileGallery from "./components/MobileGallery";
import ClientStories from "./components/ClientStories";
import Footer from "./components/Footer";
import ScrollImageSequence from "./components/ScrollImageSequence";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isNavbarWhite, setIsNavbarWhite] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Show navbar only after the image sequence reveal starts
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Reveal navbar as the sequence ends and Hero emerges
    // 0.12 is roughly when the circular mask starts opening
    if (latest > 0.12) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false);
    }

    // Force white text strictly during the Hero reveal zone and intro sequence
    // We increase the threshold to 0.4 to ensure it covers the entire Hero materialization 
    // and stays white until the user definitely enters the next (light-colored) section.
    if (latest > 0.10 && latest < 0.45) {
      setIsNavbarWhite(true);
    } else {
      setIsNavbarWhite(false);
    }
  });

  // Handle loading completion
  useEffect(() => {
    if (loadingProgress >= 100) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [loadingProgress]);

  return (
    <main className="relative flex flex-col">
      <LoadingScreen progress={loadingProgress} isLoading={isLoading} />

      <LuxuryNavbar
        isVisible={isNavbarVisible}
        forceWhite={isNavbarWhite}
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />

      {/* Cinematic Scroll Image Sequence Section (Intro) */}
      <ScrollImageSequence
        startIndex={0}
        endIndex={125}
        basePath="/Video/a_c_d_b_a_d_c_a_video_mp_"
        extension=".jpg"
        onProgress={setLoadingProgress}
      >
        <Hero />
      </ScrollImageSequence>

      <div className="relative z-10 bg-black rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] -mt-32">
        <About />
        <MobileAbout />
      </div>

      <Packages />

      {/* Gallery Section - Horizontal Scroll (Desktop) */}
      <div className="relative z-20">
        <Gallery />
        <MobileGallery />
      </div>

      {/* Client Stories Section - Slides over Gallery */}
      <div className="relative z-30 bg-white rounded-t-[4rem] -mt-20 overflow-hidden">
        <ClientStories />
      </div>

      <Footer />
    </main>
  );
}
