'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const packages = [
  {
    id: 1,
    title: 'The Serene Suite',
    description: 'A minimalist sanctuary overlooking the emerald gardens. Perfect for soulful solitude.',
    price: '$450',
    features: ['King Size Bed', 'Garden Terrace', 'Outdoor Stone Bath', 'Daily Wellness Kit'],
    image: '/packages/suite.png',
  },
  {
    id: 2,
    title: 'The Horizon Villa',
    description: 'Infinite ocean views from every corner. Designed for seamless indoor-outdoor living.',
    price: '$750',
    features: ['Private Infinity Pool', 'Ocean Frontage', 'Butler Service', 'Signature Dining'],
    image: '/packages/villa.png',
  },
  {
    id: 3,
    title: 'The Sunset Studio',
    description: 'An elevated architecturaal gem. Witness the sky transform from your private deck.',
    price: '$580',
    features: ['Panoramic Deck', 'Artisan Kitchen', 'Rain Shower', 'Local Experience Guide'],
    image: '/packages/studio.png',
  },
];

const Packages = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="py-16 md:py-20 bg-[#f2f4f6] text-[#191c1e] relative z-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-50">Our Collection</span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tighter leading-none">
              CURATED <span className="italic text-[#775a19]/60">PACKAGES.</span>
            </h2>
          </div>
          <p className="font-sans text-[11px] md:text-xs opacity-60 max-w-xs leading-relaxed text-left md:text-right">
            Hand-selected experiences designed to immerse you in the beauty of the southern coast.
          </p>
        </div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              className="group flex flex-col bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-black/5"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                  <span className="font-sans text-[9px] font-bold tracking-widest">{pkg.price} <span className="opacity-40 font-normal">/ NT</span></span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow space-y-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl md:text-2xl tracking-tight italic group-hover:text-[#775a19] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="font-sans text-[11px] opacity-60 leading-relaxed line-clamp-2">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-2 flex-grow">
                  {pkg.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#775a19]/40" />
                      <span className="font-sans text-[9px] uppercase tracking-widest opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-black/5">
                  <Link
                    href="/reserve"
                    className="group/btn relative inline-flex items-center justify-center bg-[#191c1e] text-white w-28 md:w-32 h-8 rounded-full font-sans text-[9px] font-bold uppercase tracking-widest transition-all duration-500 hover:shadow-[0_10px_20px_rgba(25,28,30,0.2)] overflow-hidden"
                  >
                    <span className="relative z-10">Reserve</span>
                    <div className="absolute inset-0 bg-[#775a19] transition-transform duration-500 ease-out -translate-x-full group-hover/btn:translate-x-0" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#775a19]/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default Packages;
