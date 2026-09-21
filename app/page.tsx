import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import GallerySection from "./components/sections/GallerySection";
import LocationSection from "./components/sections/LocationSection";
import Footer from "./components/sections/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileStickyBar from "./components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
