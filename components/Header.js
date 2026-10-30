"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const linksRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close on click outside the open menu / toggle button.
  useEffect(() => {
    if (!open) return;
    function onDocClick(e) {
      if (linksRef.current?.contains(e.target)) return;
      if (toggleRef.current?.contains(e.target)) return;
      setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  // Close on Escape, and on resize back to desktop.
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onResize() {
      if (window.innerWidth > 860) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`} id="siteHeader">
      <div className="container">
        <nav className="nav" aria-label="Main navigation">
          <a href="#top" className="brand" aria-label="Osiaru Tech — home">
            <span className="brand__mark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Osiaru Tech logo" width={38} height={38} />
            </span>
            <span className="brand__name">
              Osiaru Tech
              <small>Software Firm</small>
            </span>
          </a>

          <ul
            className={`nav__links${open ? " is-open" : ""}`}
            id="navLinks"
            ref={linksRef}
          >
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <a href="#contact" className="btn btn--primary nav__cta">
              Start a project
            </a>
            <button
              className="nav__toggle"
              id="navToggle"
              ref={toggleRef}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="navLinks"
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
