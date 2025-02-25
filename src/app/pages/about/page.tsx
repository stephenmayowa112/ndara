// app/pages/about/page.tsx
'use client';

import Layout from '../Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="w-full min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
          <div className="mb-24">
            <h1 className="text-5xl md:text-6xl text-[#43503F] font-bold mb-6">
              About Us
            </h1>
            <p className="text-lg text-[#43503F] max-w-3xl">
              We Support Clients Across Various Industries From Agriculture, Banking, And Health,
              To Logistics And Insurance. Our Experience Spans Across All Facets Of Marketing
              And Advertising And We Work At The Intersection Of Creativity And Technology.
            </p>
          </div>
          
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl text-[#43503F] font-bold mb-6">
              Our Clients
            </h2>
            <p className="text-lg text-[#43503F] max-w-3xl mb-6">
              At NDARA STUDIOS, We're Proud To Have Worked With A Diverse Range Of Clients
              Across Various Industries. Our Team Of Experts Is Dedicated To Creating Impactful
              Campaigns That Drive Results For Your Business.
            </p>
            <p className="text-lg text-[#43503F] max-w-3xl">
              We Are Very Proud Of The Great Testimonials From Our Clients And How We Were
              Able To Help Them Achieve Their Goals.
            </p>
          </div>
          
          {/* This could be expanded with a client logos section or testimonials */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Client testimonials or case studies could go here */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;