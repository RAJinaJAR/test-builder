
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TutorialSection from './components/TutorialSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans antialiased">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.2] [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <TutorialSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
