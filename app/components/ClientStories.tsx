'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Moonrise Villa transformed our space into a serene sanctuary. Their eye for organic textures and boho elegance is truly unmatched.",
    author: "Elena Rossi",
    role: "Interior Enthusiast"
  },
  {
    id: 2,
    quote: "The attention to detail and the way they play with light and shadows brought a soul to our home that we never thought possible.",
    author: "Julian Vance",
    role: "Architect"
  },
  {
    id: 3,
    quote: "Effortless luxury is the perfect description. It's sophisticated yet so incredibly comfortable. A masterpiece of design.",
    author: "Sarah Jenkins",
    role: "Lifestyle Blogger"
  },
  {
    id: 4,
    quote: "From the first moodboard to the final reveal, the journey was as beautiful as the result. Truly a world-class studio.",
    author: "Marcus Thorne",
    role: "Hotelier"
  },
  {
    id: 5,
    quote: "They don't just design rooms; they curate experiences. Every corner of our villa now tells a story of peace and elegance.",
    author: "Aria Montel",
    role: "Creative Director"
  }
];

const ClientStories = () => {
  // Double the items for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative py-32 overflow-hidden ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero image/Artboard 3.png"
          alt="Background Texture"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#ffffff] backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#191c1e] tracking-tighter">
          CLIENT STORIES
        </h2>
      </div>

      {/* Infinite Loop Container */}
      <div className="relative flex z-10">
        <motion.div
          className="flex gap-12 md:gap-20 flex-nowrap"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[85vw] md:w-[40vw] lg:w-[30vw] shrink-0 flex flex-col justify-center space-y-8"
            >
              <div className="font-serif text-6xl text-[#775a19]/20 leading-none h-8">“</div>
              <p className="font-sans text-lg md:text-xl text-[#191c1e] leading-relaxed italic ">
                {item.quote}
              </p>
              <div className="pt-4">
                <p className="font-sans text-sm tracking-[0.2em] uppercase font-bold text-[#191c1e]">
                  — {item.author}
                </p>
                <p className="font-sans text-xs tracking-widest uppercase opacity-40 mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for Smooth Transition */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#eceef0] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#eceef0] to-transparent z-10" />
      </div>

      {/* Subtle Progress Dots (Static Decor) */}
      <div className="flex justify-center gap-2 mt-20 opacity-20">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full bg-[#191c1e] ${i === 1 ? 'scale-150' : ''}`} />
        ))}
      </div>
    </section>
  );
};

export default ClientStories;
