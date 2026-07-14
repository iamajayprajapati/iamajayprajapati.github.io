"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain } from "lucide-react";

const researchAreas = [
  {
    icon: "✍️",
    title: "Offline Handwriting Recognition",
    description:
      "Developing deep learning architectures (CNN, Transformer, CTC) to accurately transcribe handwritten text from scanned images across multiple scripts including Devanagari, Gujarati, and Bengali.",
    tags: ["CNN", "CTC Loss", "Transformers", "OCR"],
    color: "#2563eb",
    gradient: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(37,99,235,0.04))",
  },
  {
    icon: "🧠",
    title: "Handwriting-based Personality Assessment",
    description:
      "Applying graphology principles with ML to automatically infer Big Five personality traits from handwriting patterns. Combines fractal dimension analysis with CNN feature extraction and SHAP-based explanations.",
    tags: ["Graphology", "Fractal", "SHAP", "Big Five"],
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(124,58,237,0.04))",
  },
  {
    icon: "🔍",
    title: "Explainable AI (XAI)",
    description:
      "Making black-box deep learning models interpretable using Grad-CAM, LIME, SHAP, and attention visualization. Building trust in AI systems for critical applications in forensics and healthcare.",
    tags: ["Grad-CAM", "LIME", "SHAP", "Attention Maps"],
    color: "#d97706",
    gradient: "linear-gradient(135deg, rgba(217,119,6,0.12), rgba(217,119,6,0.04))",
  },
  {
    icon: "👁️",
    title: "Computer Vision & Image Processing",
    description:
      "Advancing state-of-the-art in visual document understanding — from image preprocessing and binarization to end-to-end document layout analysis and segmentation.",
    tags: ["OpenCV", "YOLO", "ResNet", "U-Net"],
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(6,182,212,0.04))",
  },
  {
    icon: "📐",
    title: "Fractal Analysis & Feature Engineering",
    description:
      "Utilizing fractal geometry and multi-scale feature engineering to capture unique patterns in handwriting that are robust to noise and writing style variations.",
    tags: ["Fractal Dimension", "Wavelet", "HOG", "LBP"],
    color: "#10b981",
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(16,185,129,0.04))",
  },
  {
    icon: "🔄",
    title: "Transfer Learning & Domain Adaptation",
    description:
      "Leveraging pre-trained vision models for low-resource handwriting recognition in rare Indian scripts. Fine-tuning strategies that achieve strong performance with limited labeled data.",
    tags: ["Fine-tuning", "Few-shot", "Domain Shift", "ViT"],
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.04))",
  },
  {
    icon: "🤖",
    title: "Large Language Models (LLMs)",
    description:
      "Integrating LLMs (LLaMA, GPT-4V) with vision encoders for holistic handwritten document understanding — including transcription, summarization, Q&A, and RAG-based retrieval.",
    tags: ["LLaMA", "GPT-4V", "RAG", "LangChain"],
    color: "#e11d48",
    gradient: "linear-gradient(135deg, rgba(225,29,72,0.12), rgba(225,29,72,0.04))",
  },
  {
    icon: "📱",
    title: "IoT & Edge AI",
    description:
      "Compressing and quantizing deep learning models for real-time deployment on resource-constrained IoT edge devices (Raspberry Pi, Arduino) with <50ms inference latency.",
    tags: ["TFLite", "ONNX", "Quantization", "Pruning"],
    color: "#0891b2",
    gradient: "linear-gradient(135deg, rgba(8,145,178,0.12), rgba(8,145,178,0.04))",
  },
  {
    icon: "🌐",
    title: "Multilingual & Low-Resource AI",
    description:
      "Building robust AI systems that work across diverse scripts and languages, with special focus on low-resource Indian scripts using semi-supervised and self-supervised learning.",
    tags: ["Multilingual", "Low-resource", "Semi-supervised", "Self-supervised"],
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(124,58,237,0.04))",
  },
  {
    icon: "📊",
    title: "Dataset Development",
    description:
      "Curating and annotating large-scale benchmark datasets for Indian script handwriting recognition to support reproducible research and fair model comparisons in the community.",
    tags: ["Annotation", "Benchmark", "Gujarati", "Devanagari"],
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.04))",
  },
  {
    icon: "🔗",
    title: "Machine Learning & Deep Learning",
    description:
      "Core expertise in supervised, unsupervised, and self-supervised ML paradigms. Proficient in designing custom loss functions, attention mechanisms, and multi-task learning frameworks.",
    tags: ["PyTorch", "TensorFlow", "Transformers", "GAN"],
    color: "#2563eb",
    gradient: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(37,99,235,0.04))",
  },
  {
    icon: "🌿",
    title: "Biometric Authentication",
    description:
      "Developing explainable handwriting-based biometric authentication systems with strong privacy-preserving properties, applicable in secure access control and identity verification.",
    tags: ["Biometrics", "Privacy", "Verification", "Forensics"],
    color: "#10b981",
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(16,185,129,0.04))",
  },
];

export default function ResearchSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="research"
      className="section section-alt"
      ref={ref}
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Mesh gradient bg */}
      <div
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(124,58,237,0.06) 0%, transparent 50%)",
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
            <Brain size={14} /> Research Interests
          </span>
          <h2 className="section-title">
            Areas of{" "}
            <span className="gradient-text-purple">Research</span>
          </h2>
          <p className="section-subtitle">
            Exploring the frontiers of AI, computer vision, and human
            cognition to build the next generation of intelligent systems.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 22,
          }}
        >
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.07,
                duration: 0.55,
                ease: "easeOut",
              }}
              className="research-card"
              style={{ position: "relative", overflow: "hidden" }}
            >
              {/* Background gradient fill */}
              <div
                style={{
                  position: "absolute", inset: 0,
                  background: area.gradient,
                  opacity: 0.6,
                  transition: "opacity 0.3s ease",
                }}
              />

              {/* Content */}
              <div style={{ position: "relative" }}>
                {/* Icon circle */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `${area.color}18`,
                    border: `1.5px solid ${area.color}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    marginBottom: 18,
                    transition: "transform 0.3s ease",
                  }}
                >
                  {area.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {area.title}
                </h3>

                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.8,
                    color: "var(--text-secondary)",
                    marginBottom: 18,
                  }}
                >
                  {area.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "3px 10px",
                        background: `${area.color}10`,
                        border: `1px solid ${area.color}20`,
                        borderRadius: 50,
                        fontSize: 11,
                        fontWeight: 600,
                        color: area.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
