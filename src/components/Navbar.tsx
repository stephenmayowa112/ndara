import React from "react";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-white">
      {/* Logo Section */}
      <div className="text-xl font-bold">
        NDARA STUDIOS
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={onMenuToggle}
        className="text-3xl focus:outline-none"
      >
        &#9776; {/* This is the hamburger character */}
      </button>
    </header>
  );
};

export default Navbar;
