import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import WhyNow from '@/components/WhyNow';
import Stats from '@/components/Stats';
import SimulationCTA from '@/components/SimulationCTA';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Landing() {
  useEffect(() => {
    // Smooth scroll for in-page anchors
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white antialiased">
      <Header />
      <Hero />
      <LogoMarquee />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <WhyNow />
      <Stats />
      <SimulationCTA />
      <FinalCTA />
      <Footer />
    </main>
  );
}
