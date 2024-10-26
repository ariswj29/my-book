"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import useFetch from "../app/hooks/useFetch";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState([]);
  const [logo, setLogo] = useState("/logo.png");

  const toggleMenu = () => {
    console.log("toggleMenu");
    setIsOpen(!isOpen);
  };

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const checkColorScheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setLogo("/logo-white.png");
    } else {
      setLogo("/logo.png");
    }
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
    checkColorScheme();
    window.addEventListener("resize", checkIsMobile);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", checkColorScheme);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", checkColorScheme);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/">
          <Image src={logo} alt="logo" width={200} height={50} />
        </Link>
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
