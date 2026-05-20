"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import whiteLogo from "../../assets/Full name gradient white_300x87.png";
import { Arr } from "../reference/Primitives";

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
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const showSolidNav = !isHome || scrolled;
  const navRef = useRef(null);
  const collapsedNavHeightRef = useRef(68);

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const syncHeaderHeightVar = useCallback(() => {
    const nav = navRef.current;
    if (!nav || typeof document === "undefined") return;
    let h = nav.offsetHeight;
    if (mobileOpen && typeof window !== "undefined" && window.innerWidth <= 768) {
      h = collapsedNavHeightRef.current;
    } else {
      collapsedNavHeightRef.current = h;
    }
    document.documentElement.style.setProperty("--header-height", `${h}px`);
  }, [mobileOpen]);

  useLayoutEffect(() => {
    syncHeaderHeightVar();
    const nav = navRef.current;
    if (!nav) return;
    const ro = new ResizeObserver(() => syncHeaderHeightVar());
    ro.observe(nav);
    return () => ro.disconnect();
  }, [syncHeaderHeightVar, scrolled, pathname]);

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
        ref={navRef}
        id="site-nav"
        style={{
          zIndex: 100,
          display: "block",
          padding: scrolled ? "10px 48px" : "14px 48px",
          transition: "background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
        className={`nav-pad${isHome ? " nav-pad--home nav-pad--overlay" : ""}${showSolidNav ? " nav-pad--solid" : ""}`}
      >
        <div className="nav-inner">
          <Link href="/" style={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={closeMenu}>
            <Image src={whiteLogo} alt="Anamrina Recruitment" width={160} height={36} style={{ height: "39px", width: "auto" }} priority />
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
