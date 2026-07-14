"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, BookOpen, FlaskConical, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const navLinks = [
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

const researchLinks = [
  "Handwriting Recognition",
  "Computer Vision",
  "Explainable AI",
  "Machine Learning",
  "OCR",
  "IoT & Edge AI",
  "Fractal Analysis",
  "LLMs & NLP",
];

const socialLinks = [
  { icon: <GithubIcon size={18} />, href: "https://github.com/iamajayprajapati", label: "GitHub" },
  { icon: <LinkedinIcon size={18} />, href: "https://www.linkedin.com/in/iamajayprajapati/", label: "LinkedIn" },
  { icon: <BookOpen size={18} />, href: "https://scholar.google.com/citations?user=QYPq7ZIAAAAJ&hl=en", label: "Google Scholar" },
  { icon: <FlaskConical size={18} />, href: "https://orcid.org/0000-0003-1550-356X", label: "ORCID" },
  { icon: <ExternalLink size={18} />, href: "https://www.researchgate.net/directory/profiles", label: "ResearchGate" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--royal-blue), var(--cyan), var(--purple), transparent)",
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(37,99,235,0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", position: "relative" }}
      >
        {/* Main footer grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 56,
            padding: "64px 0 48px",
          }}
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800, fontSize: 18,
                  boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
                }}
              >
                AP
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700, fontSize: 17,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  Ajay Prajapati
                </p>
                <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
                  PhD Scholar · IIIT Vadodara
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: 13.5, lineHeight: 1.85, color: "var(--text-secondary)",
                maxWidth: 340, marginBottom: 24,
              }}
            >
              Advancing AI research in Handwriting Intelligence, Computer Vision,
              and Explainable Machine Learning. Building intelligent systems that
              understand human-written language.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              <a
                href="mailto:202491001@iiitvadodara.ac.in"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  fontSize: 13, color: "var(--text-secondary)", textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--royal-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <Mail size={14} style={{ color: "var(--royal-blue)" }} />
                202491001@iiitvadodara.ac.in
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-secondary)" }}>
                <MapPin size={14} style={{ color: "var(--royal-blue)" }} />
                Diu (U.T.), India
              </div>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-icon"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: 14,
                color: "var(--text-primary)", marginBottom: 20,
                textTransform: "uppercase", letterSpacing: "0.08em",
              }}
            >
              Quick Links
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: 13.5, color: "var(--text-secondary)",
                    textAlign: "left", padding: "2px 0",
                    transition: "color 0.2s ease",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--royal-blue)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Research areas */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: 14,
                color: "var(--text-primary)", marginBottom: 20,
                textTransform: "uppercase", letterSpacing: "0.08em",
              }}
            >
              Research Areas
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {researchLinks.map((area) => (
                <div
                  key={area}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    fontSize: 13.5, color: "var(--text-secondary)",
                  }}
                >
                  <span
                    style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "var(--royal-blue)", flexShrink: 0,
                    }}
                  />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--border)" }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 0",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12.5, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Ajay Prajapati. All rights reserved. Built with{" "}
            <span style={{ color: "var(--royal-blue)" }}>Next.js</span> &{" "}
            <span style={{ color: "var(--purple)" }}>Framer Motion</span>.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
              PhD Scholar · IIIT Vadodara · CSE
            </span>
            {/* Back to top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: 36, height: 36, borderRadius: 10,
                background: "var(--gradient-blue)",
                border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white",
                boxShadow: "0 4px 12px rgba(37,99,235,0.3)",
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
