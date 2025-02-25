// app/pages/waitlist/page.tsx
'use client';

import Layout from '../pages/Layout';
import { useState } from 'react';

const WaitlistPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    about: '',
    stage: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - this would connect to your backend
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <Layout>
      <div className="w-full min-h-screen bg-white pt-24 md:pt-0">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl text-[#43503F] font-bold mb-6">
                Join the waitlist
              </h1>
              <p className="text-xl text-[#43503F] mb-8">
                We&apos;re Launching! Exclusive Branding Bundle for Just £600 for only 20 spots!
              </p>
              <p className="text-lg text-[#43503F] mb-8">
                We&apos;re kicking off our launch with an unbeatable offer for the first 20 businesses ready to build a standout brand!
              </p>
              
              <div className="text-[#43503F] mb-8">
                <p className="mb-4">For just £600, you get everything you need to launch with confidence:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Custom Logo Design – A professional, one-of-a-kind logo.</li>
                  <li>Branding Consultation – Expert guidance to craft a powerful brand identity.</li>
                  <li>Full Branding Design – Cohesive visuals that make you instantly recognizable.</li>
                  <li>Website with Custom Domain (1 Year) – A sleek, high-performing site + your own domain.</li>
                </ol>
              </div>
              
              <div className="text-[#43503F] mb-8">
                <p className="font-bold">This is a limited-time launch offer – once 20 spots are filled, it&apos;s gone!</p>
                <p>Don&apos;t miss out on this exclusive deal! Secure your spot now and set your brand up for success.</p>
              </div>
              
              <p className="text-lg text-[#43503F] font-medium">
                Join the waitlist today – First come, first served
              </p>
            </div>
            
            {/* Right Column - Form */}
            <div className="bg-white rounded-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#43503F] mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43503F]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#43503F] mb-2">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="xyz@xyz.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43503F]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="contact" className="block text-[#43503F] mb-2">Contact number</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="+44"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43503F]"
                  />
                </div>
                
                <div>
                  <label htmlFor="about" className="block text-[#43503F] mb-2">About company</label>
                  <textarea
                    id="about"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43503F]"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="stage" className="block text-[#43503F] mb-2">Stage of business</label>
                  <select
                    id="stage"
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43503F]"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="idea">Idea Stage</option>
                    <option value="startup">Startup</option>
                    <option value="established">Established Business</option>
                    <option value="growing">Growing Business</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-[#43503F] text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WaitlistPage;