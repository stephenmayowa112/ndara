// app/pages/contact/page.tsx
'use client';

import Layout from '../Layout';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    brandName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl text-[#43503F] font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-[#43503F] mb-12">
            Let&apos;s talk about how we can work together
          </p>
          
          <div className="bg-[#43503F] rounded-lg p-8 max-w-md mx-auto text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-0 py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none"
                  required
                />
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  id="brandName"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleChange}
                  placeholder="Brand Name"
                  className="w-full px-0 py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none"
                  required
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-0 py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none"
                  required
                />
              </div>
              
              <div className="relative mt-10">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={3}
                  className="w-full px-0 py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none resize-none"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  className="px-10 py-2 bg-white text-[#43503F] font-bold rounded-md hover:bg-gray-100 transition-colors"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;