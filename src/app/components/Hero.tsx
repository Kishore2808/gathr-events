import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-[#F8F4ED] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1763231575952-98244918f99b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYW5xdWV0JTIwaGFsbCUyMGludGVyaW9yJTIwY2hhbmRlbGllcnxlbnwxfHx8fDE3NzIyNjkyODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')" }}
      >
        <div className="absolute inset-0 bg-[#1E1E1E]/60"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold mb-6 leading-tight"
        >
          Curated Luxury Venues <br /> for Extraordinary Moments
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl font-['Lato'] font-light mb-10 max-w-2xl mx-auto text-gray-200"
        >
          Discover the finest collection of event spaces tailored for elegance and exclusivity.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            to="/login" 
            className="inline-block px-8 py-4 bg-[#C9A227] text-[#1E1E1E] font-['Playfair_Display'] font-bold text-lg rounded-full shadow-lg hover:bg-[#B08D22] transition-colors duration-300 transform hover:-translate-y-1"
          >
            Start Planning
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
