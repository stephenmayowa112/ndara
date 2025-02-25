// pages/projects.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../Layout';

// Project type definition
type Project = {
  id: number;
  title: string;
  image: string;
  category: string;
};

const Projects: NextPage = () => {
  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "3D Character Animation",
      image: "/images/3d_animation.png",
      category: "3D Animation"
    },
    {
      id: 2,
      title: "Modern Cafe Design",
      image: "/images/cafe.png",
      category: "Architectural Design"
    },
    {
      id: 3,
      title: "Electronic Device Mockup",
      image: "/images/image_4.png",
      category: "Product Design"
    },
    {
      id: 4,
      title: "Urban Architecture Concept",
      image: "/images/roof.png",
      category: "Architectural Design"
    },
    {
      id: 5,
      title: "Avatar Characters Set",
      image: "/images/explainer_vid.png",
      category: "2D Animation"
    },
    {
      id: 6,
      title: "Debonairs Pizza Branding",
      image: "/images/pizza.png",
      category: "Branding"
    },
  ];

  return (
    <>
      <Head>
        <title>Our Projects | Ndara Studios</title>
        <meta name="description" content="View the portfolio of projects from Ndara Studios, a London-based design studio specializing in 3D animation, architectural design, and branding." />
      </Head>
      <Layout>
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl text-[#43503F] font-medium mt-10 mb-12">View our Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg cursor-pointer h-[300px]">
                <div className="relative w-full h-full overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-[#43503F] bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <p className="mt-2">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;