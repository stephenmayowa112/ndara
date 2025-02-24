import React, { useState, useEffect } from "react";

interface Slide {
  backgroundImage: string;
  headline: string;
  subtext: string;
}

const slides: Slide[] = [
  {
    backgroundImage: "/hero-bg1.jpg", // replace with your actual image
    headline: "Minimize Cost. Build a great Brand.",
    subtext: "Get a custom business logo design, branding consultation, full branding design and website...",
  },
  {
    backgroundImage: "/hero-bg2.jpg",
    headline: "Another Great Headline",
    subtext: "This is a second slide to demonstrate how it changes smoothly from right to left.",
  },
  // Add more slides if you like
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Automatically change slide every 5 seconds (adjust to your preference)
    const interval = setInterval(() => {
      // Start animation
      setAnimating(true);
      // Wait for animation to finish (700ms matches our animation duration)
      setTimeout(() => {
        setAnimating(false);
        // Move to next slide
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 700);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { backgroundImage, headline, subtext } = slides[currentSlide];

  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Slide overlay for text */}
      <div
        className={`
          max-w-3xl p-4 bg-white bg-opacity-70 
          ${animating ? "animate-slideInRight" : ""}
        `}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
          {headline}
        </h1>
        <p className="text-gray-700 mb-4">{subtext}</p>
        <button className="bg-ndaraGreen text-white py-2 px-6 rounded hover:bg-green-900 transition">
          Join the waitlist
        </button>
      </div>
    </section>
  );
};

export default Hero;
