// components/LogosCarousel.tsx
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const LogosCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let startTime: number | null = null;
    const speed = 0.2; // pixels per millisecond
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Move the carousel
      const pixelsToMove = elapsed * speed;
      container.scrollLeft = pixelsToMove % (container.scrollWidth - container.clientWidth);
      
      // Continue animation
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        
        
        {/* Carousel container with 3/4 width */}
        <div className="relative w-3/4 mx-auto">
          {/* Gradient mask for left side */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div 
            ref={containerRef}
            className="flex overflow-x-scroll scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Double the logos to create a seamless loop */}
            <div className="flex space-x-16 px-10 min-w-max">
              {/* NHS Logo */}
              <div className="flex items-center justify-center h-20 w-32">
                <Image
                  src="/images/NHS-logo.png"
                  alt="NHS"
                  width={100}
                  height={40}
                  objectFit="contain"
                />
              </div>
              
              {/* Red Circle Logo */}
              <div className="flex items-center justify-center h-20 w-24">
                <Image
                  src="/images/curaboard.png"
                  alt="Company Logo"
                  width={60}
                  height={60}
                  objectFit="contain"
                />
              </div>
              
              {/* Debonairs Pizza Logo */}
              <div className="flex items-center justify-center h-20 w-32">
                <Image
                  src="/images/debonair.png"
                  alt="Debonairs Pizza"
                  width={80}
                  height={60}
                  objectFit="contain"
                />
              </div>
              
              {/* Interlude Logo */}
              <div className="flex items-center justify-center h-20 w-32">
                <Image
                  src="/images/curaboard.png"
                  alt="Interlude"
                  width={80}
                  height={60}
                  objectFit="contain"
                />
              </div>
              
              {/* Findr Logo */}
              <div className="flex items-center justify-center h-20 w-32">
                <Image
                  src="/images/Findr_logo.png"
                  alt="Findr"
                  width={80}
                  height={40}
                  objectFit="contain"
                />
              </div>
            </div>
            
            {/* Duplicate logos for seamless looping */}
            <div className="flex space-x-16 px-10 min-w-max">
              {/* NHS Logo */}
              <div className="flex items-center justify-center h-20 w-32">
                <Image
                  src="/images/Findr_logo.png"
                  alt="NHS"
                  width={100}
                  height={40}
                  objectFit="contain"
                />
              </div>
              
              {/* Red Circle Logo */}
              <div className="flex items-center justify-center h-20 w-24">
                <Image
                  src="/images/curaboard.png"
                  alt="Company Logo"
                  width={60}
                  height={60}
                  objectFit="contain"
                />
              </div>
              
              {/* Debonairs Pizza Logo */}
              <div className="flex items-center justify-center h-20 w-32">
                <Image
                  src="/images/debonair.png"
                  alt="Debonairs Pizza"
                  width={80}
                  height={60}
                  objectFit="contain"
                />
              </div>
              
              {/* Interlude Logo */}
              <div className="flex items-center justify-center h-20 w-32">
                <Image
                  src="/images/interlude_logo.png"
                  alt="Interlude"
                  width={80}
                  height={60}
                  objectFit="contain"
                />
              </div>
              
              {/* Findr Logo */}
              <div className="flex items-center justify-center h-20 w-32">
                <Image
                  src="/images/Findr_logo.png"
                  alt="Findr"
                  width={80}
                  height={40}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          
          {/* Gradient mask for right side */}
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosCarousel;