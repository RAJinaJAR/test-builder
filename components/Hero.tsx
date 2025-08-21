
import React from 'react';
import FeatureShowcase from './FeatureShowcase';

const Hero: React.FC = () => {
  return (
    <section className="py-10 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
          Turn Any Video Into an Interactive Test
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Our builder extracts frames from your videos and lets you place interactive hotspots to create engaging, visual tests in minutes.
        </p>
        <div className="mt-12">
          <FeatureShowcase />
        </div>
      </div>
    </section>
  );
};

export default Hero;
