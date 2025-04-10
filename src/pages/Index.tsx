
import React from 'react';
import Layout from '@/components/Layout';
import FeaturedBanner from '@/components/FeaturedBanner';
import CollectibleCard from '@/components/CollectibleCard';
import PixelButton from '@/components/PixelButton';
import { collectibles, getFeaturedCollectible } from '@/data/collectibles';
import { Coins, Filter, Gamepad2, Sparkles, TrendingUp } from 'lucide-react';

const Index = () => {
  const featuredItem = getFeaturedCollectible();

  return (
    <Layout>
      <section className="mb-12 animate-pixel-fade relative">
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 left-1/4 w-32 h-1 bg-retro-purple blur-md opacity-50 animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-1 bg-retro-green blur-md opacity-50 animate-pulse"></div>
        </div>
        <FeaturedBanner
          title="LEGENDARY COLLECTIBLES"
          description="Discover rare pixel treasures and expand your collection with unique items from across the retro universe."
          imageSrc={featuredItem.image}
          linkTo={`/item/${featuredItem.id}`}
        />
      </section>

      <section className="mb-12 relative">
        <div className="absolute -inset-1 bg-retro-black rounded-pixel border-2 border-retro-purple/30 -z-10"></div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-6">
          <div className="relative">
            <h2 className="font-pixel text-xl text-retro-white mb-2 relative inline-block">
              TRENDING COLLECTIBLES
              <span className="absolute -inset-1 bg-retro-purple opacity-20 blur-md rounded-full animate-pulse"></span>
            </h2>
            <p className="font-retro text-retro-light">The most popular pixel treasures this week</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <PixelButton variant="secondary" size="sm" className="flex items-center gap-1 relative group">
              <Filter className="w-4 h-4" /> 
              <span>Filter</span>
              <span className="absolute -inset-px bg-retro-blue opacity-0 group-hover:opacity-30 blur-sm rounded-pixel transition-opacity"></span>
            </PixelButton>
            <PixelButton variant="primary" size="sm" className="flex items-center gap-1 relative group">
              <TrendingUp className="w-4 h-4" /> 
              <span>Sort</span>
              <span className="absolute -inset-px bg-retro-purple opacity-0 group-hover:opacity-30 blur-sm rounded-pixel transition-opacity"></span>
            </PixelButton>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
          {collectibles.slice(0, 8).map((item, index) => (
            <div key={item.id} className="relative" style={{ animation: `pixel-fade 0.3s ease-out forwards ${index * 0.1}s` }}>
              <CollectibleCard item={item} />
              <div className="absolute -inset-1 -z-10 bg-gradient-to-r from-transparent via-retro-purple/5 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <PixelButton variant="secondary" size="lg" className="relative group">
            <span>View All Collectibles</span>
            <Sparkles className="absolute top-0 right-0 w-3 h-3 text-retro-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
          </PixelButton>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-retro-black p-6 pixel-borders border-2 border-retro-purple/50 group hover:bg-retro-dark transition-colors duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-retro-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="mb-4 w-12 h-12 bg-retro-purple p-2 rounded-pixel group-hover:bg-retro-purple transition-colors relative">
              <Gamepad2 className="text-retro-black w-full h-full group-hover:text-retro-white transition-colors" />
              <div className="absolute -inset-1 bg-retro-purple opacity-30 blur-sm rounded-full"></div>
            </div>
            <h3 className="font-pixel text-lg text-retro-white mb-2">COLLECT RARITIES</h3>
            <p className="font-retro text-retro-light">Discover and own unique pixel collectibles from legendary to common rarities.</p>
          </div>
          
          <div className="bg-retro-black p-6 pixel-borders border-2 border-retro-blue/50 group hover:bg-retro-dark transition-colors duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-retro-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="mb-4 w-12 h-12 bg-retro-blue p-2 rounded-pixel group-hover:bg-retro-blue transition-colors relative">
              <Sparkles className="text-retro-black w-full h-full group-hover:text-retro-white transition-colors" />
              <div className="absolute -inset-1 bg-retro-blue opacity-30 blur-sm rounded-full"></div>
            </div>
            <h3 className="font-pixel text-lg text-retro-white mb-2">TRADE ITEMS</h3>
            <p className="font-retro text-retro-light">Trade your pixel collectibles with other collectors in our secure marketplace.</p>
          </div>
          
          <div className="bg-retro-black p-6 pixel-borders border-2 border-retro-green/50 group hover:bg-retro-dark transition-colors duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-retro-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="mb-4 w-12 h-12 bg-retro-green p-2 rounded-pixel group-hover:bg-retro-green transition-colors relative">
              <Coins className="text-retro-black w-full h-full group-hover:text-retro-white transition-colors" />
              <div className="absolute -inset-1 bg-retro-green opacity-30 blur-sm rounded-full"></div>
            </div>
            <h3 className="font-pixel text-lg text-retro-white mb-2">EARN REWARDS</h3>
            <p className="font-retro text-retro-light">Complete challenges and earn BITS to unlock special edition collectibles.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-retro-black p-8 pixel-borders border-2 border-retro-purple/50 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-retro-purple via-retro-blue to-retro-green opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-retro-green via-retro-blue to-retro-purple opacity-50"></div>
          <h2 className="font-pixel text-xl text-retro-white mb-4 relative inline-block">
            JOIN THE PIXEL COMMUNITY
            <span className="absolute -inset-1 bg-retro-purple opacity-20 blur-md rounded-full animate-pulse"></span>
          </h2>
          <p className="font-retro text-retro-light mb-6 max-w-2xl mx-auto">
            Connect with fellow collectors, trade rare items, and stay updated on the latest pixel drops and exclusive events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PixelButton variant="success" size="lg" className="relative group">
              <span>Sign Up Now</span>
              <span className="absolute -inset-px bg-retro-green opacity-0 group-hover:opacity-30 blur-sm rounded-pixel transition-opacity"></span>
            </PixelButton>
            <PixelButton variant="secondary" size="lg" className="relative group">
              <span>Learn More</span>
              <span className="absolute -inset-px bg-retro-purple opacity-0 group-hover:opacity-30 blur-sm rounded-pixel transition-opacity"></span>
            </PixelButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
