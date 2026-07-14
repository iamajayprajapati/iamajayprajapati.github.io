"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";

const awards = [
  {
    title: "Institute Research Fellowship",
    org: "IIIT Vadodara",
    year: "2024 – Present",
    description:
      "Awarded full PhD fellowship including monthly stipend, research grant, and travel support for attending international conferences.",
    type: "fellowship",
    icon: "🏆",
    color: "#f59e0b",
  },
  {
    title: "Best Paper Award",
    org: "National Conference on AI & Computer Vision",
    year: "2025",
    description:
      "Received Best Paper Award for the work on 'Explainable AI for Handwriting-Based Biometric Authentication' at the national conference.",
    type: "award",
    icon: "🥇",
    color: "#2563eb",
  },
  {
    title: "Best Research Project",
    org: "Previous Institution – Department of CSE",
    year: "2022",
    description:
      "Awarded Best Final Year Project for undergraduate research on handwriting pattern recognition using machine learning.",
    type: "award",
    icon: "🎖️",
    color: "#7c3aed",
  },
  {
    title: "Qualified GATE CS",
    org: "IIT & NIT Joint Entrance Exam",
    year: "2022",
    description:
      "Qualified Graduate Aptitude Test in Engineering (GATE) in Computer Science, securing admission to postgraduate studies.",
    type: "exam",
    icon: "📜",
    color: "#06b6d4",
  },
  {
    title: "Research Travel Grant",
    org: "Conference Travel Support Program",
    year: "2025",
    description:
      "Received travel grant to present research at ICDAR 2025 international conference, covering registration, travel, and accommodation.",
    type: "grant",
    icon: "✈️",
    color: "#10b981",
  },
  {
    title: "Academic Excellence Award",
    org: "IIIT Vadodara",
    year: "2024",
    description:
      "Recognized for outstanding academic performance and research contributions in the first year of PhD studies.",
    type: "award",
    icon: "⭐",
    color: "#e11d48",
  },
  {
    title: "Open Source Contributor",
    org: "GitHub & Research Community",
    year: "2023 – Present",
    description:
      "Active contributor to open-source ML projects; GujaratiHW dataset has been downloaded 200+ times by researchers worldwide.",
    type: "community",
    icon: "🌐",
    color: "#7c3aed",
  },
  {
    title: "Hackathon Winner – AI Track",
    org: "National AI Hackathon (Placeholder)",
    year: "2023",
    description:
      "First place in AI track for building a real-time handwriting recognition system using edge AI and IoT devices.",
    type: "competition",
    icon: "⚡",
    color: "#f59e0b",
  },
];

const typeConfig: Record<string, { label: string; color: string }> = {
  fellowship: { label: "Fellowship", color: "#f59e0b" },
  award: { label: "Award", color: "#2563eb" },
  exam: { label: "Exam", color: "#06b6d4" },
  grant: { label: "Grant", color: "#10b981" },
  community: { label: "Community", color: "#7c3aed" },
  competition: { label: "Competition", color: "#e11d48" },
};

export default function AwardsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="awards"
      className="section"
      ref={ref}
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", position: "relative" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 68 }}
        >
          <span className="section-label">
            <Trophy size={14} /> Recognition
          </span>
          <h2 className="section-title">
            Awards &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Recognitions, fellowships, and achievements earned throughout
            the academic and research journey.
          </p>
        </motion.div>

        {/* Awards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 22,
          }}
        >
          {awards.map((award, i) => {
            const typeCfg = typeConfig[award.type] || { label: award.type, color: "#2563eb" };
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.08, duration: 0.55, ease: "easeOut" }}
                className="glass-card"
                style={{ padding: "26px", position: "relative", overflow: "hidden" }}
              >
                {/* Corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0, right: 0,
                    width: 80, height: 80,
                    background: `radial-gradient(circle at top right, ${award.color}18 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Icon + type badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 52, height: 52,
                      borderRadius: 14,
                      background: `${award.color}12`,
                      border: `1.5px solid ${award.color}22`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                    }}
                  >
                    {award.icon}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 }}>
                    <span
                      style={{
                        padding: "3px 10px", borderRadius: 50,
                        background: `${typeCfg.color}10`,
                        border: `1px solid ${typeCfg.color}20`,
                        fontSize: 10, fontWeight: 700,
                        color: typeCfg.color,
                        textTransform: "uppercase", letterSpacing: "0.06em",
                      }}
                    >
                      {typeCfg.label}
                    </span>
                    <span style={{ fontSize: 11.5, color: "var(--text-muted)", fontWeight: 600 }}>
                      {award.year}
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 15.5, fontWeight: 700,
                    color: "var(--text-primary)", marginBottom: 6,
                    lineHeight: 1.35,
                  }}
                >
                  {award.title}
                </h3>
                <p
                  style={{
                    fontSize: 12.5, color: award.color,
                    fontWeight: 600, marginBottom: 12,
                  }}
                >
                  {award.org}
                </p>
                <p
                  style={{
                    fontSize: 13, lineHeight: 1.75,
                    color: "var(--text-secondary)",
                  }}
                >
                  {award.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 52, textAlign: "center" }}
        >
          <div
            className="glass-card"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "18px 28px",
              borderRadius: 50,
            }}
          >
            <Award size={18} style={{ color: "var(--royal-blue)" }} />
            <span style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 500 }}>
              Additional certifications and course completions available on{" "}
              <a
                href="https://www.linkedin.com/in/iamajayprajapati/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--royal-blue)", fontWeight: 600 }}
              >
                LinkedIn Profile
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
