'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const LuxuryNavbar = ({
  isLightPage = false,
  isVisible = true,
  forceWhite = false,
  isOpen: controlledIsOpen,
  setIsOpen: controlledSetIsOpen
}: {
  isLightPage?: boolean;
  isVisible?: boolean;
  forceWhite?: boolean;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen ?? internalIsOpen;
  const setIsOpen = controlledSetIsOpen ?? setInternalIsOpen;

  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Privacy', href: '/privecy' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const isDarkText = forceWhite ? false : (scrolled || isLightPage);
  const finalVisible = isVisible;

  return (
    <>
      <AnimatePresence>
        {finalVisible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 md:py-8 px-6 md:px-12 pointer-events-none"
          >
            <div className="flex items-center justify-between pointer-events-auto">
              {/* Branding */}
              <Link href="/" className="flex flex-col items-start group relative z-50">
                <span className={`text-xl md:text-2xl font-sans font-bold tracking-tighter leading-none transition-colors duration-500 ${isDarkText || isOpen ? 'text-[#191c1e]' : 'text-white'}`}>
                  MOON<span className={`${isDarkText || isOpen ? 'text-[#191c1e]/60' : 'text-white/70'}`}>RISE</span>
                </span>
              </Link>

              {/* Minimalist Menu Trigger (Unified for all screens) */}
              <div className="flex items-center space-x-6 relative z-50">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`group flex items-center gap-4 py-2 pl-6 pr-2 rounded-full transition-all duration-500 backdrop-blur-xl border ${isDarkText || isOpen
                    ? 'text-[#191c1e] bg-black/5 border-black/10'
                    : 'text-white bg-white/5 border-white/10'
                    }`}
                >
                  <span className="hidden md:block text-[9px] font-sans font-bold uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">
                    {isOpen ? 'Close' : 'Menu'}
                  </span>
                  <div className={`p-2 rounded-full transition-colors duration-500 ${isDarkText || isOpen ? 'bg-black/5' : 'bg-white/10'
                    }`}>
                    {isOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
                  </div>
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Unified Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[40] bg-white flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <nav className="relative z-10 flex flex-col items-center space-y-8 md:space-y-12">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex flex-col items-center"
                  >
                    <span className="font-sans text-[10px] text-[#775a19] font-bold tracking-[0.5em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-5xl md:text-8xl italic hover:text-[#775a19] transition-all duration-500 leading-none tracking-tighter">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-black/5"
            >
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
                <p className="font-sans text-[10px] uppercase tracking-widest text-black/30 font-bold">Southern Coast</p>
                <p className="font-serif italic text-lg">Tangalle, Sri Lanka</p>
              </div>

              <Link
                href="/reserve"
                onClick={() => setIsOpen(false)}
                className="group relative px-12 py-5 bg-[#191c1e] text-white rounded-full font-sans text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Reserve Your Sanctuary</span>
                <div className="absolute inset-0 bg-[#775a19] transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0" />
              </Link>

              <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1">
                <p className="font-sans text-[10px] uppercase tracking-widest text-black/30 font-bold">Enquiries</p>
                <p className="font-serif italic text-lg">+94 77 123 4567</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LuxuryNavbar;
