
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Star } from 'lucide-react';

export interface CollectibleItem {
  id: number;
  name: string;
  image: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  price: number;
  owner?: string;
}

interface CollectibleCardProps {
  item: CollectibleItem;
}

const CollectibleCard: React.FC<CollectibleCardProps> = ({ item }) => {
  const rarityColors = {
    common: 'bg-slate-500',
    uncommon: 'bg-retro-green',
    rare: 'bg-retro-blue',
    epic: 'bg-retro-purple',
    legendary: 'bg-retro-yellow text-retro-black',
  };

  const rarityStars = {
    common: 1,
    uncommon: 2,
    rare: 3,
    epic: 4,
    legendary: 5,
  };

  return (
    <Link 
      to={`/item/${item.id}`} 
      className="block animate-pixel-fade"
    >
      <div className="pixel-card group overflow-hidden">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            style={{ imageRendering: 'pixelated' }}
          />
          {item.rarity === 'legendary' && (
            <div className="absolute inset-0 bg-gradient-to-b from-retro-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
          <Badge className={`absolute top-2 right-2 ${rarityColors[item.rarity]} border-2 border-retro-black font-retro uppercase`}>
            {item.rarity}
          </Badge>
        </div>
        
        <div className="p-3 border-t-2 border-retro-black bg-retro-dark">
          <div className="flex items-center justify-between">
            <h3 className="font-retro text-lg text-retro-white truncate">{item.name}</h3>
            <div className="flex">
              {Array.from({ length: rarityStars[item.rarity] }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-retro-yellow text-retro-yellow" />
              ))}
            </div>
          </div>
          
          <div className="mt-2 flex justify-between items-center">
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 text-retro-yellow mr-1" />
              <span className="font-pixel text-xs text-retro-light">{item.price} BITS</span>
            </div>
            {item.owner && (
              <span className="font-retro text-xs text-retro-gray truncate max-w-[100px]">
                @{item.owner}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectibleCard;
