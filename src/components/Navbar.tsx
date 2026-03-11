"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(10, 10, 15, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(30, 30, 46, 0.8)"
            : "1px solid transparent",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  background: "linear-gradient(135deg, #6C47FF, #FF6B6B)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "900",
                  color: "white",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                S
              </div>
              <span
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "22px",
                  fontWeight: "800",
                  color: "#F0F0FF",
                  letterSpacing: "-0.5px",
                }}
              >
                Super<span style={{ color: "#6C47FF" }}>Hyre</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: pathname === link.href ? "#F0F0FF" : "#9090A0",
                  background:
                    pathname === link.href
                      ? "rgba(108, 71, 255, 0.15)"
                      : "transparent",
                  transition: "all 0.2s ease",
                  borderBottom:
                    pathname === link.href
                      ? "2px solid #6C47FF"
                      : "2px solid transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div
            className="desktop-nav"
            style={{ display: "flex", gap: "12px", alignItems: "center" }}
          >
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button
                className="outline-button"
                style={{ padding: "9px 20px", fontSize: "14px" }}
              >
                Log In
              </button>
            </Link>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button
                className="glow-button"
                style={{ padding: "9px 20px", fontSize: "14px" }}
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  background: "#F0F0FF",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform:
                    mobileOpen && i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : mobileOpen && i === 1
                        ? "scaleX(0)"
                        : mobileOpen && i === 2
                          ? "rotate(-45deg) translate(5px, -5px)"
                          : "none",
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="mobile-menu"
            style={{
              background: "rgba(10, 10, 15, 0.98)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(30, 30, 46, 0.8)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: "none",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: pathname === link.href ? "#F0F0FF" : "#9090A0",
                  background:
                    pathname === link.href
                      ? "rgba(108, 71, 255, 0.15)"
                      : "transparent",
                  transition: "all 0.2s ease",
                  borderLeft:
                    pathname === link.href
                      ? "3px solid #6C47FF"
                      : "3px solid transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button className="outline-button" style={{ width: "100%" }}>
                  Log In
                </button>
              </Link>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button className="glow-button" style={{ width: "100%" }}>
                  Get Started →
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } .mobile-menu { display: none !important; } }
      `}</style>
    </>
  );
}
