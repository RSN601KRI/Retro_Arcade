
import React from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  fallbackImageUrl: string;
  overlayOpacity?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoUrl, 
  fallbackImageUrl, 
  overlayOpacity = 0.5 
}) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={fallbackImageUrl}
      >
        <source src={videoUrl} type="video/mp4" />
        {/* Fallback to image if video doesn't load */}
      </video>
      <div 
        className="absolute inset-0 bg-retro-black"
        style={{ opacity: overlayOpacity }}
      ></div>
      
      {/* Pixel grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: 'linear-gradient(0deg, rgba(107, 70, 193, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 70, 193, 0.2) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Floating pixels */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-retro-purple rounded-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.6,
              animation: `pixel-float ${3 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 2}s`,
              transform: 'rotate(45deg)'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default VideoBackground;
