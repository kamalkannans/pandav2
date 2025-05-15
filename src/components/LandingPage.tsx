import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Workflow from './Workflow';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import CTA from './CTA';

const LandingPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Workflow />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
};

export default LandingPage;