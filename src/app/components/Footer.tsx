import React from 'react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-[#F8F4ED] py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-8">Ready to Host Your Next Event?</h2>
        <p className="text-xl font-['Lato'] text-gray-400 mb-10 max-w-2xl mx-auto">
          Join thousands of event planners who trust VenuX for their most important occasions.
        </p>
        
        <Link 
          to="/login" 
          className="inline-block px-10 py-4 bg-[#C9A227] text-[#1E1E1E] font-bold rounded-full shadow-xl hover:bg-[#B08D22] hover:scale-105 transform transition-all duration-300 mb-16"
        >
          Get Started Now
        </Link>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-['Lato']">
          <p>&copy; {new Date().getFullYear()} VenuX. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#C9A227] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C9A227] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#C9A227] transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
