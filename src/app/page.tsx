"use client"
import type { NextPage } from "next";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuOverlay from "../components/MenuOverlay";

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar onMenuToggle={handleMenuToggle} />

      {/* Menu Overlay */}
      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* Hero Section */}
      <Hero />
      
      {/* You can add more sections below */}
      <section className="p-8">
        {/* Content for your landing page */}
        <h2 className="text-2xl font-bold">Welcome to Ndara Studios</h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>
    </>
  );
};

export default Home;
