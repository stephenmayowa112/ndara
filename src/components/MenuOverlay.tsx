import React from "react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`
        fixed top-0 right-0 h-screen w-full 
        bg-ndaraGreen text-white 
        flex flex-col items-center justify-center
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      // Clicking outside or pressing 'X' can close the menu
    >
      {/* Close button (optional 'X') */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl focus:outline-none"
      >
        &times;
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col items-center space-y-6 text-2xl">
        <a href="#" className="text-green-200 font-semibold">
          Wait-List
        </a>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Services</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
    </div>
  );
};

export default MenuOverlay;
