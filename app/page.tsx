import Hero from "./components/Hero";
import About from "./components/About";
import MobileAbout from "./components/MobileAbout";
import Packages from "./components/Packages";
import LuxuryNavbar from "./components/LuxuryNavbar";
import Gallery from "./components/Gallery";
import MobileGallery from "./components/MobileGallery";
import ClientStories from "./components/ClientStories";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <LuxuryNavbar />

      {/* Hero Section - Sticky in Background */}
      <div className="sticky top-0 h-[120vh] w-full z-0">
        <Hero />
      </div>

      <div className="relative z-10 bg-black rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] -mt-16">
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

