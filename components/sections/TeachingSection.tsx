"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, GraduationCap, Users, Star } from "lucide-react";

const courses = [
  {
    code: "CS101",
    title: "Introduction to Computer Science",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "Monsoon 2024",
    students: 60,
    description:
      "Assisted the professor in conducting lab sessions, grading assignments, and conducting doubt-clearing sessions for first-year BTech students.",
    topics: ["Programming Basics", "Data Types", "Control Flow", "Functions"],
    rating: 4.8,
    color: "#2563eb",
  },
  {
    code: "CS303",
    title: "Machine Learning",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "Winter 2024",
    students: 45,
    description:
      "Led tutorial sessions on machine learning algorithms, helped design programming assignments, and provided one-on-one mentoring for students working on ML projects.",
    topics: ["Supervised Learning", "Neural Networks", "SVM", "Evaluation Metrics"],
    rating: 4.9,
    color: "#7c3aed",
  },
  {
    code: "CS401",
    title: "Deep Learning & Computer Vision",
    role: "Guest Lecturer",
    institution: "IIIT Vadodara",
    semester: "Monsoon 2025",
    students: 38,
    description:
      "Delivered three guest lectures on Explainable AI, Handwriting Recognition, and Transfer Learning as part of the advanced DL course curriculum.",
    topics: ["XAI / Grad-CAM", "Handwriting Recognition", "Transfer Learning", "Vision Transformers"],
    rating: 4.7,
    color: "#06b6d4",
  },
  {
    code: "WORKSHOP",
    title: "Hands-on Deep Learning Workshop",
    role: "Instructor",
    institution: "IIIT Vadodara – Research Club",
    semester: "2025",
    students: 25,
    description:
      "Designed and delivered a 2-day intensive workshop for junior researchers and students on PyTorch, CNNs, and practical model training using Google Colab.",
    topics: ["PyTorch Basics", "CNN Architecture", "Training Tips", "Deployment"],
    rating: 5.0,
    color: "#10b981",
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
                {/* Star rating */}
                <div
                  style={{
                    display: "flex", alignItems: "center", gap: 4,
                    padding: "4px 10px", borderRadius: 50,
                    background: "rgba(245,158,11,0.1)",
                    border: "1px solid rgba(245,158,11,0.2)",
                    flexShrink: 0,
                  }}
                >
                  <Star size={12} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#f59e0b" }}>
                    {course.rating}
                  </span>
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
                <span
                  style={{
                    display: "flex", alignItems: "center", gap: 5,
                    fontSize: 12, color: "var(--text-muted)",
                  }}
                >
                  <Users size={12} /> {course.students} students
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

              {/* Topics */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {course.topics.map((topic) => (
                  <span
                    key={topic}
                    style={{
                      padding: "3px 10px",
                      background: `${course.color}08`,
                      border: `1px solid ${course.color}18`,
                      borderRadius: 50, fontSize: 11, fontWeight: 600, color: course.color,
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
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
