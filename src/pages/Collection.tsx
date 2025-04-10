
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import PixelButton from '@/components/PixelButton';
import AnimatedCard from '@/components/AnimatedCard';
import { Filter, SlidersHorizontal, Search, Gamepad, Image, Music, Package } from 'lucide-react';

const Collection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock collection categories
  const categories = [
    { id: 'all', name: 'All Items', icon: Package },
    { id: 'games', name: 'Games', icon: Gamepad },
    { id: 'art', name: 'Pixel Art', icon: Image },
    { id: 'music', name: 'Chiptune', icon: Music },
  ];
  
  // Mock collection items
  const collectionItems = [
    {
      id: 1,
      title: 'Cosmic Pixel Cat',
      description: 'A rare cosmic feline from the Pixelverse',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=cosmic&backgroundColor=b6e3f4',
      category: 'art',
      rarity: 'rare' as const,
      price: 2500
    },
    {
      id: 2,
      title: 'Golden Gameboy',
      description: 'Limited edition retro gaming console',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=golden&backgroundColor=ffd700',
      category: 'games',
      rarity: 'legendary' as const,
      price: 10000
    },
    {
      id: 3,
      title: 'Digital Samurai',
      description: 'Ancient pixel warrior from the Digital Dynasty',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=samurai&backgroundColor=ff9671',
      category: 'art',
      rarity: 'epic' as const,
      price: 5000
    },
    {
      id: 4,
      title: 'Glitch Dragon',
      description: 'A mystical creature born from a coding error',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=dragon&backgroundColor=845EC2',
      category: 'art',
      rarity: 'uncommon' as const,
      price: 1200
    },
    {
      id: 5,
      title: 'Neon Racer',
      description: 'High-octane racing game from the 80s',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=racer&backgroundColor=00C9A7',
      category: 'games',
      rarity: 'rare' as const,
      price: 3500
    },
    {
      id: 6,
      title: 'Chiptune Symphony',
      description: 'Award-winning 8-bit musical composition',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=chiptune&backgroundColor=4B4453',
      category: 'music',
      rarity: 'epic' as const,
      price: 4800
    },
    {
      id: 7,
      title: 'Dungeon Master',
      description: 'Classic turn-based RPG adventure',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=dungeon&backgroundColor=C34A36',
      category: 'games',
      rarity: 'uncommon' as const,
      price: 1800
    },
    {
      id: 8,
      title: 'Synthwave Mix',
      description: 'Exclusive retro-futuristic audio tracks',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=synthwave&backgroundColor=B0A8B9',
      category: 'music',
      rarity: 'rare' as const,
      price: 2900
    }
  ];
  
  // Filter items based on category and search query
  const filteredItems = collectionItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <Layout>
      <div className="animate-pixel-fade">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-pixel text-2xl text-retro-white mb-2">MY COLLECTION</h1>
            <p className="font-retro text-retro-light">Your curated pixel treasures and retro collectibles</p>
          </div>
          
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-retro-purple w-4 h-4" />
              <input
                type="text"
                placeholder="Search collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-retro-dark border-2 border-retro-purple rounded-pixel py-2 pl-10 pr-4 font-retro text-retro-white w-full md:w-64 focus:outline-none focus:border-retro-pink"
              />
            </div>
            
            <PixelButton variant="secondary" size="sm" className="flex items-center gap-1">
              <SlidersHorizontal className="w-4 h-4" /> Sort
            </PixelButton>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-2 space-x-2 no-scrollbar">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              const Icon = category.icon;
              
              return (
                <motion.button
                  key={category.id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-pixel whitespace-nowrap font-retro ${
                    isActive
                      ? 'bg-retro-purple text-retro-white border-2 border-retro-black'
                      : 'bg-retro-dark text-retro-light border-2 border-retro-black hover:bg-retro-purple/30'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
        
        {filteredItems.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AnimatedCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  rarity={item.rarity}
                  price={item.price}
                  onClick={() => navigate(`/item/${item.id}`)}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16 bg-retro-dark rounded-pixel">
            <Filter className="w-12 h-12 text-retro-purple mx-auto mb-4" />
            <h3 className="font-pixel text-lg text-retro-white mb-2">No items found</h3>
            <p className="font-retro text-retro-light">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Collection;
