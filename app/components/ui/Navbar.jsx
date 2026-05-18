"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import whiteLogo from "../../assets/Full name gradient white_300x87.png";
import { Arr } from "../reference/Primitives";

const C = {
  navy: "#1A2E42",
};

const navPages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/howItWorks" },
  { label: "Pricing", href: "/pricing" },
];

function isActive(href, pathname) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMenu]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const onChange = () => {
      if (mq.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`ref-nav-backdrop${mobileOpen ? " ref-nav-backdrop--visible" : ""}`}
        aria-hidden={!mobileOpen}
        tabIndex={-1}
        onClick={closeMenu}
      />

      <nav
        id="site-nav"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "block",
          padding: scrolled ? "10px 48px" : "16px 48px",
          background: scrolled ? "rgba(26,46,66,0.98)" : C.navy,
          backdropFilter: "blur(12px)",
          transition: "background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.25)" : "none",
        }}
        className="nav-pad"
      >
        <div className="nav-inner">
          <Link href="/" style={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={closeMenu}>
            <Image src={whiteLogo} alt="Anamrina Recruitment" width={160} height={36} style={{ height: "36px", width: "auto" }} priority />
          </Link>

          <ul className="nav-desktop">
            {navPages.map(({ label, href }) => (
              <li key={href} style={{ listStyle: "none" }}>
                <Link href={href} className={`nav-link${isActive(href, pathname) ? " active" : ""}`}>
                  {label}
                </Link>
              </li>
            ))}
            <li style={{ listStyle: "none" }}>
              <Link href="/contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.78rem" }}>
                Contact
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className={`hamburger${mobileOpen ? " hamburger--open" : ""}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="site-nav-menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>

        <div
          id="site-nav-menu"
          className={`mobile-nav-panel${mobileOpen ? " mobile-nav-panel--open" : ""}`}
          aria-hidden={!mobileOpen}
        >
          <div className="mobile-nav-inner">
            <div className="mobile-nav">
              {navPages.map(({ label, href }) => (
                <Link key={href} href={href} className={`mobile-nav-item${isActive(href, pathname) ? " active" : ""}`} onClick={closeMenu}>
                  {label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mobile-nav-cta" style={{ marginTop: "14px", justifyContent: "center" }} onClick={closeMenu}>
                Contact <Arr />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
