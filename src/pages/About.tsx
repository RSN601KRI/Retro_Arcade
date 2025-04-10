
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import PixelButton from '@/components/PixelButton';
import { Heart, Mail, ExternalLink, Github, Twitter, Youtube, Twitch } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  
  const teamMembers = [
    {
      name: 'Alex Pixel',
      role: 'Founder & Lead Artist',
      avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Alex',
      bio: 'Retro gaming enthusiast with a passion for pixel art and collectibles.'
    },
    {
      name: 'Sam Bitwise',
      role: 'Lead Developer',
      avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Sam',
      bio: 'Coding wizard who loves creating nostalgic digital experiences.'
    },
    {
      name: 'Taylor Sprite',
      role: 'Community Manager',
      avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Taylor',
      bio: 'Building bridges between collectors and creators in the pixel art world.'
    },
    {
      name: 'Jordan 8bit',
      role: 'Marketing Director',
      avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Jordan',
      bio: 'Spreading the word about pixel collectibles to new communities.'
    }
  ];
  
  const faqItems = [
    {
      question: 'What is Pixel Paradise?',
      answer: 'Pixel Paradise is a platform dedicated to collecting, trading, and celebrating pixel art and retro-style digital collectibles. We offer a marketplace for artists and collectors to connect and share their passion for pixel-perfect treasures.'
    },
    {
      question: 'How do I start collecting?',
      answer: 'To start collecting, create an account and browse our marketplace. You can purchase items using BITS, our platform currency. Once purchased, items will appear in your collection and can be showcased on your profile.'
    },
    {
      question: 'Can I sell my own pixel art?',
      answer: 'Yes! We welcome artists to join our community. After creating an account, you can apply to become a verified creator and start listing your pixel artworks in the marketplace.'
    },
    {
      question: 'What makes an item rare?',
      answer: 'Items in Pixel Paradise are assigned rarity levels (common, uncommon, rare, epic, legendary) based on their limited availability, artistic complexity, and cultural significance in the pixel art world.'
    },
    {
      question: 'How do I earn BITS?',
      answer: 'You can earn BITS by participating in community challenges, selling items in the marketplace, or purchasing them directly through our platform.'
    }
  ];
  
  return (
    <Layout>
      <div className="space-y-16 animate-pixel-fade">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-pixel text-3xl text-retro-white mb-4">ABOUT PIXEL PARADISE</h1>
            <p className="font-retro text-xl text-retro-light max-w-3xl mx-auto mb-8">
              A digital realm where pixel art comes to life and collectors can discover unique treasures from the retro universe.
            </p>
            
            <div className="relative w-full h-60 sm:h-80 md:h-96 pixel-borders overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-retro-purple via-retro-blue to-retro-pink opacity-30 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                alt="Pixel Paradise" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Animated pixelated overlay */}
              <div className="absolute inset-0 z-0">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute bg-retro-purple"
                    style={{
                      top: `${Math.floor(Math.random() * 100)}%`,
                      left: `${Math.floor(Math.random() * 100)}%`,
                      width: '4px',
                      height: '4px',
                      opacity: Math.random() * 0.5 + 0.2,
                      animation: `pixel-float ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-retro-dark p-6 pixel-borders">
                <h2 className="font-pixel text-lg text-retro-white mb-2">OUR MISSION</h2>
                <p className="font-retro text-retro-light">To preserve and celebrate pixel art culture by creating a thriving community for collectors and creators.</p>
              </div>
              <div className="bg-retro-dark p-6 pixel-borders">
                <h2 className="font-pixel text-lg text-retro-white mb-2">OUR VISION</h2>
                <p className="font-retro text-retro-light">To become the premier destination for pixel art collectibles and retro-inspired digital treasures.</p>
              </div>
              <div className="bg-retro-dark p-6 pixel-borders">
                <h2 className="font-pixel text-lg text-retro-white mb-2">OUR VALUES</h2>
                <p className="font-retro text-retro-light">Creativity, community, nostalgia, and a passion for pixel-perfect artistry in all we do.</p>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Team Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-pixel text-2xl text-retro-white text-center mb-8">MEET THE TEAM</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-retro-dark p-6 pixel-borders text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-retro-purple">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback className="bg-retro-purple">{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  
                  <h3 className="font-pixel text-lg text-retro-white mb-1">{member.name}</h3>
                  <p className="font-retro text-retro-purple mb-3">{member.role}</p>
                  <p className="font-retro text-retro-light text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* FAQ Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-pixel text-2xl text-retro-white text-center mb-8">FREQUENTLY ASKED QUESTIONS</h2>
            
            <div className="space-y-4 max-w-3xl mx-auto mb-8">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-retro-dark p-6 pixel-borders"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <h3 className="font-pixel text-lg text-retro-white mb-2">{item.question}</h3>
                  <p className="font-retro text-retro-light">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* Contact Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-retro-dark p-8 pixel-borders text-center"
          >
            <h2 className="font-pixel text-2xl text-retro-white mb-4">GET IN TOUCH</h2>
            <p className="font-retro text-retro-light mb-6 max-w-2xl mx-auto">
              Have questions, suggestions, or just want to chat about pixel art? We'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <PixelButton 
                variant="primary" 
                size="lg"
                className="flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" /> Contact Us
              </PixelButton>
              
              <PixelButton 
                variant="secondary" 
                size="lg"
                className="flex items-center justify-center gap-2"
                onClick={() => navigate('/marketplace')}
              >
                <ExternalLink className="w-5 h-5" /> Visit Marketplace
              </PixelButton>
            </div>
            
            <div className="flex justify-center gap-6">
              <a href="#" className="text-retro-light hover:text-retro-pink transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-retro-light hover:text-retro-pink transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-retro-light hover:text-retro-pink transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-retro-light hover:text-retro-pink transition-colors">
                <Twitch className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </section>
        
        {/* Call to Action */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="font-pixel text-2xl text-retro-white mb-4">JOIN THE PIXEL REVOLUTION</h2>
            <p className="font-retro text-xl text-retro-light mb-6 max-w-2xl mx-auto">
              Be part of our growing community of pixel enthusiasts and collectors.
            </p>
            
            <PixelButton 
              variant="success" 
              size="lg" 
              className="flex items-center mx-auto gap-2 animate-pixel-pulse"
              onClick={() => navigate('/auth')}
            >
              <Heart className="w-5 h-5" /> Join Now
            </PixelButton>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
