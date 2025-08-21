
import React from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div className="w-full h-full bg-black rounded-lg overflow-hidden shadow-lg">
      <video
        className="w-full h-full object-cover"
        controls
        src={src}
        // It's good practice to include a poster, but we'll omit for simplicity
        // poster="path/to/poster.jpg" 
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
