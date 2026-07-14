"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, GraduationCap, Users, Star } from "lucide-react";

const courses = [
  {
    code: "AICTE QIP",
    title: "PG Certificate Program on Artificial Intelligence",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara (Sponsored by AICTE)",
    semester: "March 2026 – July 2026",
    description: "Assisted in the AICTE QIP PG Certificate Program on Artificial Intelligence.",
    color: "#2563eb",
  },
  {
    code: "CS448",
    title: "Operating System",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "January – May 2026",
    description: "Teaching Assistant for Operating System (CS448).",
    color: "#7c3aed",
  },
  {
    code: "CS268",
    title: "Computer Organization and Architecture",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "January – May 2026",
    description: "Teaching Assistant for Computer Organization and Architecture.",
    color: "#06b6d4",
  },
  {
    code: "CS/IT261",
    title: "Object Oriented Programming",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "August – December 2025",
    description: "Teaching Assistant for Object Oriented Programming.",
    color: "#10b981",
  },
  {
    code: "CS363",
    title: "Operating System",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "August – December 2025",
    description: "Teaching Assistant for Operating System (CS363).",
    color: "#f59e0b",
  },
  {
    code: "AICTE QIP",
    title: "PG Certificate Program on AI and Cyber Security",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara (Sponsored by AICTE)",
    semester: "23 June 2025 – 4 July 2025",
    description: "Assisted in the AICTE QIP PG Certificate Program on AI and Cyber Security for Faculty in Core Engineering Disciplines.",
    color: "#ef4444",
  },
  {
    code: "CS/IT326",
    title: "Topics in Security and Privacy",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "January – May 2025",
    description: "Teaching Assistant for Topics in Security and Privacy.",
    color: "#3b82f6",
  },
  {
    code: "MA102",
    title: "Linear Algebra and Matrices",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "January – May 2025",
    description: "Teaching Assistant for Linear Algebra and Matrices.",
    color: "#8b5cf6",
  },
  {
    code: "CS361",
    title: "Computer Network",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "August – December 2024",
    description: "Teaching Assistant for Computer Network.",
    color: "#ec4899",
  },
  {
    code: "CS363",
    title: "Operating System",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "August – December 2024",
    description: "Teaching Assistant for Operating System (CS363).",
    color: "#f97316",
  },
];

const mentoring = [
  {
    title: "Junior PhD Students",
    description: "Providing research guidance to 2 junior PhD scholars on handwriting recognition projects.",
    count: 2,
    icon: "🎓",
  },
  {
    title: "BTech Final Year Projects",
    description: "Co-supervising 3 BTech students on AI/ML final year projects related to document analysis.",
    count: 3,
    icon: "📝",
  },
  {
    title: "Open Source Contributors",
    description: "Guiding contributors to the GujaratiHW dataset and IndicHW-Net projects.",
    count: 5,
    icon: "💻",
  },
];

export default function TeachingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="teaching" className="section" ref={ref}>
      {/* Background */}
      <div
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at 60% 80%, rgba(6,182,212,0.05) 0%, transparent 50%)",
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
            <GraduationCap size={14} /> Teaching & Mentoring
          </span>
          <h2 className="section-title">
            Teaching &{" "}
            <span className="gradient-text">Mentoring</span>
          </h2>
          <p className="section-subtitle">
            Committed to knowledge-sharing, mentoring the next generation of
            researchers, and contributing to academic excellence.
          </p>
        </motion.div>

        {/* Courses */}
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 19, fontWeight: 700,
            color: "var(--text-primary)", marginBottom: 28,
            display: "flex", alignItems: "center", gap: 10,
          }}
        >
          <BookOpen size={20} style={{ color: "var(--royal-blue)" }} />
          Courses & Workshops
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 22,
            marginBottom: 56,
          }}
        >
          {courses.map((course, i) => (
            <motion.div
              key={course.code}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" }}
              className="glass-card"
              style={{ padding: "26px", position: "relative", overflow: "hidden" }}
            >
              {/* Color bar */}
              <div
                style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: 3, background: course.color, borderRadius: "20px 20px 0 0",
                }}
              />

              {/* Header */}
              <div
                style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", marginBottom: 14, paddingTop: 4,
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: 11, fontWeight: 700, color: course.color,
                      letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4,
                    }}
                  >
                    {course.code} · {course.semester}
                  </p>
                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 15.5, fontWeight: 700,
                      color: "var(--text-primary)", lineHeight: 1.3,
                    }}
                  >
                    {course.title}
                  </h4>
                </div>
              </div>

              {/* Meta */}
              <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                <span
                  style={{
                    padding: "3px 10px", borderRadius: 50,
                    background: `${course.color}10`,
                    border: `1px solid ${course.color}20`,
                    fontSize: 11, fontWeight: 700, color: course.color,
                  }}
                >
                  {course.role}
                </span>
              </div>

              <p
                style={{
                  fontSize: 13, lineHeight: 1.75,
                  color: "var(--text-secondary)", marginBottom: 16,
                }}
              >
                {course.description}
              </p>

            </motion.div>
          ))}
        </div>

        {/* Mentoring */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 19, fontWeight: 700,
              color: "var(--text-primary)", marginBottom: 28,
              display: "flex", alignItems: "center", gap: 10,
            }}
          >
            <Users size={20} style={{ color: "var(--cyan)" }} />
            Mentoring
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {mentoring.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="glass-card"
                style={{ padding: "24px", display: "flex", gap: 16, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: "rgba(37,99,235,0.08)",
                    border: "1px solid rgba(37,99,235,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24, flexShrink: 0,
                  }}
                >
                  {m.icon}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <h4
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 14.5, fontWeight: 700, color: "var(--text-primary)",
                      }}
                    >
                      {m.title}
                    </h4>
                    <span
                      style={{
                        padding: "2px 9px", borderRadius: 50,
                        background: "rgba(37,99,235,0.1)",
                        border: "1px solid rgba(37,99,235,0.2)",
                        fontSize: 11, fontWeight: 700, color: "var(--royal-blue)",
                      }}
                    >
                      {m.count}
                    </span>
                  </div>
                  <p style={{ fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    {m.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
