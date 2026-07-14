"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Mail, Globe, Brain, FlaskConical } from "lucide-react";

const education = [
  {
    degree: "Ph.D. in Computer Science and Engineering",
    institution: "Indian Institute of Information Technology Vadodara (IIITV)",
    location: "Education Hub, Kevdi – Diu (U.T.) 362520, India",
    period: "2024 – Present",
    focus: "Handwriting Analysis, Machine Learning, Deep Learning, Fractal Geometry, Explainable AI",
    icon: "🎓",
    color: "#2563eb",
    badge: "Ongoing",
  },
  {
    degree: "M.Sc. in Computer Science",
    institution: "Banaras Hindu University (BHU), Varanasi",
    location: "India",
    period: "2021 – 2023",
    focus: "Machine Learning, Computer Vision",
    icon: "🏛️",
    color: "#7c3aed",
    badge: "Completed",
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "IIMT Engineering College, Meerut",
    location: "India",
    period: "2017 – 2021",
    focus: "Algorithms, Data Structures, Programming, Software Engineering",
    icon: "📚",
    color: "#06b6d4",
    badge: "Completed",
  },
];

const researchAreas = [
  { icon: "✍️", label: "Offline Handwriting Recognition" },
  { icon: "🧠", label: "Personality Assessment via Graphology" },
  { icon: "👁️", label: "Computer Vision & OCR" },
  { icon: "🔍", label: "Explainable AI (XAI)" },
  { icon: "📱", label: "IoT & Edge AI" },
  { icon: "🌐", label: "Multilingual AI" },
  { icon: "📐", label: "Fractal Analysis" },
  { icon: "🤖", label: "Large Language Models" },
];

const interests = [
  "📚 Research & Innovation",
  "🎯 Problem Solving",
  "🌐 Open Source",
  "🤖 AI Ethics",
  "✍️ Technical Writing",
  "🎨 Data Visualization",
  "🏋️ Fitness",
  "🎵 Music",
];

import type { Transition } from "framer-motion";

function fadeUp(delay = 0): {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: Transition;
} {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.65, ease: "easeOut" },
  };
}


