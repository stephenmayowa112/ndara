// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#43503F] text-white">
      <div className="max-w-screen-xl mx-auto px-14 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Let's Work Together Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Let&apos;s Work Together</h2>
            <p className="text-white/90 mb-8 max-w-md">
              We&apos;re always looking for new opportunities and are comfortable
              working internationally. Please get in touch and one of our project
              managers will contact you about beginning the proposal process.
            </p>
            <Link href="pages/contact">
              <span className="inline-block bg-white text-[#43503F] font-medium py-3 px-6 rounded-md hover:bg-white/90 transition-colors cursor-pointer">
                Book a free Consultation
              </span>
            </Link>
          </div>
          
          {/* Quick Links Section */}
          <div className="md:ml-auto">
            <h2 className="text-3xl font-semibold mb-6">Quick Links</h2>
            <nav className="flex flex-col space-y-4">
              <Link href="/pages/projects" className="text-white/90 hover:text-white">
                Projects
              </Link>
              <Link href="/pages/services" className="text-white/90 hover:text-white">
                Services
              </Link>
              <Link href="/pages/about" className="text-white/90 hover:text-white">
                About Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t bg-white border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <p className="text-center text-[#43503F] text-sm">
            © 2025 NDARA STUDIOS LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;