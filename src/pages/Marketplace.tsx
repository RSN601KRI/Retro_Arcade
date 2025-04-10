
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import PixelButton from '@/components/PixelButton';
import AnimatedCard from '@/components/AnimatedCard';
import VideoBackground from '@/components/VideoBackground';
import { useToast } from '@/components/ui/use-toast';
import { Search, Filter, TrendingUp, Sparkles, ArrowUpDown, ShoppingCart } from 'lucide-react';

const Marketplace = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('trending');
  
  // Mock marketplace items
  const marketplaceItems = [
    {
      id: 101,
      title: 'Pixel Sword',
      description: 'Legendary pixel sword of the ancient digital realm',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=sword&backgroundColor=7F5AF0',
      rarity: 'legendary' as const,
      price: 15000,
      seller: 'PixelForge'
    },
    {
      id: 102,
      title: 'Space Invader',
      description: 'Original character from the classic arcade game',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=invader&backgroundColor=242423',
      rarity: 'epic' as const,
      price: 8500,
      seller: 'RetroGamer92'
    },
    {
      id: 103,
      title: 'Cyberpunk City',
      description: 'Detailed pixel art of a futuristic cyberpunk metropolis',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=cyberpunk&backgroundColor=240046',
      rarity: 'rare' as const,
      price: 3200,
      seller: 'NeonArtist'
    },
    {
      id: 104,
      title: 'Rainbow Unicorn',
      description: 'Magical pixel unicorn with rainbow powers',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=unicorn&backgroundColor=E2B4BD',
      rarity: 'uncommon' as const,
      price: 1500,
      seller: 'PixelDreamer'
    },
    {
      id: 105,
      title: 'Haunted Castle',
      description: 'Spooky pixel castle with mysterious inhabitants',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=castle&backgroundColor=4A4E69',
      rarity: 'rare' as const,
      price: 4800,
      seller: 'GhostPixel'
    },
    {
      id: 106,
      title: 'Golden Trophy',
      description: 'Award for the annual pixel art championship',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=trophy&backgroundColor=FFD700',
      rarity: 'epic' as const,
      price: 7600,
      seller: 'PixelChampion'
    },
    {
      id: 107,
      title: 'Pixel Pizza',
      description: 'Delicious looking pixel pizza, not edible',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=pizza&backgroundColor=C1121F',
      rarity: 'common' as const,
      price: 500,
      seller: 'FoodPixeler'
    },
    {
      id: 108,
      title: 'Retro Computer',
      description: 'Vintage computer with pixelated interface',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=computer&backgroundColor=003049',
      rarity: 'uncommon' as const,
      price: 2100,
      seller: 'TechCollector'
    },
    {
      id: 109,
      title: 'Mystic Amulet',
      description: 'Ancient artifact with mysterious digital powers',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=amulet&backgroundColor=5E548E',
      rarity: 'legendary' as const,
      price: 12000,
      seller: 'CrypticPixel'
    },
    {
      id: 110,
      title: 'Dinosaur Fossil',
      description: 'Prehistoric pixel art of a dinosaur skeleton',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=dinosaur&backgroundColor=CB997E',
      rarity: 'rare' as const,
      price: 6300,
      seller: 'PixelPaleontologist'
    },
    {
      id: 111,
      title: 'Neon Sunglasses',
      description: 'Stylish pixel sunglasses with neon glow effect',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=sunglasses&backgroundColor=FF6B6B',
      rarity: 'uncommon' as const,
      price: 1800,
      seller: 'GlowStyle'
    },
    {
      id: 112,
      title: 'Treasure Chest',
      description: 'Pixel chest filled with valuable collectibles',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=treasure&backgroundColor=BB9457',
      rarity: 'epic' as const,
      price: 8900,
      seller: 'PixelHunter'
    }
  ];
  
  // Filter and sort items
  const filteredItems = marketplaceItems.filter(item => {
    return searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  // Apply sorting
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch(sortBy) {
      case 'price-high':
        return b.price - a.price;
      case 'price-low':
        return a.price - b.price;
      case 'rarity':
        const rarityOrder = { legendary: 4, epic: 3, rare: 2, uncommon: 1, common: 0 };
        return rarityOrder[b.rarity] - rarityOrder[a.rarity];
      case 'trending':
      default:
        // Simulate trending by using ID for this demo
        return a.id - b.id;
    }
  });
  
  const handleAddToCart = (item) => {
    toast({
      title: "Added to cart!",
      description: `${item.title} has been added to your cart.`,
    });
  };
  
  return (
    <Layout>
      <div className="relative">
        {/* Featured section with video background */}
        <div className="relative h-[300px] mb-12 overflow-hidden rounded-pixel pixel-borders">
          <VideoBackground 
            videoUrl="https://cdn.pixabay.com/vimeo/449013270/neon-32516.mp4?width=1280&hash=b9e2a9412e19e53bc85bf1cc4a1ff9f6c43e1be9"
            fallbackImageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
            overlayOpacity={0.6}
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-pixel text-3xl text-retro-white mb-4">PIXEL MARKETPLACE</h1>
              <p className="font-retro text-xl text-retro-light max-w-2xl mb-6">
                Discover, trade, and collect rare pixel treasures from creators around the digital universe
              </p>
              <div className="flex justify-center gap-4">
                <PixelButton variant="primary" size="lg" className="animate-pixel-pulse">
                  <Sparkles className="w-5 h-5 mr-2" /> Featured Items
                </PixelButton>
                <PixelButton variant="secondary" size="lg">
                  Sell Your Art
                </PixelButton>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-retro-purple w-5 h-5" />
            <input
              type="text"
              placeholder="Search for pixel treasures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-retro-dark border-2 border-retro-purple rounded-pixel py-3 pl-10 pr-4 font-retro text-retro-white w-full focus:outline-none focus:border-retro-pink"
            />
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <PixelButton variant="secondary" size="md" className="flex items-center gap-1">
              <Filter className="w-4 h-4" /> Filter
            </PixelButton>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-retro-dark border-2 border-retro-purple rounded-pixel py-2 px-4 font-retro text-retro-white focus:outline-none focus:border-retro-pink appearance-none cursor-pointer"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B46C1\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: '36px' }}
            >
              <option value="trending">Trending</option>
              <option value="price-high">Price: High to Low</option>
              <option value="price-low">Price: Low to High</option>
              <option value="rarity">Rarity</option>
            </select>
          </div>
        </div>
        
        {/* Marketplace items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <AnimatedCard
                title={item.title}
                description={item.description}
                image={item.image}
                rarity={item.rarity}
                price={item.price}
                onClick={() => navigate(`/item/${item.id}`)}
              />
              
              <motion.div
                className="absolute -bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 group-hover:-bottom-8 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <button
                  className="bg-retro-green text-retro-white font-retro px-3 py-1 rounded-pixel border-2 border-retro-black flex items-center gap-2 shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                >
                  <ShoppingCart className="w-4 h-4" /> Buy Now
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <PixelButton variant="secondary" size="lg">
            Load More Items
          </PixelButton>
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;
