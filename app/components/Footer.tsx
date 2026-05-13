'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: 'The Studio', href: '#about' },
      { name: 'Curated Spaces', href: '#gallery' },
      { name: 'Experiences', href: '#' },
      { name: 'Architecture', href: '#' },
    ],
    experience: [
      { name: 'The Collection', href: '#' },
      { name: 'Booking', href: '#' },
      { name: 'Concierge', href: '#' },
      { name: 'Gifting', href: '#' },
    ],
    support: [
      { name: 'Contact', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="relative bg-[#191c1e] text-[#eff1f3] pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Top Section: Branding and Newsletter */}
        <div className="grid grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="font-serif text-4xl md:text-5xl tracking-tighter italic">Moonrise Villa</h2>
              <p className="font-sans text-sm md:text-base opacity-60 max-w-md leading-relaxed">
                Elevated boho interiors designed for those who seek refined seclusion and organic elegance. Join our inner circle for architectural updates and seasonal launches.
              </p>
            </motion.div>

            {/* Newsletter Input */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex max-w-md group"
            >
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-b border-[#eff1f3]/20 py-4 w-full font-sans text-xs tracking-widest focus:outline-none focus:border-[#775a19] transition-colors"
              />
              <button
                type="submit"
                className="border-b border-[#eff1f3]/20 py-4 px-6 font-sans text-xs tracking-widest hover:text-[#775a19] hover:border-[#775a19] transition-all"
              >
                JOIN
              </button>
            </motion.form>
          </div>

          {/* Links Grid */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">
            <div className="space-y-6">
              <h3 className="font-sans text-xs tracking-[0.3em] uppercase opacity-40">Explore</h3>
              <ul className="space-y-4">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="font-sans text-sm opacity-70 hover:opacity-100 hover:text-[#775a19] transition-all">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="font-sans text-xs tracking-[0.3em] uppercase opacity-40">Experience</h3>
              <ul className="space-y-4">
                {footerLinks.experience.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="font-sans text-sm opacity-70 hover:opacity-100 hover:text-[#775a19] transition-all">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-6">
              <h3 className="font-sans text-xs tracking-[0.3em] uppercase opacity-40">Studio</h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="font-sans text-sm opacity-70 hover:opacity-100 hover:text-[#775a19] transition-all">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section: Location and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-t border-[#eff1f3]/10 gap-8">
          <div className="space-y-2">
            <span className="font-sans text-xs tracking-widest opacity-40 uppercase">Global Headquarters</span>
            <p className="font-serif text-lg italic">The Artisan Quarter, Bali & London</p>
          </div>
          
          <div className="flex gap-12">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-xs tracking-[0.2em] uppercase opacity-60 hover:opacity-100 hover:text-[#775a19] transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#775a19] group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[#eff1f3]/10 gap-4 opacity-40">
          <p className="font-sans text-[10px] tracking-widest uppercase">
            © {currentYear} Moonrise Villa Studio. All rights reserved.
          </p>
          <p className="font-sans text-[10px] tracking-widest uppercase">
            Designed for Serene Living
          </p>
        </div>
      </div>

      {/* Large Background Decorative Text */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[25vw] font-serif leading-none whitespace-nowrap">MOONRISE</h2>
      </div>
    </footer>
  );
};

export default Footer;
