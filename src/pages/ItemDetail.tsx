
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import PixelButton from '@/components/PixelButton';
import { getCollectibleById } from '@/data/collectibles';
import { ArrowLeft, Coins, Heart, Share2, ShoppingCart, Sparkles, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const item = getCollectibleById(Number(id));
  
  if (!item) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-96">
          <h2 className="font-pixel text-xl text-retro-white mb-4">ITEM NOT FOUND</h2>
          <PixelButton onClick={() => navigate(-1)}>
            Go Back
          </PixelButton>
        </div>
      </Layout>
    );
  }
  
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
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };
  
  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist!",
      description: `${item.name} has been added to your wishlist.`,
    });
  };

  return (
    <Layout>
      <div className="mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center font-retro text-retro-light hover:text-retro-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to browsing
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="pixel-borders overflow-hidden animate-pixel-fade">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-auto"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        
        <div className="animate-pixel-fade">
          <div className="flex items-center gap-3 mb-4">
            <Badge className={`${rarityColors[item.rarity]} border-2 border-retro-black font-retro uppercase px-3 py-1`}>
              {item.rarity}
            </Badge>
            <div className="flex">
              {Array.from({ length: rarityStars[item.rarity] }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-retro-yellow text-retro-yellow" />
              ))}
            </div>
          </div>
          
          <h1 className="font-pixel text-3xl text-retro-white mb-4">{item.name}</h1>
          
          {item.owner && (
            <p className="font-retro text-retro-light mb-6">
              Created by <span className="text-retro-blue">@{item.owner}</span>
            </p>
          )}
          
          <div className="bg-retro-dark p-4 pixel-borders mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-retro-yellow" />
              <span className="font-pixel text-xl text-retro-white">{item.price} BITS</span>
            </div>
          </div>
          
          <div className="bg-retro-dark p-6 pixel-borders mb-6">
            <h3 className="font-pixel text-lg text-retro-white mb-3">DESCRIPTION</h3>
            <p className="font-retro text-retro-light mb-4">
              A unique pixel collectible from the Pixel Paradise universe. This {item.name.toLowerCase()} is a {item.rarity} item with special properties.
            </p>
            
            <h3 className="font-pixel text-lg text-retro-white mb-3 mt-6">PROPERTIES</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-retro-black p-3 rounded-pixel">
                <p className="font-retro text-xs text-retro-gray">Rarity</p>
                <p className="font-retro text-sm text-retro-white capitalize">{item.rarity}</p>
              </div>
              <div className="bg-retro-black p-3 rounded-pixel">
                <p className="font-retro text-xs text-retro-gray">Collection</p>
                <p className="font-retro text-sm text-retro-white">Pixel Series</p>
              </div>
              <div className="bg-retro-black p-3 rounded-pixel">
                <p className="font-retro text-xs text-retro-gray">Item #</p>
                <p className="font-retro text-sm text-retro-white">{item.id}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <PixelButton 
              variant="primary" 
              size="lg" 
              fullWidth 
              className="flex items-center justify-center gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </PixelButton>
            
            <PixelButton 
              variant="secondary" 
              size="lg" 
              className="flex items-center justify-center gap-2"
              onClick={handleAddToWishlist}
            >
              <Heart className="w-5 h-5" />
            </PixelButton>
            
            <PixelButton 
              variant="secondary" 
              size="lg" 
              className="flex items-center justify-center gap-2"
              onClick={() => {
                toast({
                  title: "Sharing!",
                  description: "Share link copied to clipboard.",
                });
              }}
            >
              <Share2 className="w-5 h-5" />
            </PixelButton>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="font-pixel text-xl text-retro-white mb-6">YOU MAY ALSO LIKE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => {
            const relatedItem = getCollectibleById((Number(id) + index + 1) % 8 + 1);
            if (!relatedItem) return null;
            
            return (
              <div key={index} className="pixel-card overflow-hidden group cursor-pointer" onClick={() => navigate(`/item/${relatedItem.id}`)}>
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={relatedItem.image} 
                    alt={relatedItem.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                <div className="p-3 border-t-2 border-retro-black bg-retro-dark">
                  <h3 className="font-retro text-lg text-retro-white">{relatedItem.name}</h3>
                  <div className="mt-2 flex items-center">
                    <Sparkles className="w-4 h-4 text-retro-yellow mr-1" />
                    <span className="font-pixel text-xs text-retro-light">{relatedItem.price} BITS</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
