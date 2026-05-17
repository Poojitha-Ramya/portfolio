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
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "16px clamp(16px, 4vw, 7%)",
          background: scrolled ? "rgba(8,8,16,0.98)" : "rgba(8,8,16,0.96)",
          borderBottom: "1px solid rgba(180,80,220,0.18)",
          backdropFilter: "blur(14px)",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.22)" : "none",
          transition: "background 0.25s ease, box-shadow 0.25s ease",
        }}
      >
        <span
          className="nav-logo"
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#c855f0",
            letterSpacing: "1px",
            whiteSpace: "nowrap",
          }}
        >
          CPR
        </span>

        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.15rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: "#b8b8d0",
                textDecoration: "none",
                fontSize: "0.95rem",
                padding: "0.55rem 0.8rem",
                borderRadius: "999px",
                transition: "background 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(200,85,240,0.12)";
                e.currentTarget.style.color = "#f0eeff";
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

        <button
          className={`mobile-menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#f0eeff",
            fontSize: "1.5rem",
            cursor: "pointer",
            zIndex: 230,
            width: "46px",
            height: "46px",
            borderRadius: "14px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(12px)",
          }}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="menu-icon-line" />
          <span className="menu-icon-line" />
          <span className="menu-icon-line" />
        </button>
      </nav>

      <button
        type="button"
        className={`mobile-menu-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-label="Close mobile menu backdrop"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(3,3,10,0.55)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          border: "none",
          transition: "opacity 0.25s ease",
          zIndex: 150,
        }}
      />

      <div
        className={`mobile-menu-panel ${menuOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          inset: 0,
          height: "100vh",
          width: "100vw",
          background: "rgba(10, 10, 22, 0.98)",
          borderLeft: "1px solid rgba(180,80,220,0.18)",
          padding: "5rem 1.2rem 1.2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0.8rem",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
          zIndex: 180,
          backdropFilter: "blur(18px)",
        }}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#ffffff",
            fontSize: "1.75rem",
            cursor: "pointer",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "14px",
          }}
        >
          ✕
        </button>

        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="mobile-menu-link"
            style={{
              color: "#f0eeff",
              textDecoration: "none",
              fontSize: "clamp(1.05rem, 4vw, 1.25rem)",
              padding: "1rem 1.05rem",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.03)",
              minHeight: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "transform 0.2s ease, background 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(200,85,240,0.12)";
              e.currentTarget.style.color = "#c855f0";
              e.currentTarget.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              e.currentTarget.style.color = "#f0eeff";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}