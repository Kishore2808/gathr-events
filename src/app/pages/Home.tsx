import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, Star, MapPin, Users, Calendar, Menu, X } from "lucide-react";

// --- Colors ---
// Deep Maroon: #7A1F2B
// Warm Gold: #C9A227
// Ivory / Off White: #F8F4ED
// Charcoal: #1E1E1E

// --- Fonts ---
// Serif: font-serif (Playfair Display)
// Sans: font-sans (Lato)

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F4ED]/95 backdrop-blur-md shadow-md py-4 text-[#1E1E1E]"
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-50">
           <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${isScrolled ? "border-[#7A1F2B] text-[#7A1F2B]" : "border-[#C9A227] text-[#C9A227]"}`}>
              <span className="font-serif font-bold text-xl">G</span>
           </div>
           <span className={`font-serif font-bold text-2xl tracking-wide ${isScrolled ? "text-[#7A1F2B]" : "text-white"}`}>
             GATHR
           </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Venues", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide hover:text-[#C9A227] transition-colors ${
                isScrolled ? "text-[#1E1E1E]" : "text-gray-200"
              }`}
            >
              {item.toUpperCase()}
            </a>
          ))}
          <Link
            to="/login"
            className="px-6 py-2.5 rounded-full bg-[#C9A227] text-white font-medium text-sm tracking-wide shadow-lg hover:bg-[#7A1F2B] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className={isScrolled ? "text-[#1E1E1E]" : "text-white"} /> : <Menu className={isScrolled ? "text-[#1E1E1E]" : "text-white"} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#7A1F2B] z-40 flex flex-col items-center justify-center space-y-8">
             {["Venues", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl font-serif"
            >
              {item}
            </a>
          ))}
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-3 rounded-full bg-[#C9A227] text-white font-medium text-lg shadow-lg"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1763231575952-98244918f99b?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury Hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1E1E1E]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 border border-[#C9A227]/50 rounded-full text-[#C9A227] text-xs font-bold tracking-[0.2em] mb-6 backdrop-blur-sm">
            PREMIUM VENUE BOOKING
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#F8F4ED] font-bold leading-tight mb-8">
            Curated Spaces for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#F1D682]">
              Timeless Moments
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Discover and book the world's most exclusive venues for weddings, corporate galas, and private celebrations. Experience luxury without compromise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="px-8 py-4 bg-[#C9A227] text-white rounded-full font-medium tracking-wide shadow-[0_4px_14px_0_rgba(201,162,39,0.39)] hover:shadow-[0_6px_20px_rgba(201,162,39,0.23)] hover:bg-[#B08D22] transition-all duration-300"
            >
              Explore Venues
            </Link>
            <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium tracking-wide hover:bg-white/10 transition-all duration-300">
              Our Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9A227] to-transparent"></div>
      </motion.div>
    </div>
  );
};

