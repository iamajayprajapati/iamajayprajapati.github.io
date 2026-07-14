"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FolderOpen, ExternalLink, Database } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    title: "IndicHW-Net",
    subtitle: "Multilingual Handwriting Recognition System",
    description:
      "An end-to-end deep learning framework for recognizing handwritten text in multiple Indian scripts including Devanagari, Gujarati, and Bengali. Achieves 96.2% character accuracy on benchmark datasets.",
    stack: ["Python", "PyTorch", "OpenCV", "CTC Loss", "Transformer"],
    tags: ["OCR", "Deep Learning", "Indian Scripts"],
    github: "https://github.com/iamajayprajapati/indichw-net",
    dataset: true,
    color: "#2563eb",
    emoji: "✍️",
  },
  {
    title: "PersonalityAI",
    subtitle: "Handwriting-based Personality Analyzer",
    description:
      "A graphology-informed ML system that extracts Big Five personality traits from scanned handwriting images. Combines fractal dimension analysis with CNN-based feature extraction and SHAP explanations.",
    stack: ["Python", "TensorFlow", "Fractal Analysis", "SHAP", "Sklearn"],
    tags: ["Personality", "XAI", "Graphology"],
    github: "https://github.com/iamajayprajapati/personality-ai",
    demo: "https://personality-ai.demo.dev",
    color: "#7c3aed",
    emoji: "🧠",
  },
  {
    title: "GujaratiHW Dataset",
    subtitle: "Novel Benchmark Dataset",
    description:
      "A large-scale annotated handwriting dataset for Gujarati script with 10,000+ word-level and character-level samples from 500 writers, including variability in age, education, and writing instruments.",
    stack: ["Python", "Annotation Tool", "Data Pipeline", "NumPy"],
    tags: ["Dataset", "Gujarati", "Benchmark"],
    github: "https://github.com/iamajayprajapati/gujaratihw-dataset",
    dataset: true,
    color: "#06b6d4",
    emoji: "📊",
  },
  {
    title: "XAI-DocAnalyzer",
    subtitle: "Explainable Document Analysis",
    description:
      "An interpretable AI tool for analyzing handwritten documents. Uses Grad-CAM, LIME, and attention visualization to highlight critical regions driving model predictions for forensic and clinical applications.",
    stack: ["PyTorch", "Grad-CAM", "LIME", "FastAPI", "React"],
    tags: ["XAI", "Document Analysis", "Forensics"],
    github: "https://github.com/iamajayprajapati/xai-doc-analyzer",
    demo: "https://xai-doc.demo.dev",
    color: "#d97706",
    emoji: "🔍",
  },
  {
    title: "EdgeHW",
    subtitle: "IoT Edge Handwriting Recognition",
    description:
      "A compressed and quantized handwriting recognition model optimized for deployment on Raspberry Pi and Arduino-class IoT devices. Achieves real-time inference with <50ms latency at 92% accuracy.",
    stack: ["TensorFlow Lite", "C++", "Raspberry Pi", "Arduino", "ONNX"],
    tags: ["IoT", "Edge AI", "Real-time"],
    github: "https://github.com/iamajayprajapati/edge-hw",
    color: "#059669",
    emoji: "⚡",
  },
  {
    title: "HandLLM",
    subtitle: "LLM-powered Handwriting Interpreter",
    description:
      "A multimodal system combining Vision Transformers with Large Language Models (LLaMA) for holistic understanding of handwritten documents — including transcription, summarization, and Q&A.",
    stack: ["LLaMA", "ViT", "RAG", "LangChain", "FastAPI"],
    tags: ["LLM", "Multimodal", "RAG"],
    github: "https://github.com/iamajayprajapati/hand-llm",
    color: "#dc2626",
    emoji: "🤖",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section" ref={ref}
      style={{ background: "var(--bg-secondary)" }}>
      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span className="section-label">
            <FolderOpen size={14} /> Projects
          </span>
          <h2 className="section-title">Research Projects</h2>
          <p className="section-subtitle">
            Open-source tools, datasets, and systems built to advance the field
            of Handwriting Intelligence and Explainable AI.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* Header */}
              <div
                style={{
                  height: 160,
                  borderRadius: "14px 14px 0 0",
                  background: `linear-gradient(135deg, ${proj.color}20, ${proj.color}08)`,
                  border: `1px solid ${proj.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 60,
                  position: "relative",
                  overflow: "hidden",
                  marginTop: -1,
                  marginLeft: -1,
                  marginRight: -1,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: proj.color,
                    boxShadow: `0 0 12px ${proj.color}`,
                  }}
                />
                {proj.emoji}
                {/* Glow effect */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at 70% 30%, ${proj.color}15 0%, transparent 60%)`,
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: 12 }}>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 4,
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: 13, color: proj.color, fontWeight: 600 }}>
                    {proj.subtitle}
                  </p>
                </div>

                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.75,
                    color: "var(--text-secondary)",
                    marginBottom: 16,
                    flex: 1,
                  }}
                >
                  {proj.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "3px 10px",
                        background: `${proj.color}12`,
                        border: `1px solid ${proj.color}25`,
                        borderRadius: 50,
                        fontSize: 11,
                        fontWeight: 600,
                        color: proj.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div style={{ marginBottom: 18 }}>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", marginBottom: 6 }}>
                    Tech Stack
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "3px 10px",
                          background: "var(--bg-secondary)",
                          border: "1px solid var(--border)",
                          borderRadius: 6,
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          fontFamily: "monospace",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: 8 }}>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ fontSize: 13, flex: 1, justifyContent: "center" }}
                  >
                    <GithubIcon size={14} /> GitHub
                  </a>
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ fontSize: 13, flex: 1, justifyContent: "center" }}
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                  {proj.dataset && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ fontSize: 13, flex: 1, justifyContent: "center" }}
                    >
                      <Database size={14} /> Dataset
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
