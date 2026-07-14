"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

/** Research metrics that animate on scroll into view */
const stats = [
  { value: 8, suffix: "+", label: "Publications", sublabel: "Journals & Conferences", icon: "📄", color: "var(--royal-blue)" },
  { value: 4, suffix: "+", label: "Journal Papers", sublabel: "Q1 Ranked Venues", icon: "📰", color: "var(--cyan)" },
  { value: 3, suffix: "+", label: "Conference Papers", sublabel: "ICDAR, ICASSP, etc.", icon: "🏛️", color: "var(--purple)" },
  { value: 6, suffix: "+", label: "Research Projects", sublabel: "Open-Source Tools", icon: "🔬", color: "var(--emerald, #10b981)" },
  { value: 2, suffix: "+", label: "Datasets", sublabel: "Public Benchmarks", icon: "📊", color: "var(--amber, #f59e0b)" },
  { value: 1, suffix: "+", label: "Years Research", sublabel: "Since 2024", icon: "⏱️", color: "#e11d48" },
  { value: 50, suffix: "+", label: "Citations", sublabel: "Google Scholar", icon: "🔗", color: "var(--royal-blue)" },
  { value: 3, suffix: "+", label: "Collaborators", sublabel: "National & International", icon: "🤝", color: "var(--cyan)" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="stats"
      ref={ref}
      style={{
        padding: "72px 0",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.04) 0%, rgba(6,182,212,0.03) 50%, rgba(124,58,237,0.04) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", position: "relative" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span className="section-label">
            📈 Research Impact
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
            }}
          >
            Research at a Glance
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 20,
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="stat-card"
              style={{ cursor: "default" }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: 28,
                  marginBottom: 12,
                  filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))",
                }}
              >
                {s.icon}
              </div>

              {/* Number */}
              <div className="stat-number">
                {inView ? (
                  <CountUp end={s.value} duration={2} suffix={s.suffix} />
                ) : (
                  `0${s.suffix}`
                )}
              </div>

              {/* Label */}
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "var(--text-primary)",
                  marginTop: 8,
                  marginBottom: 4,
                }}
              >
                {s.label}
              </p>
              <p style={{ fontSize: 11.5, color: "var(--text-muted)", fontWeight: 500 }}>
                {s.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
