
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { User, ShoppingCart, Coins, LogIn } from 'lucide-react';

const AnimatedNavigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="relative w-full">
      {/* Animated background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-retro-black opacity-20 z-0" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(107,70,193,0.2) 0%, rgba(0,0,0,0) 70%)`,
            animation: 'pulse 8s infinite ease-in-out'
          }}
        />
        <div className="grid grid-cols-12 gap-4 w-full h-full opacity-10">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} 
              className="w-1 h-1 bg-retro-purple rounded-full absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pixel-float ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main Navigation */}
      <NavigationMenu className="relative z-10 mx-auto">
        <NavigationMenuList className="gap-1 md:gap-6">
          <NavigationMenuItem>
            <Link to="/">
              <div className={`
                ${navigationMenuTriggerStyle()} 
                ${isActive('/') ? 'bg-retro-purple text-retro-white' : ''}
                group transition-all duration-300 hover:bg-retro-purple hover:text-retro-white
              `}>
                <span className="mr-1">Home</span>
                <span className="h-1 w-0 bg-retro-yellow group-hover:w-full transition-all duration-300 absolute bottom-1 left-0"></span>
              </div>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/collection">
              <div className={`
                ${navigationMenuTriggerStyle()} 
                ${isActive('/collection') ? 'bg-retro-purple text-retro-white' : ''}
                group transition-all duration-300 hover:bg-retro-purple hover:text-retro-white
              `}>
                <span className="mr-1">Collection</span>
                <span className="h-1 w-0 bg-retro-yellow group-hover:w-full transition-all duration-300 absolute bottom-1 left-0"></span>
              </div>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/marketplace">
              <div className={`
                ${navigationMenuTriggerStyle()} 
                ${isActive('/marketplace') ? 'bg-retro-purple text-retro-white' : ''}
                group transition-all duration-300 hover:bg-retro-purple hover:text-retro-white
              `}>
                <span className="mr-1">Marketplace</span>
                <span className="h-1 w-0 bg-retro-yellow group-hover:w-full transition-all duration-300 absolute bottom-1 left-0"></span>
              </div>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/about">
              <div className={`
                ${navigationMenuTriggerStyle()} 
                ${isActive('/about') ? 'bg-retro-purple text-retro-white' : ''}
                group transition-all duration-300 hover:bg-retro-purple hover:text-retro-white
              `}>
                <span className="mr-1">About</span>
                <span className="h-1 w-0 bg-retro-yellow group-hover:w-full transition-all duration-300 absolute bottom-1 left-0"></span>
              </div>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default AnimatedNavigation;
