import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import GallerySection from "./components/sections/GallerySection";
import InstagramSection from "./components/sections/InstagramSection";
import LocationSection from "./components/sections/LocationSection";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/sections/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileStickyBar from "./components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <InstagramSection />
      <LocationSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
