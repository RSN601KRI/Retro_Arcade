
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import PixelButton from '@/components/PixelButton';
import VideoBackground from '@/components/VideoBackground';
import { useToast } from '@/components/ui/use-toast';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('/placeholder.svg');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate authentication
    if (isLogin) {
      // Login logic
      toast({
        title: "Login Successful",
        description: "Welcome back to Pixel Paradise!",
      });
      navigate('/profile');
    } else {
      // Register logic
      toast({
        title: "Registration Successful",
        description: "Your account has been created!",
      });
      navigate('/profile');
    }
  };
  
  // Predefined avatar options
  const avatarOptions = [
    '/placeholder.svg',
    'https://api.dicebear.com/7.x/pixel-art/svg?seed=Felix',
    'https://api.dicebear.com/7.x/pixel-art/svg?seed=Aneka',
    'https://api.dicebear.com/7.x/pixel-art/svg?seed=Midnight',
    'https://api.dicebear.com/7.x/pixel-art/svg?seed=Peanut'
  ];
  
  return (
    <Layout>
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <VideoBackground 
          videoUrl="https://cdn.pixabay.com/vimeo/328940142/cyber-25192.mp4?width=1280&hash=c82c432be04b4dfffcd9dce8a807f3c5938d2aed"
          fallbackImageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
          overlayOpacity={0.7}
        />
        
        <div className="relative z-10 w-full max-w-md">
          <motion.div 
            className="bg-retro-dark p-8 pixel-borders"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-6">
              <h1 className="font-pixel text-xl text-retro-white mb-2">
                {isLogin ? 'LOGIN' : 'CREATE ACCOUNT'}
              </h1>
              <p className="font-retro text-retro-light">
                {isLogin 
                  ? 'Access your pixel collection' 
                  : 'Join the retro pixel community'}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="space-y-4">
                  <div>
                    <label className="font-retro text-retro-light block mb-1">Username</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-retro-purple">
                        <User size={18} />
                      </span>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-retro-black border-2 border-retro-purple px-10 py-2 font-retro text-retro-white focus:outline-none focus:ring-2 focus:ring-retro-pink rounded-pixel"
                        placeholder="PixelMaster"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-retro text-retro-light block mb-1">Avatar</label>
                    <div className="grid grid-cols-5 gap-2">
                      {avatarOptions.map((avatarSrc, index) => (
                        <Avatar
                          key={index}
                          className={`w-12 h-12 cursor-pointer transition-all border-2 ${
                            avatar === avatarSrc ? 'border-retro-pink scale-110' : 'border-transparent hover:border-retro-purple'
                          }`}
                          onClick={() => setAvatar(avatarSrc)}
                        >
                          <AvatarImage src={avatarSrc} />
                          <AvatarFallback className="bg-retro-purple">PX</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <div>
                <label className="font-retro text-retro-light block mb-1">Email</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-retro-purple">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-retro-black border-2 border-retro-purple px-10 py-2 font-retro text-retro-white focus:outline-none focus:ring-2 focus:ring-retro-pink rounded-pixel"
                    placeholder="player@pixelparadise.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="font-retro text-retro-light block mb-1">Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-retro-purple">
                    <Lock size={18} />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-retro-black border-2 border-retro-purple px-10 py-2 font-retro text-retro-white focus:outline-none focus:ring-2 focus:ring-retro-pink rounded-pixel"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-retro-purple hover:text-retro-pink"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <PixelButton
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                className="mt-6"
              >
                {isLogin ? 'Login' : 'Create Account'}
              </PixelButton>
            </form>
            
            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="font-retro text-retro-pink hover:text-retro-green transition-colors"
              >
                {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
