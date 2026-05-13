'use client';

import { useState } from 'react';
import LuxuryNavbar from '../components/LuxuryNavbar';
import Footer from '../components/Footer';
import ReserveHero from '../components/reserve/ReserveHero';
import VillaPreview from '../components/reserve/VillaPreview';
import ReserveForm from '../components/reserve/ReserveForm';

const ReservePage = () => {
  const [selectedVilla, setSelectedVilla] = useState('Horizon Villa');

  return (
    <main className="relative min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col">
      <LuxuryNavbar isLightPage={true} />

      <section className="relative flex-grow flex items-center justify-center pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#775a19]/5 -skew-x-12 transform origin-top translate-x-32 -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Column 1: Narrative & Branding (5 cols) */}
            <div className="lg:col-span-5 space-y-10">
              <ReserveHero />
              <VillaPreview selectedVilla={selectedVilla} />
            </div>

            {/* Column 2: The Luminous Form (7 cols) */}
            <div className="lg:col-span-7">
              <ReserveForm 
                selectedVilla={selectedVilla} 
                onVillaChange={setSelectedVilla} 
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ReservePage;