const AboutSection = () => {
  const team = [
    {
      name: "Alexander Vance",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Eleanor Sterling",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Julian Thorne",
      role: "Director of Events",
      image: "https://images.unsplash.com/photo-1750741268857-7e44510f867d?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F4ED] text-[#1E1E1E]" id="about">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#C9A227] font-bold tracking-widest text-sm mb-4 uppercase">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#7A1F2B] mb-6 leading-tight">
              Crafting Experiences Beyond Expectations
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Gathr, we believe that the perfect venue is the canvas upon which life's most beautiful memories are painted. Founded in 2024, our mission has been to curate a collection of the most exquisite spaces, making luxury accessible and booking seamless.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We connect discerning clients with architectural marvels, historic estates, and modern sanctuaries. Our team of experts ensures that every detail, from the ambiance to the acoustics, meets our rigorous standards of excellence.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="block text-3xl font-serif text-[#7A1F2B] font-bold">500+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Venues</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-[#7A1F2B] font-bold">12k+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Events Hosted</span>
              </div>
            </div>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
             <div className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden relative z-10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1549807315-f5fa45619e33?q=80&w=800&auto=format&fit=crop" alt="Conference Hall" className="w-full h-full object-cover" />
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#C9A227] rounded-lg -z-0 opacity-40"></div>
          </motion.div>
        </div>

        {/* Team */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-serif font-bold text-[#1E1E1E] mb-4">Meet The Minds</h3>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg">
                <div className="aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F2B]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white/90 text-sm italic">"Luxury is in each detail."</p>
                </div>
              </div>
              <h4 className="text-xl font-serif font-bold text-[#1E1E1E]">{member.name}</h4>
              <p className="text-[#C9A227] font-medium text-sm tracking-wide uppercase">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VenueCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const venues = [
    {
      id: 1,
      title: "The Grand Obsidian",
      location: "Manhattan, NY",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1723119787969-954b056bcd0b?q=80&w=800&auto=format&fit=crop",
      tag: "Most Loved",
      price: "$5,000 / day"
    },
    {
      id: 2,
      title: "Château de Lumière",
      location: "Provence, France",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1764380745709-0f427f6d26b2?q=80&w=800&auto=format&fit=crop",
      tag: "Trending",
      price: "$12,000 / day"
    },
    {
      id: 3,
      title: "Sapphire Ballroom",
      location: "Dubai, UAE",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1549807315-f5fa45619e33?q=80&w=800&auto=format&fit=crop",
      tag: "Corporate Choice",
      price: "$8,500 / day"
    },
    {
      id: 4,
      title: "Skyline Loft",
      location: "Chicago, IL",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1763231575952-98244918f99b?q=80&w=800&auto=format&fit=crop",
      tag: "Modern",
      price: "$4,200 / day"
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
             <h2 className="text-[#C9A227] font-bold tracking-widest text-sm mb-4 uppercase">Curated Collection</h2>
             <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#7A1F2B] mb-2">Most Loved Venues</h3>
             <p className="text-gray-500">Handpicked selections that our community adores.</p>
          </div>
          <Link to="/login" className="hidden md:flex items-center gap-2 text-[#7A1F2B] font-medium hover:text-[#C9A227] transition-colors">
            View All Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="-mx-4 pb-12">
          <Slider {...settings}>
            {venues.map((venue) => (
              <div key={venue.id} className="px-4 py-4">
                <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden group hover:shadow-[0_20px_60px_-15px_rgba(122,31,43,0.15)] transition-all duration-300 border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={venue.image}
                      alt={venue.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7A1F2B] rounded-sm">
                      {venue.tag}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#1E1E1E]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {venue.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif font-bold text-[#1E1E1E] group-hover:text-[#7A1F2B] transition-colors">
                        {venue.title}
                      </h4>
                      <div className="flex items-center gap-1 text-[#C9A227]">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-bold">{venue.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                      <MapPin className="w-4 h-4" />
                      {venue.location}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                       <div className="flex gap-4 text-sm text-gray-500">
                           <span className="flex items-center gap-1"><Users className="w-4 h-4"/> 200-500</span>
                           <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> Available</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex justify-center md:hidden">
             <Link to="/login" className="flex items-center gap-2 text-[#7A1F2B] font-medium hover:text-[#C9A227] transition-colors">
                View All Collection <ArrowRight className="w-4 h-4" />
             </Link>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-[#7A1F2B] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
         <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A227] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
         <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-8 left-20 w-64 h-64 bg-[#C9A227] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
          Ready to Host the Extraordinary?
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
          Join thousands of event planners and hosts who trust Gathr for their most important moments.
        </p>
        <Link
          to="/login"
          className="inline-block px-10 py-5 bg-[#C9A227] text-white rounded-full font-bold text-lg shadow-[0_4px_14px_0_rgba(201,162,39,0.5)] hover:bg-white hover:text-[#7A1F2B] hover:shadow-[0_6px_20px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center border border-[#C9A227] text-[#C9A227]">
                    <span className="font-serif font-bold text-sm">G</span>
                </div>
                <span className="font-serif font-bold text-xl tracking-wide">GATHR</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining venue booking with elegance and ease. The premier marketplace for luxury spaces.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-[#C9A227]">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-[#C9A227]">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-[#C9A227]">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates on new exclusive venues.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-gray-700 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-[#C9A227]" />
              <button className="bg-[#C9A227] px-4 py-2 rounded-r-md text-white font-medium hover:bg-[#B08D22] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 Gathr Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#C9A227] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#C9A227] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#C9A227] transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F4ED] font-sans text-[#1E1E1E]">
      <Navbar />
      <Hero />
      <AboutSection />
      <VenueCarousel />
      <CTASection />
      <Footer />
    </div>
  );
}
