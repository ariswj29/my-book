"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import useFetch from "../app/hooks/useFetch";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState([]);

  const toggleMenu = () => {
    console.log("toggleMenu");
    setIsOpen(!isOpen);
  };

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    const fetchNavbar = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/ariswj29/my-book/navbars"
      );
      const data = await response.json();
      setData(data);
      return data;
    };

    fetchNavbar();
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Image src="/logo.png" alt="logo" width={200} height={50} />
        {isMobile && (
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        )}
        <div className={`links ${isOpen ? "open" : ""}`}>
          {data.map((item, index) => (
            <a key={index} href={item.link}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
