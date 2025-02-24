// components/HeroSection.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//the structure for each slide
type SlideContent = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

const HeroSection = () => {
  // State for the active slide index
  const [activeSlide, setActiveSlide] = useState(0);
  // State for menu open/closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the slide content
  const slides: SlideContent[] = [
    {
      id: 1,
      title: "Ndara Studios is a design studio based in London.",
      subtitle: "",
      image: "/images/image_2.png", 
      alt: "Organic white architectural structure"
    },
    {
      id: 2,
      title: "We offer innovative digital content like Animations, Branding, Motion graphics, and more",
      subtitle: "to tell compelling brand stories.",
      image: "/images/image_3.png", 
      alt: "3D animated character with fish"
    },
    {
      id: 3,
      title: "At Ndara Studios, we help brands find and tell their best stories.",
      subtitle: "",
      image: "/images/image_4.png", 
      alt: "Electronic device with circuit board"
    },
    {
      id: 4,
      title: "We work for big & small non-stoppable visionaries.",
      subtitle: "",
      image: "/images/image_5.png", 
      alt: "Modern abstract architecture"
    },
  ];

  // Auto-rotate slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Logo and Menu Button */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-30">
        {/* Logo */}
        <div className="flex items-center">
          <div className="mr-2">
            <svg width="35" height="20" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H10L20 10L10 20H0L10 10L0 0Z" fill="#43503F"/>
              <path d="M15 0H25L35 10L25 20H15L25 10L15 0Z" fill="#43503F"/>
            </svg>
          </div>
          <div className="text-[#43503F] text-lg font-medium tracking-wider">NDARA STUDIOS</div>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="text-[#43503F] focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            // X icon when menu is open
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Main Hero Content */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Text Content (Left Side) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 z-10">
          <h1 className="text-[#43503F] text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
            {slides[activeSlide].title}
          </h1>
          {slides[activeSlide].subtitle && (
            <p className="text-[#43503F] text-xl md:text-2xl lg:text-3xl font-medium">
              {slides[activeSlide].subtitle}
            </p>
          )}
        </div>
        
        {/* Image Content (Right Side) */}
        <div className="w-full md:w-1/2 h-screen relative">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
        <Link href="#" aria-label="Facebook">
          <div className="text-[#43503F] hover:text-opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </div>
        </Link>
        <Link href="#" aria-label="Instagram">
          <div className="text-[#43503F] hover:text-opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        </Link>
        <Link href="#" aria-label="LinkedIn">
          <div className="text-[#43503F] hover:text-opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </div>
        </Link>
        <Link href="#" aria-label="Twitter">
          <div className="text-[#43503F] hover:text-opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </div>
        </Link>
        <Link href="#" aria-label="TikTok">
          <div className="text-[#43503F] hover:text-opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </div>
        </Link>
        <Link href="#" aria-label="YouTube">
          <div className="text-[#43503F] hover:text-opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </div>
        </Link>
      </div>

      {/* Chat Button */}
      <div className="fixed right-6 bottom-6 z-20">
        <button className="bg-[#43503F] hover:bg-opacity-90 text-white px-4 py-2 rounded-lg flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
          Let's Chat
        </button>
      </div>

      {/* Navigation Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#43503F] transition-transform duration-500 ease-in-out transform z-40 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full text-white space-y-6 text-xl">
          <Link href="#" className="hover:text-gray-300 transition-colors">Wait-List</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Projects</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Services</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">About Us</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;