
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Gamepad2, Coins, User, ShoppingCart, LogIn, Sparkles } from 'lucide-react';
import AnimatedNavigation from './AnimatedNavigation';
import { useToast } from '@/components/ui/use-toast';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLoginClick = () => {
    navigate('/auth');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className={`py-4 border-b-4 border-retro-black sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-retro-black/95 backdrop-blur-sm' : 'bg-retro-black'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-retro-purple p-1 rounded-pixel shine-effect group-hover:rotate-12 transition-transform duration-300">
                <Gamepad2 className="text-retro-black w-full h-full animate-pixel-pulse" />
              </div>
              <div className="font-pixel text-retro-white text-xl group-hover:tracking-wider transition-all duration-300 relative">
                RETRO 
                <span className="inline-block text-retro-yellow animate-pixel-pulse">ARCADE</span>
                <div className="absolute -inset-1 bg-retro-purple opacity-20 blur-sm rounded-full animate-pulse"></div>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-5">
              <Link to="/collection" className="relative group">
                <span className="font-pixel text-retro-white group-hover:text-retro-pink transition-colors duration-300">COLLECTION</span>
                <span className="absolute -inset-1 bg-retro-blue opacity-0 group-hover:opacity-20 blur-sm rounded-full transition-opacity duration-300"></span>
              </Link>
              
              <Link to="/marketplace" className="relative group">
                <span className="font-pixel text-retro-white group-hover:text-retro-green transition-colors duration-300">MARKETPLACE</span>
                <span className="absolute -inset-1 bg-retro-green opacity-0 group-hover:opacity-20 blur-sm rounded-full transition-opacity duration-300"></span>
              </Link>
              
              <Link to="/about" className="relative group">
                <span className="font-pixel text-retro-white group-hover:text-retro-yellow transition-colors duration-300">ABOUT</span>
                <span className="absolute -inset-1 bg-retro-yellow opacity-0 group-hover:opacity-20 blur-sm rounded-full transition-opacity duration-300"></span>
              </Link>
            </div>
            
            <div className="md:hidden">
              <AnimatedNavigation />
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 relative bg-retro-blue rounded-pixel hover:bg-retro-pink transition-colors shine-effect animate-pixel-float">
                <Coins className="w-5 h-5 text-retro-white" />
                <span className="absolute -top-2 -right-2 bg-retro-yellow text-retro-black font-pixel text-xs w-5 h-5 flex items-center justify-center rounded-full">8</span>
                <div className="absolute inset-0 bg-retro-blue opacity-30 blur-sm rounded-pixel animate-pulse"></div>
              </button>
              
              <button 
                className="p-2 relative bg-retro-blue rounded-pixel hover:bg-retro-pink transition-colors shine-effect"
                onClick={() => {
                  toast({
                    title: "Cart",
                    description: "Your cart has 3 items",
                  });
                }}
              >
                <ShoppingCart className="w-5 h-5 text-retro-white" />
                <span className="absolute -top-2 -right-2 bg-retro-yellow text-retro-black font-pixel text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pixel-pulse">3</span>
                <div className="absolute inset-0 bg-retro-blue opacity-30 blur-sm rounded-pixel animate-pulse"></div>
              </button>
              
              {isLoggedIn ? (
                <Link to="/profile" className="p-2 bg-retro-green rounded-pixel hover:bg-retro-pink transition-colors shine-effect relative">
                  <User className="w-5 h-5 text-retro-white" />
                  <div className="absolute inset-0 bg-retro-green opacity-30 blur-sm rounded-pixel animate-pulse"></div>
                </Link>
              ) : (
                <button 
                  className="flex items-center gap-2 px-3 py-2 bg-retro-green rounded-pixel hover:bg-retro-pink transition-colors shine-effect relative group"
                  onClick={handleLoginClick}
                >
                  <LogIn className="w-4 h-4 text-retro-white" />
                  <span className="font-retro text-retro-white">Login</span>
                  <Sparkles className="absolute top-0 right-0 w-3 h-3 text-retro-yellow opacity-0 group-hover:opacity-100 transition-opacity animate-pixel-pulse" />
                  <div className="absolute inset-0 bg-retro-green opacity-30 blur-sm rounded-pixel animate-pulse"></div>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8 relative">
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-none bg-retro-purple"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.15,
                boxShadow: '0 0 10px 2px rgba(107, 70, 193, 0.6)',
                animation: `pixel-float ${3 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        {children}
      </main>
      
      <footer className="bg-retro-black py-6 border-t-4 border-retro-purple relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
            <p className="font-retro text-retro-light text-lg">&copy; 2025 Retro Arcade. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/terms" className="font-retro text-retro-light hover:text-retro-pink transition-colors">Terms</Link>
              <Link to="/privacy" className="font-retro text-retro-light hover:text-retro-pink transition-colors">Privacy</Link>
              <Link to="/contact" className="font-retro text-retro-light hover:text-retro-pink transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-10 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i}
              className="w-full h-full bg-retro-purple"
              style={{
                gridColumn: `${Math.floor(Math.random() * 12) + 1} / span 1`,
                gridRow: `${Math.floor(Math.random() * 6) + 1} / span 1`,
                animation: `pixel-pulse ${2 + Math.random() * 3}s infinite ease-in-out ${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