export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section" ref={ref}>
      {/* Background texture */}
      <div
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(37,99,235,0.05) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <span className="section-label">
            <GraduationCap size={14} /> About Me
          </span>
          <h2 className="section-title">
            Researcher.{" "}
            <span className="gradient-text">Innovator.</span> Explorer.
          </h2>
          <p className="section-subtitle">
            Passionate about transforming the intersection of AI and human
            cognition into real-world intelligent systems.
          </p>
        </motion.div>

        <div
          className="two-col-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* ── LEFT: Biography + Interests ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="glass-card"
              style={{ padding: "36px" }}
            >
              {/* Avatar + name row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  marginBottom: 28,
                  paddingBottom: 24,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid rgba(37,99,235,0.25)",
                    boxShadow: "0 0 0 4px rgba(37,99,235,0.08)",
                    flexShrink: 0,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ajay-profile.jpg"
                    alt="Ajay Prajapati"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 4,
                    }}
                  >
                    Ajay Prajapati
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--royal-blue)", fontWeight: 600 }}>
                    PhD Research Scholar · IIIT Vadodara
                  </p>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 19,
                  fontWeight: 700,
                  marginBottom: 18,
                  color: "var(--text-primary)",
                }}
              >
                Biography
              </h3>
              <div
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.95,
                  color: "var(--text-secondary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <p>
                  I am{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    Ajay Prajapati
                  </strong>
                  , a PhD Research Scholar in the Department of Computer
                  Science and Engineering at the{" "}
                  <strong style={{ color: "var(--royal-blue)" }}>
                    Indian Institute of Information Technology Vadodara (IIITV)
                  </strong>
                  . My research is rooted in the fascinating domain of{" "}
                  <em>Handwriting Intelligence</em> — exploring how machines
                  can understand, analyze, and interpret human handwriting at a
                  fundamental level.
                </p>
                <p>
                  My primary research interests encompass{" "}
                  <strong style={{ color: "var(--cyan)" }}>
                    Offline Handwriting Recognition
                  </strong>
                  ,{" "}
                  <strong style={{ color: "var(--royal-blue)" }}>
                    Handwriting-based Personality Assessment
                  </strong>
                  ,{" "}
                  <strong style={{ color: "var(--purple)" }}>
                    Explainable AI (XAI)
                  </strong>
                  ,{" "}
                  <strong>Computer Vision</strong>,{" "}
                  <strong>Deep Learning</strong>, and{" "}
                  <strong>Optical Character Recognition (OCR)</strong>. I am
                  particularly passionate about making AI models transparent
                  and interpretable.
                </p>
                <p>
                  I am committed to developing{" "}
                  <strong>multilingual datasets</strong> and novel architectures
                  that push the boundaries of what machines can perceive from
                  human-written content — from character recognition to
                  psychological trait inference.
                </p>
              </div>

              {/* Contact chips */}
              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    icon: <Mail size={15} />,
                    label: "202491001@iiitvadodara.ac.in",
                    href: "mailto:202491001@iiitvadodara.ac.in",
                  },
                  {
                    icon: <MapPin size={15} />,
                    label: "Education Hub, Kevdi – Diu (U.T.) 362520",
                  },
                  {
                    icon: <Globe size={15} />,
                    label: "github.com/iamajayprajapati",
                    href: "https://github.com/iamajayprajapati",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      padding: "8px 12px",
                      background: "rgba(37,99,235,0.04)",
                      borderRadius: 10,
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ color: "var(--royal-blue)", flexShrink: 0 }}>
                      {item.icon}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "var(--royal-blue)",
                          textDecoration: "none",
                          fontWeight: 500,
                          fontSize: 13,
                        }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Personal Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 }}
              className="glass-card"
              style={{ padding: "28px", marginTop: 24 }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  marginBottom: 18,
                  color: "var(--text-primary)",
                }}
              >
                Personal Interests
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                {interests.map((interest) => (
                  <span
                    key={interest}
                    style={{
                      padding: "6px 14px",
                      background: "rgba(37,99,235,0.06)",
                      border: "1px solid rgba(37,99,235,0.12)",
                      borderRadius: 50,
                      fontSize: 12.5,
                      color: "var(--text-secondary)",
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.12)";
                      (e.currentTarget as HTMLElement).style.color = "var(--royal-blue)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.06)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Education + Research Vision ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 21,
                  fontWeight: 700,
                  marginBottom: 28,
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <GraduationCap size={22} style={{ color: "var(--royal-blue)" }} />
                Education
              </h3>

              <div style={{ position: "relative" }}>
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.18 }}
                    className="exp-item"
                    style={{
                      paddingLeft: 36,
                      paddingBottom: i < education.length - 1 ? 36 : 0,
                    }}
                  >
                    <div
                      className="exp-dot"
                      style={{ background: edu.color }}
                    />
                    <div
                      className="glass-card"
                      style={{ padding: "22px" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: 8,
                          marginBottom: 12,
                        }}
                      >
                        <span style={{ fontSize: 26 }}>{edu.icon}</span>
                        <div style={{ display: "flex", gap: 6 }}>
                          <span
                            style={{
                              padding: "3px 10px",
                              background: `${edu.color}12`,
                              border: `1px solid ${edu.color}25`,
                              borderRadius: 50,
                              fontSize: 11,
                              fontWeight: 700,
                              color: edu.color,
                            }}
                          >
                            {edu.badge}
                          </span>
                          <span
                            style={{
                              padding: "3px 10px",
                              background: "var(--bg-secondary)",
                              border: "1px solid var(--border)",
                              borderRadius: 50,
                              fontSize: 11,
                              fontWeight: 600,
                              color: "var(--text-muted)",
                            }}
                          >
                            {edu.period}
                          </span>
                        </div>
                      </div>
                      <h4
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 15,
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: 5,
                          lineHeight: 1.35,
                        }}
                      >
                        {edu.degree}
                      </h4>
                      <p
                        style={{
                          fontSize: 13.5,
                          color: edu.color,
                          fontWeight: 600,
                          marginBottom: 4,
                        }}
                      >
                        {edu.institution}
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          color: "var(--text-muted)",
                          marginBottom: 10,
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <MapPin size={11} /> {edu.location}
                      </p>
                      <p
                        style={{
                          fontSize: 12.5,
                          color: "var(--text-secondary)",
                          lineHeight: 1.65,
                        }}
                      >
                        <strong>Focus:</strong> {edu.focus}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Research Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85 }}
              className="glass-card"
              style={{ padding: "28px", marginTop: 24 }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  marginBottom: 18,
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Brain size={18} style={{ color: "var(--royal-blue)" }} />
                Research Areas
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                {researchAreas.map((area) => (
                  <div
                    key={area.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 9,
                      padding: "9px 12px",
                      background: "rgba(37,99,235,0.05)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      fontSize: 12.5,
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.1)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,99,235,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    }}
                  >
                    <span>{area.icon}</span>
                    {area.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Research Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0 }}
              style={{
                marginTop: 24,
                padding: "28px",
                borderRadius: 20,
                background: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(6,182,212,0.06) 100%)",
                border: "1px solid rgba(37,99,235,0.15)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute", top: 0, right: 0,
                  width: 120, height: 120, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  marginBottom: 14,
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <FlaskConical size={18} style={{ color: "var(--cyan)" }} />
                Research Vision
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.85,
                  color: "var(--text-secondary)",
                  marginBottom: 18,
                }}
              >
                My long-term vision is to build{" "}
                <strong style={{ color: "var(--royal-blue)" }}>
                  universal handwriting intelligence systems
                </strong>{" "}
                that work across multiple scripts, languages, and demographics
                — enabling applications in digital education, forensic
                document analysis, healthcare records digitization, and
                personalized learning.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {[
                  "Multilingual OCR",
                  "Personality AI",
                  "XAI",
                  "Fractal Analysis",
                  "IoT + AI",
                  "LLMs for Documents",
                ].map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
