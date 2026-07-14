"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download, Mail, ExternalLink,
  BookOpen, FlaskConical, GraduationCap, ChevronDown,
  MapPin, Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const roles = [
  "PhD Research Scholar",
  "AI & ML Researcher",
  "Computer Vision Expert",
  "Handwriting Intelligence Pioneer",
  "Explainable AI Researcher",
  "OCR & NLP Enthusiast",
];

/* ── Particle canvas background ── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      r: number; alpha: number;
      hue: number;
    };

    const particles: Particle[] = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2.2 + 0.6,
        alpha: Math.random() * 0.45 + 0.08,
        hue: Math.random() > 0.5 ? 220 : 266,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 60%, ${p.alpha})`;
        ctx.fill();
      });

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.07 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", inset: 0,
        pointerEvents: "none", zIndex: 0,
      }}
    />
  );
}

/* ── Typewriter effect ── */
function TypewriterText({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, texts]);

  return (
    <span className="gradient-text" style={{ fontStyle: "normal" }}>
      {displayed}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

/* ── Floating orbital badge ── */
function OrbitBadge({
  emoji, title, subtitle,
  style,
  delay = 0,
}: {
  emoji: string; title: string; subtitle: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 18 }}
      style={{
        position: "absolute",
        background: "var(--glass-bg)",
        backdropFilter: "blur(20px)",
        border: "1px solid var(--glass-border)",
        borderRadius: 16,
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        boxShadow: "var(--glass-shadow)",
        ...style,
      }}
    >
      <span style={{ fontSize: 24 }}>{emoji}</span>
      <div>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: 13,
          color: "var(--text-primary)",
        }}>
          {title}
        </p>
        <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 1 }}>
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 88,
        paddingBottom: 60,
      }}
    >
      <ParticleField />

      {/* Decorative ambient blobs */}
      <div style={{
        position: "absolute", top: "5%", right: "3%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 65%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "3%",
        width: 450, height: 450, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "40%", left: "50%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 60%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />

      <div
        className="container hero-grid"
        style={{
          position: "relative", zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
          padding: "0 28px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* ── LEFT: Content ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: 22 }}
          >
            <span className="section-label">
              <GraduationCap size={14} />
              IIIT Vadodara · PhD Scholar · CSE
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.6rem, 5.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: 18,
              color: "var(--text-primary)",
              letterSpacing: "-0.035em",
            }}
          >
            Ajay{" "}
            <span className="gradient-text-hero">Prajapati</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
              fontWeight: 600,
              marginBottom: 22,
              minHeight: 42,
              letterSpacing: "-0.01em",
            }}
          >
            <TypewriterText texts={roles} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              fontSize: 15.5,
              lineHeight: 1.85,
              color: "var(--text-secondary)",
              marginBottom: 32,
              maxWidth: 520,
            }}
          >
            Advancing Artificial Intelligence for{" "}
            <strong style={{ color: "var(--royal-blue)" }}>
              Handwriting Intelligence
            </strong>
            ,{" "}
            <strong style={{ color: "var(--cyan)" }}>Computer Vision</strong>
            , and{" "}
            <strong style={{ color: "var(--purple)" }}>
              Explainable Machine Learning
            </strong>
            . Building intelligent systems that understand human-written
            language at scale.
          </motion.p>

          {/* Info chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}
          >
            {[
              { icon: "🏛️", label: "IIIT Vadodara" },
              { icon: <MapPin size={13} />, label: "Diu, India" },
              { icon: "✉️", label: "202491001@iiitvadodara.ac.in" },
              { icon: <Sparkles size={13} />, label: "2024 – Present" },
            ].map((c, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  background: "var(--glass-bg)",
                  border: "1px solid var(--border-strong)",
                  borderRadius: 50,
                  fontSize: 12.5,
                  color: "var(--text-secondary)",
                  backdropFilter: "blur(12px)",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "var(--royal-blue)" }}>{c.icon}</span>
                {c.label}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}
          >
            <a href="#contact" className="btn-primary">
              <Mail size={15} /> Get in Touch
            </a>
            <a href="#publications" className="btn-secondary">
              <BookOpen size={15} /> Publications
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              <Download size={15} /> Download CV
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95 }}
            style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
          >
            {[
              {
                href: "https://github.com/iamajayprajapati",
                icon: <GithubIcon size={18} />,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/iamajayprajapati/",
                icon: <LinkedinIcon size={18} />,
                label: "LinkedIn",
              },
              {
                href: "https://scholar.google.com/citations?user=QYPq7ZIAAAAJ&hl=en",
                icon: <BookOpen size={18} />,
                label: "Google Scholar",
              },
              {
                href: "https://orcid.org/0000-0003-1550-356X",
                icon: <FlaskConical size={18} />,
                label: "ORCID",
              },
              {
                href: "https://www.researchgate.net/directory/profiles",
                icon: <ExternalLink size={18} />,
                label: "ResearchGate",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            height: 480,
          }}
          className="hero-photo"
        >
          {/* Outer orbit ring */}
          <div
            className="animate-spin-slow"
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              borderRadius: "50%",
              border: "1.5px dashed rgba(37,99,235,0.22)",
            }}
          />
          {/* Inner orbit ring */}
          <div
            className="animate-spin-reverse"
            style={{
              position: "absolute",
              width: 340,
              height: 340,
              borderRadius: "50%",
              border: "1px dashed rgba(6,182,212,0.18)",
            }}
          />

          {/* Glow bg */}
          <div
            style={{
              position: "absolute",
              width: 330,
              height: 330,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(6,182,212,0.08) 50%, transparent 70%)",
              filter: "blur(24px)",
            }}
          />

          {/* Profile photo */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "relative",
              width: 280,
              height: 280,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 0 0 10px rgba(37,99,235,0.08), 0 30px 80px rgba(37,99,235,0.22), 0 0 80px rgba(6,182,212,0.1)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ajay-profile.jpg"
              alt="Ajay Prajapati – PhD Research Scholar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>

          {/* Floating badges */}
          <OrbitBadge
            emoji="🎓"
            title="PhD Scholar"
            subtitle="IIIT Vadodara"
            delay={0.8}
            style={{ top: "6%", right: "4%" }}
          />
          <OrbitBadge
            emoji="🤖"
            title="AI Research"
            subtitle="Handwriting + Vision"
            delay={1.0}
            style={{ bottom: "12%", left: "0%" }}
          />
          <OrbitBadge
            emoji="📊"
            title="8+ Publications"
            subtitle="Journals & Conferences"
            delay={1.15}
            style={{ bottom: "40%", right: "0%" }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "var(--text-muted)",
          fontSize: 11,
          cursor: "pointer",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
        onClick={() =>
          document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
