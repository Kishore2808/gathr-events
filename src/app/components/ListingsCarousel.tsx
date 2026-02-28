import React from 'react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const venues = [
  {
    id: 1,
    name: "The Grand Ballroom",
    location: "Downtown Metropolis",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1763231575952-98244918f99b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYW5xdWV0JTIwaGFsbCUyMGludGVyaW9yJTIwY2hhbmRlbGllcnxlbnwxfHx8fDE3NzIyNjkyODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$$$$"
  },
  {
    id: 2,
    name: "Azure Rooftop Lounge",
    location: "Skyline District",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1723119787969-954b056bcd0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByb29mdG9wJTIwbG91bmdlJTIwYmFyfGVufDF8fHx8MTc3MjI2OTI4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$$$"
  },
  {
    id: 3,
    name: "Emerald Garden Estate",
    location: "Countryside",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1764380745709-0f427f6d26b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWRkaW5nJTIwdmVudWUlMjBvdXRkb29yJTIwZXZlbmluZ3xlbnwxfHx8fDE3NzIyNjkyODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$$$$$"
  },
  {
    id: 4,
    name: "Tech Hub Auditorium",
    location: "Innovation Park",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1549807315-f5fa45619e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY29uZmVyZW5jZSUyMHJvb218ZW58MXx8fHwxNzcyMjY5MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$$$"
  }
];

export function ListingsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-24 bg-[#1E1E1E] text-[#F8F4ED]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#C9A227] mb-4">Most Loved Venues</h2>
          <p className="text-xl font-['Lato'] max-w-2xl mx-auto text-gray-400">Handpicked selections that our community adores.</p>
        </motion.div>
        
        <Slider {...settings} className="listings-slider">
          {venues.map((venue) => (
            <div key={venue.id} className="px-4">
              <div className="bg-[#2A2A2A] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img src={venue.image} alt={venue.name} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-['Playfair_Display'] font-bold text-[#F8F4ED]">{venue.name}</h3>
                    <span className="bg-[#C9A227] text-[#1E1E1E] text-xs font-bold px-2 py-1 rounded">{venue.rating} ★</span>
                  </div>
                  <p className="text-gray-400 font-['Lato'] text-sm mb-4">{venue.location}</p>
                  <div className="flex justify-between items-center mt-4 border-t border-gray-700 pt-4">
                     <span className="text-[#C9A227] font-bold">{venue.price}</span>
                     <button className="text-[#F8F4ED] text-sm hover:text-[#C9A227] transition-colors font-semibold uppercase tracking-wide">View Details →</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
