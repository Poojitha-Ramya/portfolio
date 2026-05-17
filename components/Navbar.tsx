"use client";

import React, { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="site-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 7%",
          background: "#080810",
          borderBottom: "1px solid rgba(180,80,220,0.18)",
          transition: "background 0.3s",
        }}
      >
        {/* Logo */}
        <span
          className="nav-logo"
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "1.2rem",
            color: "#c855f0",
            letterSpacing: "1px",
          }}
        >
          CPR
        </span>

        {/* Menu Button */}
        <button
          className={`mobile-menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          style={{
            background: "none",
            border: "none",
            color: "#f0eeff",
            fontSize: "1.5rem",
            cursor: "pointer",
            zIndex: 130,
          }}
        >
          ☰
        </button>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "0.3s ease",
          zIndex: 110,
        }}
      />

      {/* Sidebar */}
      <div
        className={`mobile-menu-panel ${menuOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "min(360px, 86vw)",
          height: "100vh",
          background: "#0e0e1a",
          borderLeft: "1px solid rgba(180,80,220,0.18)",
          padding: "5rem 1.5rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          transform: menuOpen
            ? "translateX(0)"
            : "translateX(110%)",
          transition: "transform 0.35s ease",
          zIndex: 120,
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "transparent",
            border: "none",
            color: "#ffffff",
            fontSize: "2rem",
            cursor: "pointer",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
          }}
        >
          ✕
        </button>

        {/* Links */}
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{
              color: "#b8b8d0",
              textDecoration: "none",
              fontSize: "1.1rem",
              padding: "0.8rem 1rem",
              borderRadius: "10px",
              transition: "0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "rgba(200,85,240,0.12)";
              e.currentTarget.style.color = "#c855f0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#b8b8d0";
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}