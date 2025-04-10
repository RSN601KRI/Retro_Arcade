
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface AnimatedCardProps {
  title: string;
  description: string;
  image: string;
  rarity?: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  price?: number;
  onClick?: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  image,
  rarity = 'common',
  price,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const rarityColors = {
    common: 'bg-slate-500',
    uncommon: 'bg-retro-green',
    rare: 'bg-retro-blue',
    epic: 'bg-retro-purple',
    legendary: 'bg-retro-yellow text-retro-black',
  };
  
  return (
    <motion.div
      className="pixel-card overflow-hidden cursor-pointer relative"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        {/* Rarity badge */}
        <div className={`absolute top-2 right-2 z-10 ${rarityColors[rarity]} px-2 py-1 font-pixel text-xs uppercase rounded-pixel`}>
          {rarity}
        </div>
        
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full"
          style={{ imageRendering: 'pixelated' }}
        />
        
        {/* Animated overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-retro-black/80 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="font-retro text-retro-white text-sm line-clamp-2">{description}</p>
          </div>
        </motion.div>
        
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut', repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
        />
      </div>
      
      <div className="p-3 border-t-2 border-retro-black bg-retro-dark">
        <h3 className="font-retro text-lg text-retro-white">{title}</h3>
        
        {price !== undefined && (
          <div className="mt-2 flex items-center">
            <Sparkles className="w-4 h-4 text-retro-yellow mr-1" />
            <span className="font-pixel text-xs text-retro-light">{price} BITS</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
