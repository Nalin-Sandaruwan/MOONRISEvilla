'use client';

import { motion } from 'framer-motion';
import LuxuryNavbar from '../components/LuxuryNavbar';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  return (
    <main className="relative min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col">
      <LuxuryNavbar isLightPage={true} />

      <section className="relative flex-grow pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-3xl">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 space-y-4"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold text-[#775a19]">Legal Sanctuary</span>
            <h1 className="font-serif text-5xl md:text-7xl tracking-tighter leading-none">
              Privacy <span className="italic opacity-60">Policy.</span>
            </h1>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-12 font-sans text-sm text-[#191c1e]/70 leading-relaxed tracking-wide"
          >
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#191c1e] italic">1. Our Commitment</h2>
              <p>
                At Moonrise Villa, we respect your sanctuary—including your digital presence. This policy outlines how we handle the private information you share with us during your reservation and inquiry process.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#191c1e] italic">2. Collection of Essence</h2>
              <p>
                We collect personal information such as your name, contact details, and stay preferences solely to curate a bespoke experience tailored to your unique requirements.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#191c1e] italic">3. Seclusion of Data</h2>
              <p>
                Your data is never shared, sold, or distributed to third parties for marketing purposes. We maintain the highest standards of digital confidentiality, mirroring the physical seclusion of our villas.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#191c1e] italic">4. Your Sovereignty</h2>
              <p>
                You retain full rights to request the deletion or modification of your records within our concierge system at any time.
              </p>
            </div>

            <div className="pt-12 border-t border-black/5">
              <p className="text-[10px] uppercase tracking-widest opacity-40">Last Updated: May 2026</p>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPage;
