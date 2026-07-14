"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp
} from "lucide-react";

type ExpItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  type: "research" | "teaching" | "internship" | "project";
  description: string;
  highlights: string[];
  tech?: string[];
  color: string;
  icon: string;
  link?: string;
};

const experiences: ExpItem[] = [
  {
    role: "PhD Research Scholar",
    org: "Indian Institute of Information Technology Vadodara (IIITV)",
    location: "Diu, India",
    period: "Aug 2024 – Present",
    type: "research",
    description:
      "Conducting cutting-edge research in Handwriting Intelligence, Explainable AI, and Computer Vision under the supervision of faculty at IIITV.",
    highlights: [
      "Focusing on Machine Learning, Deep Learning, and Fractal Geometry",
      "Actively publishing research papers in reputed journals and conferences",
    ],
    tech: ["Python", "Deep Learning", "Fractal Analysis", "Machine Learning"],
    color: "#2563eb",
    icon: "🎓",
  },
  {
    role: "Program & Website Committee Member",
    org: "GAANA-2025",
    location: "India",
    period: "2025",
    type: "project",
    description: "Geometry, Analysis, Algebra, Numerics and Applications",
    highlights: [
      "Served as a Program and Website Committee Member for the GAANA-2025 conference",
      "Managed website updates and technical programs",
    ],
    tech: ["Web Management", "Technical Coordination"],
    color: "#06b6d4",
    icon: "🌐",
  },
  {
    role: "Program & Website Committee Member",
    org: "MADP-2024, CGAC-2024, FGRF-2024",
    location: "India",
    period: "2024",
    type: "project",
    description: "Meeting on Analysis, Dimensions and PDE; Conference on Graph Theory and Additive Combinatorics; 2nd Workshop on Fractal Geometry and Related Fields",
    highlights: [
      "Served as a Program and Website Committee Member for MADP-2024",
      "Served as a Program and Website Committee Member for CGAC-2024",
      "Served as a Program and Website Committee Member for FGRF-2024",
    ],
    tech: ["Web Management", "Technical Coordination"],
    color: "#10b981",
    icon: "🌐",
  }
];

const typeColors: Record<string, string> = {
  research: "#2563eb",
  teaching: "#f59e0b",
  internship: "#06b6d4",
  project: "#10b981",
};

const typeLabels: Record<string, string> = {
  research: "Research",
  teaching: "Teaching",
  internship: "Internship",
  project: "Project",
};

function ExpCard({ item, i, inView }: { item: ExpItem; i: number; inView: boolean }) {
  const [expanded, setExpanded] = useState(i === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" }}
      className="exp-item"
      style={{ paddingLeft: 36, paddingBottom: 32 }}
    >
      {/* Dot */}
      <div className="exp-dot" style={{ background: item.color }} />

      <div
        className="glass-card"
        style={{ padding: "24px", cursor: "pointer" }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: expanded ? 16 : 0,
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 6,
              }}
            >
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  lineHeight: 1.3,
                }}
              >
                {item.role}
              </h3>
            </div>
            <p
              style={{
                fontSize: 14,
                color: item.color,
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              {item.org}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                fontSize: 12,
                color: "var(--text-muted)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Calendar size={11} /> {item.period}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <MapPin size={11} /> {item.location}
              </span>
              <span
                style={{
                  padding: "2px 10px",
                  background: `${typeColors[item.type]}12`,
                  border: `1px solid ${typeColors[item.type]}22`,
                  borderRadius: 50,
                  color: typeColors[item.type],
                  fontWeight: 700,
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {typeLabels[item.type]}
              </span>
            </div>
          </div>
          <button
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--text-muted)", flexShrink: 0, padding: 4,
            }}
          >
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {/* Expandable content */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ height: 1, background: "var(--border)", marginBottom: 16 }} />

            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                marginBottom: 18,
              }}
            >
              {item.description}
            </p>

            {/* Highlights */}
            <div style={{ marginBottom: 16 }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 10,
                }}
              >
                Key Contributions
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                {item.highlights.map((hl) => (
                  <li
                    key={hl}
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        width: 6, height: 6,
                        borderRadius: "50%",
                        background: item.color,
                        flexShrink: 0, marginTop: 6,
                      }}
                    />
                    {hl}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            {item.tech && (
              <div>
                <p
                  style={{
                    fontSize: 11, fontWeight: 700,
                    color: "var(--text-muted)", textTransform: "uppercase",
                    letterSpacing: "0.08em", marginBottom: 8,
                  }}
                >
                  Technologies
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "3px 10px",
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                        fontSize: 11.5,
                        color: "var(--text-secondary)",
                        fontFamily: "monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="section"
      ref={ref}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div
        className="container"
        style={{ maxWidth: 960, margin: "0 auto", padding: "0 28px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 68 }}
        >
          <span className="section-label">
            <Briefcase size={14} /> Experience
          </span>
          <h2 className="section-title">
            Research &{" "}
            <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="section-subtitle">
            From foundational studies to cutting-edge research — a timeline of
            growth, discovery, and impact.
          </p>
        </motion.div>

        {/* Type legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            display: "flex", flexWrap: "wrap", gap: 10,
            marginBottom: 40, justifyContent: "center",
          }}
        >
          {Object.entries(typeLabels).map(([key, label]) => (
            <span
              key={key}
              style={{
                padding: "5px 14px",
                background: `${typeColors[key]}10`,
                border: `1px solid ${typeColors[key]}20`,
                borderRadius: 50,
                fontSize: 12, fontWeight: 600,
                color: typeColors[key],
                display: "flex", alignItems: "center", gap: 6,
              }}
            >
              <span
                style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: typeColors[key],
                }}
              />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {experiences.map((item, i) => (
            <ExpCard key={item.role + item.org} item={item} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
