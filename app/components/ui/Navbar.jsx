"use client";
import { useEffect, useRef, useState } from "react";
import DarkLogo from '../../assets/Full name gradient white_300x87.png'

import LightLogo from '../../assets/Full name minimal dark_300x87.png'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from "lucide-react";
import { trackButtonClick } from "../GoogleAnalyticsAdvanced";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // close on resize
  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(false)
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside); // Ensures mobile touch support
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav ref={menuRef}>
      <div className="container mx-auto flex justify-between items-center">

        <Link href="/" className="flex items-center flex-col">
          <div className="nav-logo inline-flex flex-col items-center h-[60px] w-[200px] relative">
          <Image src={DarkLogo} alt="Anamrina Recruitment - Global Professional Services Logo" fill sizes="200px" priority={true} className="dark-logo" />    
          <Image src={LightLogo} alt="Anamrina Recruitment - Global Professional Services Logo" fill sizes="200px" priority={true} className="light-logo" />            
          </div> 
        </Link>

        <button className="md:hidden p-[0px]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul 
          className={`z-[9999] font-medium text-[#0232b6] ${
            menuOpen ? "block" : "hidden"
          } nav-menu`}
        >
          <li className="nav-item justify-center"><Link onClick={() => setMenuOpen(false)} className="md:block" href="/">Home</Link></li>
          <li className="nav-item justify-center"><Link onClick={() => setMenuOpen(false)} className="md:block" href="/about">About</Link></li>
          <li className="nav-item justify-center"><Link onClick={() => setMenuOpen(false)} className="md:block" href="/howItWorks">How It Works</Link></li>
          {/* <li className="nav-item justify-center"><Link onClick={() => setMenuOpen(false)} className="md:block" href="/jobseekers">For Job Seekers</Link></li>
          <li className="nav-item justify-center"><Link onClick={() => setMenuOpen(false)} className="md:block" href="/employers">For Employers</Link></li> */}
          <li className="nav-item justify-center">
            <Link onClick={() => {
              setMenuOpen(false);
              trackButtonClick('Contact Us', 'navbar');
            }} href="/contact">
              <button className="btn btn-primary">Contact Us</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
