"use client";
import { useEffect, useRef, useState } from "react";
import Logo from '../../assets/full-logo-dark.png'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from "lucide-react";

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
          <div className="nav-logo inline-flex flex-col items-center h-[75px] w-[175px] relative">
            <Image src={Logo} alt="Anamrina Logo" layout="fill" objectFit="contain" priority={true} loading={true} />            
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
          <li className="nav-item justify-center"><Link onClick={() => setMenuOpen(false)} className="md:block" href="/services">Services</Link></li>
          <li className="nav-item justify-center"><Link onClick={() => setMenuOpen(false)} className="md:block" href="/jobseekers">For Job Seekers</Link></li>
          <li className="nav-item justify-center"><Link onClick={() => setMenuOpen(false)} className="md:block" href="/employers">For Employers</Link></li>
          <li className="nav-item justify-center">
            <Link onClick={() => setMenuOpen(false)} href="/contact">
              <button className="btn btn-primary">Contact Us</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
