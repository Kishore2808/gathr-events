import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1E1E1E] shadow-xl py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-['Playfair_Display'] font-bold text-[#F8F4ED]">
          Venu<span className="text-[#C9A227]">X</span>
        </Link>
        
        <Link 
          to="/login" 
          className="bg-[#C9A227] hover:bg-[#B08D22] text-[#1E1E1E] px-6 py-2 rounded-full font-['Lato'] font-bold transition-all duration-300 shadow-lg hover:shadow-[#C9A227]/50"
        >
          Get Started
        </Link>
      </div>
    </motion.nav>
  );
}
