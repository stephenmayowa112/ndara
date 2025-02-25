// app/services/page.tsx
'use client';

import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

// Service type definition
type Service = {
  title: string;
  description: string;
  image: string;
};

const ServicesPage = () => {
  // Services data
  const services: Service[] = [
    {
      title: "3D ANIMATION",
      description: "We provide 3D animation for movies, TV shows, commercials or games.",
      image: "/images/services/3d_animation.jpg"
    },
    {
      title: "2D ANIMATION",
      description: "We'll help you create dynamic, animated content for your campaigns, logos, characters, and more.",
      image: "/images/services/2d_animation.jpg"
    },
    {
      title: "ARCHITECTURAL DESIGN",
      description: "Need to visualize your architecture project? We can beautifully tell your story with realistic renderings and visualizations.",
      image: "/images/services/architectural_design.jpg"
    },
    {
      title: "PRODUCT DESIGN",
      description: "