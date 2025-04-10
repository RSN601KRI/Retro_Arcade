import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import PixelButton from '@/components/PixelButton';
import AnimatedCard from '@/components/AnimatedCard';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Trophy, Star, Medal, Users, Settings, LogOut } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock user data
  const user = {
    username: 'PixelCollector',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Felix',
    level: 42,
    joined: 'March 2025',
    bio: 'Passionate pixel art collector and retro gaming enthusiast.',
    ownedItems: 27,
    watchlist: 13
  };
  
  // Mock collection items
  const ownedItems = [
    {
      id: 1,
      title: 'Cosmic Pixel Cat',
      description: 'A rare cosmic feline from the Pixelverse',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=cosmic&backgroundColor=b6e3f4',
      rarity: 'rare' as const,
      price: 2500
    },
    {
      id: 2,
      title: 'Golden Gameboy',
      description: 'Limited edition retro gaming console',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=golden&backgroundColor=ffd700',
      rarity: 'legendary' as const,
      price: 10000
    },
    {
      id: 3,
      title: 'Digital Samurai',
      description: 'Ancient pixel warrior from the Digital Dynasty',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=samurai&backgroundColor=ff9671',
      rarity: 'epic' as const,
      price: 5000
    },
    {
      id: 4,
      title: 'Glitch Dragon',
      description: 'A mystical creature born from a coding error',
      image: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=dragon&backgroundColor=845EC2',
      rarity: 'uncommon' as const,
      price: 1200
    }
  ];
  
  // Track achievements
  const achievements = [
    { name: 'Early Adopter', icon: Star, description: 'Joined during beta phase', date: 'Mar 15, 2025' },
    { name: 'Collection Master', icon: Trophy, description: 'Collected over 25 items', date: 'Apr 2, 2025' },
    { name: 'Social Butterfly', icon: Users, description: 'Connected with 10+ collectors', date: 'Apr 8, 2025' },
    { name: 'Rare Find', icon: Medal, description: 'Acquired a legendary item', date: 'Apr 12, 2025' }
  ];
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate('/');
  };
  
  return (
    <Layout>
      <div className="space-y-10 animate-pixel-fade">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-retro-dark p-6 pixel-borders md:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center mb-6">
              <Avatar className="w-32 h-32 border-4 border-retro-purple mb-4">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-retro-purple text-2xl">PC</AvatarFallback>
              </Avatar>
              
              <h1 className="font-pixel text-xl text-retro-white mb-1">{user.username}</h1>
              <div className="flex items-center justify-center mb-2">
                <Star className="w-4 h-4 text-retro-yellow mr-1 fill-retro-yellow" />
                <span className="font-retro text-retro-light">Level {user.level}</span>
              </div>
              <p className="font-retro text-retro-light text-sm">Member since {user.joined}</p>
            </div>
            
            <div className="bg-retro-black p-4 rounded-pixel mb-6">
              <p className="font-retro text-retro-light">{user.bio}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-retro-black p-3 rounded-pixel text-center">
                <p className="font-pixel text-lg text-retro-purple">{user.ownedItems}</p>
                <p className="font-retro text-retro-light text-sm">Items</p>
              </div>
              <div className="bg-retro-black p-3 rounded-pixel text-center">
                <p className="font-pixel text-lg text-retro-green">{user.watchlist}</p>
                <p className="font-retro text-retro-light text-sm">Watchlist</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <PixelButton
                variant="secondary"
                size="md"
                fullWidth
                className="flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" /> Edit Profile
              </PixelButton>
              
              <PixelButton
                variant="danger"
                size="md"
                fullWidth
                className="flex items-center justify-center gap-2"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" /> Log Out
              </PixelButton>
            </div>
          </motion.div>
          
          <div className="md:col-span-2 space-y-8">
            <motion.div 
              className="bg-retro-dark p-6 pixel-borders"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-pixel text-lg text-retro-white mb-4">ACHIEVEMENTS</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="bg-retro-black p-3 rounded-pixel flex items-center gap-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="w-10 h-10 bg-retro-purple rounded-pixel flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-retro-white" />
                    </div>
                    <div>
                      <h3 className="font-retro text-retro-white">{achievement.name}</h3>
                      <p className="font-retro text-retro-light text-xs">{achievement.description}</p>
                      <p className="font-retro text-retro-blue text-xs">{achievement.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-retro-dark p-6 pixel-borders"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-pixel text-lg text-retro-white">MY COLLECTION</h2>
                <PixelButton 
                  variant="secondary" 
                  size="sm"
                  onClick={() => navigate('/collection')}
                >
                  View All
                </PixelButton>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ownedItems.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    rarity={item.rarity}
                    price={item.price}
                    onClick={() => navigate(`/item/${item.id}`)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
