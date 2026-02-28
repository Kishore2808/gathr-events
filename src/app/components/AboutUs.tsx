import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback'; // Using the recommended image component

const team = [
  {
    name: "Alexander Voss",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMHN1aXQlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzIyNjkyODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "A visionary with a passion for creating unforgettable experiences."
  },
  {
    name: "Elena Richardson",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcyMjY5MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "Crafting spaces that resonate with elegance and style."
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1750741268857-7e44510f867d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMGJ1c2luZXNzJTIwY2FzdWFsfGVufDF8fHx8MTc3MjIwNTg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "Ensuring seamless execution for every event."
  }
];

export function AboutUs() {
  return (
    <section className="py-24 bg-[#F8F4ED]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#7A1F2B] mb-4">The Visionaries</h2>
          <p className="text-xl font-['Lato'] text-[#1E1E1E] max-w-3xl mx-auto">Meet the team dedicated to bringing your dream events to life with precision and passion.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative text-center"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#C9A227] shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-['Playfair_Display'] font-semibold text-[#1E1E1E] mb-2">{member.name}</h3>
              <p className="text-[#7A1F2B] font-['Lato'] font-bold text-sm uppercase tracking-widest mb-3">{member.role}</p>
              <p className="text-gray-600 font-['Lato'] px-4">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
