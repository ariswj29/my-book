import Image from "next/image";
import {
  FaSquareEnvelope,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
          <Image src="/logo-white.png" alt="logo" width={200} height={50} />
          <p>
            MyBooks is a website that provides a variety of books that you can
            buy. With MyBooks you can buy books easily and quickly. MyBooks
            provides a variety of books ranging from novels, comics, and
            textbooks. MyBooks is the best place to buy books.
          </p>
        </div>
        <div className="links">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <h2>Contact</h2>
          <h4 style={{ fontWeight: "normal", marginTop: "3px" }}>
            Jl. Ir. H. Juanda, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa
            Barat 40116
          </h4>
          <div className="socials-title">
            <a href="https://gmail.com/vercel">
              <FaSquareEnvelope size={30} />
            </a>
            <a href="https://twitter.com/vercel">
              <FaSquareTwitter size={30} />
            </a>
            <a href="https://facebook.com/vercel">
              <FaSquareFacebook size={30} />
            </a>
            <a href="https://instagram.com/vercel">
              <FaSquareInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
      <h3 style={{ marginTop: "3rem" }}>
        © 2024 MyBooks. All rights reserved.
      </h3>
    </footer>
  );
};
