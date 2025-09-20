
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <Features />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
