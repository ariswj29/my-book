"use client";

import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    console.log("toggleMenu");
    setIsOpen(!isOpen);
  };

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1>MyBooks</h1>
        {isMobile && (
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        )}
        <div className={`links ${isOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};
