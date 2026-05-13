'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import SlideOne from './hero/SlideOne';
import SlideTwo from './hero/SlideTwo';
import HeroContent from './hero/HeroContent';
import SliderIndicators from './hero/SliderIndicators';

const slides = [
  {
    id: 1,
    image: '/hero image/Artboard 4.png',
    layout: 'left' as const,
  },
  {
    id: 2,
    image: '/hero image/Artboard 2.png',
    layout: 'right' as const,
    floaters: [
      { src: '/hero image/hero 2/679210522.jpg', pos: 'top-left-1' },
      { src: '/hero image/hero 2/741340754.jpg', pos: 'top-left-2' },
      { src: '/hero image/hero 2/778175606.jpg', pos: 'bottom-right-1' },
      { src: '/hero image/hero 2/778175698.jpg', pos: 'bottom-right-2' },
    ]
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-black">
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence>
        {currentSlide === 0 && (
          <SlideOne
            key="slide1"
            isActive={true}
            image={slides[0].image}
          />
        )}
        {currentSlide === 1 && (
          <SlideTwo
            key="slide2"
            isActive={true}
            image={slides[1].image}
            floaters={slides[1].floaters!}
          />
        )}
      </AnimatePresence>


      <HeroContent
        key={`content-${currentSlide}`}
        layout={slides[currentSlide].layout}
      />

      <SliderIndicators
        totalSlides={slides.length}
        currentSlide={currentSlide}
        onSelect={setCurrentSlide}
      />
    </section>
  );
};

export default Hero;
