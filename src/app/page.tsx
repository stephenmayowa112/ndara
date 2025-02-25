"use client"
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer'
import LogosCarousel from '../components/LogosCarousel';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogosCarousel />
      <Footer />
    </main>
  );
}