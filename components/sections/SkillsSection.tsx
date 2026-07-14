"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Layers, Database, Cpu } from "lucide-react";

type Skill = { name: string; level: number; color?: string };
type SkillGroup = { category: string; icon: React.ReactNode; skills: Skill[] };

const skillGroups: SkillGroup[] = [
  {
    category: "Machine Learning & AI",
    icon: <Cpu size={18} />,
    skills: [
      { name: "Deep Learning", level: 92 },
      { name: "Machine Learning", level: 95 },
      { name: "Computer Vision", level: 90 },
      { name: "Explainable AI (XAI)", level: 88 },
      { name: "Natural Language Processing", level: 80 },
      { name: "Large Language Models", level: 78 },
      { name: "Reinforcement Learning", level: 65 },
      { name: "Fractal Analysis", level: 85 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: <Layers size={18} />,
    skills: [
      { name: "PyTorch", level: 92, color: "#ee4c2c" },
      { name: "TensorFlow / Keras", level: 88, color: "#ff6f00" },
      { name: "OpenCV", level: 90, color: "#5c3ee8" },
      { name: "Scikit-learn", level: 93, color: "#f89939" },
      { name: "Hugging Face Transformers", level: 82, color: "#ffd21e" },
      { name: "LangChain", level: 72, color: "#1c3c3c" },
      { name: "ONNX / TFLite", level: 80 },
      { name: "NumPy / Pandas", level: 95 },
    ],
  },
  {
    category: "Programming Languages",
    icon: <Code2 size={18} />,
    skills: [
      { name: "Python", level: 96, color: "#3776ab" },
      { name: "Java", level: 80, color: "#ed8b00" },
      { name: "C / C++", level: 75, color: "#659ad2" },
      { name: "Kotlin", level: 70, color: "#7f52ff" },
      { name: "JavaScript / TypeScript", level: 68 },
      { name: "MATLAB", level: 72 },
      { name: "Bash / Shell", level: 78 },
      { name: "LaTeX", level: 88 },
    ],
  },
  {
    category: "Tools & Infrastructure",
    icon: <Database size={18} />,
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker / Kubernetes", level: 76 },
      { name: "Linux / Ubuntu", level: 90 },
      { name: "AWS / Cloud", level: 70 },
      { name: "FastAPI / Flask", level: 80 },
      { name: "CUDA / GPU Computing", level: 82 },
      { name: "Jupyter / Colab", level: 95 },
      { name: "Label Studio", level: 78 },
    ],
  },
];

const softSkills = [
  { icon: "📝", label: "Research Writing", level: 90 },
  { icon: "🗣️", label: "Scientific Communication", level: 88 },
  { icon: "🤝", label: "Collaboration", level: 95 },
  { icon: "🔎", label: "Critical Thinking", level: 92 },
  { icon: "⏱️", label: "Time Management", level: 85 },
  { icon: "🎯", label: "Problem Solving", level: 94 },
];

function SkillBar({ skill, inView, delay }: { skill: Skill; inView: boolean; delay: number }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 7,
        }}
      >
        <span
          style={{
            fontSize: 13.5,
            fontWeight: 600,
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {skill.color && (
            <span
              style={{
                width: 8, height: 8, borderRadius: 2,
                background: skill.color, flexShrink: 0,
              }}
            />
          )}
          {skill.name}
        </span>
        <span
          style={{
            fontSize: 11.5, fontWeight: 700,
            color: "var(--text-muted)",
          }}
        >
          {skill.level}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{
            width: inView ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}s`,
            background: skill.color
              ? `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`
              : undefined,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeGroup, setActiveGroup] = useState(0);

  const group = skillGroups[activeGroup];

  return (
    <section id="skills" className="section" ref={ref}>
      {/* Background gradient */}
      <div
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at 80% 60%, rgba(37,99,235,0.05) 0%, transparent 50%)",
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
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span className="section-label">
            <Code2 size={14} /> Technical Expertise
          </span>
          <h2 className="section-title">
            Skills &{" "}
            <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of technical skills developed through
            years of research, coursework, and hands-on project experience.
          </p>
        </motion.div>

        {/* Tab + Content layout */}
        <div
          className="skills-layout"
          style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 32 }}
        >
          {/* Sidebar tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="skills-tabs"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minWidth: 220,
            }}
          >
            {skillGroups.map((g, i) => (
              <button
                key={g.category}
                onClick={() => setActiveGroup(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 18px",
                  borderRadius: 14,
                  border: "1.5px solid",
                  borderColor: activeGroup === i ? "var(--royal-blue)" : "var(--border)",
                  background:
                    activeGroup === i
                      ? "rgba(37,99,235,0.1)"
                      : "var(--glass-bg)",
                  color: activeGroup === i ? "var(--royal-blue)" : "var(--text-secondary)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: 13.5,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textAlign: "left",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span style={{ color: activeGroup === i ? "var(--royal-blue)" : "var(--text-muted)" }}>
                  {g.icon}
                </span>
                {g.category}
              </button>
            ))}
          </motion.div>

          {/* Skills content */}
          <motion.div
            key={activeGroup}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card"
            style={{ padding: "36px" }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 18, fontWeight: 700,
                color: "var(--text-primary)", marginBottom: 32,
                display: "flex", alignItems: "center", gap: 10,
              }}
            >
              <span style={{ color: "var(--royal-blue)" }}>{group.icon}</span>
              {group.category}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "0 40px",
              }}
            >
              {group.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  inView={inView}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{ marginTop: 48 }}
        >
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 18, fontWeight: 700,
              color: "var(--text-primary)", marginBottom: 24,
              textAlign: "center",
            }}
          >
            Professional & Soft Skills
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            {softSkills.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.07 }}
                className="glass-card"
                style={{ padding: "20px", textAlign: "center" }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600, fontSize: 13.5,
                    color: "var(--text-primary)", marginBottom: 12,
                  }}
                >
                  {s.label}
                </p>
                <div className="skill-bar" style={{ maxWidth: 120, margin: "0 auto" }}>
                  <div
                    className="skill-fill"
                    style={{
                      width: inView ? `${s.level}%` : "0%",
                      transitionDelay: `${0.6 + i * 0.07}s`,
                    }}
                  />
                </div>
                <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 6 }}>
                  {s.level}%
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
