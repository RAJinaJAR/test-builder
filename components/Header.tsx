
import React from 'react';
import Button from './Button';
import { TestTube2 } from 'lucide-react';

const Header: React.FC = () => {
  // A simple stand-in for lucide-react, as we can't import full libraries.
  const TestTubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/>
        <path d="M8.5 2h7"/>
        <path d="M14.5 16h-5"/>
    </svg>
  );

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-700/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-200">
            CTRM Test Builder
          </h1>
        </div>
        <Button href="https://ctrm-test-builder.onrender.com/" target="_blank">
          Open Builder
        </Button>
      </div>
    </header>
  );
};

export default Header;
