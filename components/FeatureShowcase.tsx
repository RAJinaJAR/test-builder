import React, { useState } from 'react';
import type { HotspotData } from '../types';
import VideoPlayer from './VideoPlayer';

const hotspots: HotspotData[] = [
  { id: 1, top: '45%', left: '52%', question: 'What type of bird is this?' },
  { id: 2, top: '60%', left: '25%', question: 'Identify this part of the branch.' },
  { id: 3, top: '22%', left: '70%', question: 'What is the significance of the blurred background in photography?' },
];

const Hotspot: React.FC<{ hotspot: HotspotData; onMouseEnter: () => void; onMouseLeave: () => void; isActive: boolean; }> = ({ hotspot, onMouseEnter, onMouseLeave, isActive }) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ top: hotspot.top, left: hotspot.left }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="w-6 h-6 rounded-full bg-cyan-400/30 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-125"
      >
        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
      </div>
      {isActive && (
        <div className="absolute bottom-full mb-3 w-48 bg-slate-800 text-white text-sm rounded-lg p-3 shadow-lg z-10 transition-opacity duration-300 transform -translate-x-1/2 left-1/2">
          <p>{hotspot.question}</p>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-slate-800"></div>
        </div>
      )}
    </div>
  );
};

const FeatureShowcase: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <div className="max-w-10xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-4 sm:p-8 bg-slate-800/50 rounded-2xl border border-slate-700 shadow-2xl shadow-cyan-500/10">
      
      {/* Left video - Learn */}
      <div className="w-full aspect-video relative">
        <VideoPlayer src="/videos/Aspect Login Demo.mp4" />
        <span className="absolute top-4 left-4 bg-emerald-500/80 text-white px-3 py-1 rounded-md text-sm font-semibold shadow-md">
          Learn
        </span>
      </div>

      {/* Right video - Test */}
      <div className="w-full aspect-video relative">
        <VideoPlayer src="/videos/Demo.mp4" />
        <span className="absolute top-4 left-4 bg-cyan-500/80 text-white px-3 py-1 rounded-md text-sm font-semibold shadow-md">
          Test
        </span>
      </div>
    </div>
  );
};

export default FeatureShowcase;
