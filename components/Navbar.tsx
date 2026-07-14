"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Teaching", href: "#teaching" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastScroll.current && y > 80);
      lastScroll.current = y;

      // Update active section
      const sections = navItems.map((i) => i.href.replace("#", ""));
      for (const sec of [...sections].reverse()) {
        const el = document.getElementById(sec);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sec);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transform: hidden && !menuOpen ? "translateY(-100%)" : "translateY(0)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 72,
            }}
          >
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                AP
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "var(--text-primary)",
                }}
              >
                Ajay Prajapati
              </span>
            </button>

            {/* Desktop Nav */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
              className="nav-desktop"
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="nav-link"
                  style={{
                    color:
                      active === item.href.replace("#", "")
                        ? "var(--royal-blue)"
                        : undefined,
                    background:
                      active === item.href.replace("#", "")
                        ? "rgba(37, 99, 235, 0.08)"
                        : undefined,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button
                onClick={toggleTheme}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  border: "1.5px solid var(--border)",
                  background: "var(--glass-bg)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="/resume.pdf"
                className="btn-primary hidden md:inline-flex"
                style={{ padding: "9px 20px", fontSize: 13 }}
              >
                CV Download
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  border: "1.5px solid var(--border)",
                  background: "var(--glass-bg)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                }}
                aria-label="Menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "var(--nav-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            paddingTop: 72,
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 20,
                color: "var(--text-primary)",
                padding: "10px 24px",
                borderRadius: 10,
                transition: "all 0.2s ease",
                width: 240,
                textAlign: "center",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
