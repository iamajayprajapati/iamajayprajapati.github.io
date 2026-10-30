"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Award } from "lucide-react";

const sourceBase = "https://sites.google.com/view/ajayprajapati";

const awards = [
  {
    title: "Program & Website Committee Member",
    org: "IIIT Allahabad academic events",
    year: "2024–2025",
    description: "Committee service for MADP 2024, CGAC 2024, FGRF 2024, and GAANA 2025.",
    type: "service", icon: "🤝", color: "#2563eb",
    source: `${sourceBase}/academic-activities`,
  },
  {
    title: "Research Presentation at CFAF 2024",
    org: "IIIT Allahabad",
    year: "2024",
    description: "Presented research on fractal antennas and fractal interpolation at CFAF 2024.",
    type: "presentation", icon: "🎤", color: "#7c3aed",
    source: `${sourceBase}/conference`,
  },
  {
    title: "Mendeley Training Certification",
    org: "IQAC, NSB Bangalore & Mendeley",
    year: "28 March 2024",
    description: "Received a training certificate of achievement in research reference management.",
    type: "certification", icon: "📜", color: "#06b6d4",
    source: `${sourceBase}/workshops`,
  },
  {
    title: "ADASIVA 2025 Summer School",
    org: "IIIT Allahabad",
    year: "7–12 July 2025",
    description: "Participated in advanced study of deep architectures for signal, image, and vision applications.",
    type: "training", icon: "🧠", color: "#10b981",
    source: `${sourceBase}/workshops`,
  },
  {
    title: "Emerging Technologies Short Course",
    org: "NIT Jalandhar",
    year: "21–25 July 2025",
    description: "Participated in a week-long online course covering computing and communication technologies.",
    type: "training", icon: "💻", color: "#f59e0b",
    source: `${sourceBase}/workshops`,
  },
];

const typeConfig: Record<string, { label: string; color: string }> = {
  service: { label: "Academic Service", color: "#2563eb" },
  presentation: { label: "Presentation", color: "#7c3aed" },
  certification: { label: "Certification", color: "#06b6d4" },
  training: { label: "Training", color: "#10b981" },
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
            Academic &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Selected academic milestones, committee service, and professional
            development documented on my Google Sites profile.
          </p>
        </motion.div>

        {/* Awards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
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
                <a
                  href={award.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source for ${award.title}`}
                  style={{ display: "inline-block", marginTop: 16, color: "var(--royal-blue)", fontSize: 13, fontWeight: 600 }}
                >
                  View source ↗
                </a>
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
              Explore my academic profile on{" "}
              <a
                href="https://sites.google.com/view/ajayprajapati/home"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--royal-blue)", fontWeight: 600 }}
              >
                Google Sites
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
