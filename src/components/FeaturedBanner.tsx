
import React from 'react';
import PixelButton from './PixelButton';
import { ArrowRight } from 'lucide-react';

interface FeaturedBannerProps {
  title: string;
  description: string;
  imageSrc: string;
  linkTo: string;
}

const FeaturedBanner: React.FC<FeaturedBannerProps> = ({
  title,
  description,
  imageSrc,
  linkTo,
}) => {
  return (
    <div className="w-full bg-retro-blue pixel-borders overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <h2 className="font-pixel text-2xl md:text-3xl text-retro-white mb-4">{title}</h2>
          <p className="font-retro text-lg text-retro-light mb-6">{description}</p>
          <div>
            <PixelButton
              variant="warning"
              size="lg"
              className="flex items-center gap-2"
              onClick={() => window.location.href = linkTo}
            >
              Explore <ArrowRight className="w-4 h-4" />
            </PixelButton>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-retro-black border-t-2 md:border-t-0 md:border-l-2 border-retro-black relative overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
            style={{ imageRendering: 'pixelated' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-retro-black to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
