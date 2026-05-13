'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import LuxuryNavbar from '../components/LuxuryNavbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <main className="relative min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col">
      <LuxuryNavbar isLightPage={true} />

      <section className="relative flex-grow pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-6xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Narrative Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="space-y-4">
                <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold text-[#775a19]">Concierge Direct</span>
                <h1 className="font-serif text-6xl md:text-8xl tracking-tighter leading-none">
                  Open a <br />
                  <span className="italic opacity-60">Dialogue.</span>
                </h1>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm group-hover:border-[#775a19]/30 transition-colors">
                    <Mail className="w-4 h-4 text-[#775a19]" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-black/40 font-bold mb-1">Email</p>
                    <p className="font-serif text-lg italic">concierge@moonrisevilla.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm group-hover:border-[#775a19]/30 transition-colors">
                    <Phone className="w-4 h-4 text-[#775a19]" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-black/40 font-bold mb-1">Direct Line</p>
                    <p className="font-serif text-lg italic">+94 77 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm group-hover:border-[#775a19]/30 transition-colors">
                    <MapPin className="w-4 h-4 text-[#775a19]" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-black/40 font-bold mb-1">Sanctuary Location</p>
                    <p className="font-serif text-lg italic">Southern Coast, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[250px] w-full rounded-[2.5rem] overflow-hidden group">
                <Image
                  src="/hero image/Artboard 4.png"
                  alt="Villa Detail"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-[#775a19]/10" />
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-black/5">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Name</label>
                      <input type="text" className="w-full bg-[#f7f9fb] border-black/5 rounded-full px-8 py-5 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#775a19]/20 transition-all" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Email</label>
                      <input type="email" className="w-full bg-[#f7f9fb] border-black/5 rounded-full px-8 py-5 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#775a19]/20 transition-all" placeholder="Email Address" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Subject</label>
                    <select className="w-full bg-[#f7f9fb] border-black/5 rounded-full px-8 py-5 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#775a19]/20 transition-all appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Event Hosting</option>
                      <option>Press & Media</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Message</label>
                    <textarea rows={6} className="w-full bg-[#f7f9fb] border-black/5 rounded-[2rem] px-8 py-6 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#775a19]/20 transition-all resize-none" placeholder="How may we assist you?" />
                  </div>

                  <button className="group relative w-full h-16 bg-[#191c1e] text-white rounded-full font-sans text-[10px] font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send Inquiry <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-2" />
                    </span>
                    <div className="absolute inset-0 bg-[#775a19] transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0" />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
