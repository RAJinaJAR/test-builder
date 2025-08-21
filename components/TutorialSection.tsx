import React from 'react';
import VideoPlayer from './VideoPlayer';

const TutorialSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-2 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl tracking-tight text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">
          See How It Works
        </h3>
      
        <div className="max-w-5xl mx-auto mt-8 flex justify-center">
          <VideoPlayer src="/videos/CTRM Test simulator with input validation.mp4" />
        </div>
    
        <p className="mt-3 max-w-xl mx-auto text-lg text-slate-400">
          Follow our quick tutorial to start creating your own interactive video tests in just a few clicks.
        </p>

        <div className="mt-6">
          <a
            href="/sample-tests/test_package.zip"
            download
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300"
          >
            Download Sample Test
          </a>
        </div>

        {/* Instruction text */}
        <p className="mt-4 text-md text-slate-300">
          Upload this test file on the CTRM Test Builder to try it out.
        </p>
      </div>
    </section>
  );
};

export default TutorialSection;
