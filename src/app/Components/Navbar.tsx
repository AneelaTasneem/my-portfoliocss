"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import '@/app/styles/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          Portfolio
        </Link>

        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li><Link href="/" className="link">Home</Link></li>
          <li><Link href="/About" className="link">About</Link></li>
          <li><Link href="/Projects" className="link">Projects</Link></li>
          <li><Link href="/Reviews" className="link">Reviews</Link></li>
          <li><Link href="/Contact" className="link">Contact</Link></li>
        </ul>

        <div className="hamburger" onClick={handleToggle}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
