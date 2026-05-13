'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const LuxuryNavbar = ({ isLightPage = false }: { isLightPage?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Privacy', href: '/privecy' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const isDarkText = scrolled || isLightPage;

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isDarkText
              ? 'py-4 '
              : 'py-8 bg-transparent'
              }`}
          >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
              {/* Branding */}
              <Link href="/" className="flex flex-col items-start group relative z-50">
                <span className={`text-xl md:text-2xl font-sans font-bold tracking-tighter leading-none transition-colors duration-500 ${isDarkText || isMobileMenuOpen ? 'text-[#191c1e]' : 'text-white'}`}>
                  MOON<span className={`${isDarkText || isMobileMenuOpen ? 'text-[#191c1e]/60' : 'text-white/70'}`}>RISE</span>
                </span>
                <span className={`text-sm md:text-base font-serif italic -mt-0.5 ml-6 transition-colors duration-500 ${isDarkText || isMobileMenuOpen ? 'text-[#775a19]' : 'text-white/60 group-hover:text-white'}`}>
                  Villa
                </span>
              </Link>

              {/* Centered Navigation Pill (Desktop) */}
              <nav className={`hidden lg:flex items-center backdrop-blur-xl border rounded-full px-8 py-3.5 space-x-10 transition-all duration-500 ${isDarkText
                ? 'bg-black/5 border-black/10'
                : 'bg-white/5 border-white/10'
                }`}>
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-[13px] font-sans font-semibold uppercase tracking-[0.2em] transition-colors group ${isDarkText ? 'text-[#191c1e]/70 hover:text-[#191c1e]' : 'text-white/70 hover:text-white'}`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full ${isDarkText ? 'bg-[#191c1e]' : 'bg-white'}`} />
                  </Link>
                ))}
              </nav>

              {/* CTA & Mobile Trigger */}
              <div className="flex items-center space-x-4 md:space-x-6 relative z-50">
                <Link
                  href="/reserve"
                  className={`hidden sm:flex group relative overflow-hidden items-center justify-center w-24 md:w-28 h-8 md:h-9 rounded-full font-sans text-[9px] font-bold uppercase tracking-widest transition-all duration-500 shadow-lg ${isDarkText || isMobileMenuOpen
                    ? 'bg-[#191c1e] text-white'
                    : 'bg-white text-[#191c1e]'
                    }`}
                >
                  <span className="relative z-10">Reserve</span>
                  <div className="absolute inset-0 bg-[#775a19] transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0" />
                </Link>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2 rounded-full transition-colors duration-500 ${isDarkText || isMobileMenuOpen ? 'text-[#191c1e] bg-black/5' : 'text-white bg-white/10'} lg:hidden`}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[40] bg-white lg:hidden flex flex-col justify-center px-12"
          >
            <nav className="flex flex-col space-y-8">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-baseline gap-4"
                  >
                    <span className="font-sans text-[10px] text-[#775a19] font-bold tracking-widest opacity-40">0{index + 1}</span>
                    <span className="font-serif text-5xl md:text-7xl italic hover:text-[#775a19] transition-colors leading-none tracking-tighter">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 left-12 right-12 flex flex-col sm:flex-row items-center justify-between gap-8 pt-12 border-t border-black/5"
            >
              <div className="space-y-1 text-center sm:text-left">
                <p className="font-sans text-[10px] uppercase tracking-widest text-black/30 font-bold">Direct Inquiry</p>
                <p className="font-serif italic text-lg">+94 77 123 4567</p>
              </div>
              <Link
                href="/reserve"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full sm:w-auto px-12 py-5 bg-[#191c1e] text-white rounded-full font-sans text-[10px] font-bold uppercase tracking-widest shadow-xl text-center"
              >
                Book Your Sanctuary
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LuxuryNavbar;
