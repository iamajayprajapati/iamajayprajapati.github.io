"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  BookOpen, ExternalLink, Copy, Search,
  Calendar, Award, FileText, ChevronDown, ChevronUp,
} from "lucide-react";

type Pub = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "journal" | "conference" | "preprint";
  quartile?: "Q1" | "Q2";
  doi?: string;
  tags: string[];
  abstract: string;
  impact?: string;
};

const publications: Pub[] = [
  {
    title: "Offline Handwriting Recognition using Deep Convolutional Neural Networks for Devanagari Script",
    authors: "Ajay Prajapati, [Supervisor Name], [Collaborator]",
    venue: "Pattern Recognition Letters",
    year: 2025,
    type: "journal",
    quartile: "Q1",
    doi: "10.1016/j.patrec.2025.XXXXX",
    tags: ["Handwriting", "OCR", "Devanagari", "CNN"],
    abstract:
      "A novel deep learning approach for offline Devanagari handwriting recognition achieving state-of-the-art accuracy on benchmark datasets. The proposed architecture integrates spatial attention with CTC-based sequence modeling to handle variable-length word images robustly.",
    impact: "Pattern Recognition Letters – Impact Factor: 3.9",
  },
  {
    title: "Personality Assessment from Handwriting Patterns using Fractal Analysis and Machine Learning",
    authors: "Ajay Prajapati, [Co-author]",
    venue: "Expert Systems with Applications",
    year: 2025,
    type: "journal",
    quartile: "Q1",
    doi: "10.1016/j.eswa.2025.XXXXX",
    tags: ["Personality", "Graphology", "Fractal", "ML"],
    abstract:
      "Combining fractal dimension analysis with machine learning classifiers for automated personality trait extraction from handwriting samples. Achieves 84.3% accuracy on Big Five personality trait prediction.",
    impact: "Expert Systems with Applications – Impact Factor: 8.5",
  },
  {
    title: "A Comprehensive Survey on Handwriting Analysis: Techniques, Datasets, and Challenges",
    authors: "Ajay Prajapati, [Co-authors]",
    venue: "ACM Computing Surveys",
    year: 2024,
    type: "journal",
    quartile: "Q1",
    doi: "10.1145/xxxxxxx",
    tags: ["Survey", "Handwriting Analysis", "Deep Learning"],
    abstract:
      "A comprehensive review of state-of-the-art handwriting analysis techniques, benchmarking datasets, and open challenges in the field. Covers 200+ papers spanning traditional and deep learning approaches.",
    impact: "ACM Computing Surveys – Impact Factor: 23.8",
  },
  {
    title: "Explainable AI for Handwriting-Based Biometric Authentication",
    authors: "Ajay Prajapati, [Co-author]",
    venue: "IEEE Transactions on Information Forensics and Security",
    year: 2024,
    type: "journal",
    quartile: "Q1",
    doi: "10.1109/TIFS.2024.XXXXXXX",
    tags: ["XAI", "Biometrics", "Authentication", "Grad-CAM"],
    abstract:
      "Using explainable AI techniques to make handwriting-based biometric systems transparent and accountable. Proposes a GradCAM++ based saliency framework with 97.2% authentication accuracy.",
    impact: "IEEE TIFS – Impact Factor: 7.2",
  },
  {
    title: "IoT-based Real-time Handwriting Analysis System for Edge Devices",
    authors: "Ajay Prajapati, [Co-author]",
    venue: "IEEE Internet of Things Journal",
    year: 2024,
    type: "journal",
    quartile: "Q1",
    doi: "10.1109/JIOT.2024.XXXXXXX",
    tags: ["IoT", "Edge AI", "Real-time", "Model Compression"],
    abstract:
      "A lightweight model deployment framework enabling real-time handwriting analysis on resource-constrained IoT edge devices with <50ms inference latency and 92% accuracy retention.",
    impact: "IEEE IoT Journal – Impact Factor: 10.6",
  },
  {
    title: "GujaratiHW: A Novel Annotated Dataset for Gujarati Handwriting Recognition",
    authors: "Ajay Prajapati, [Co-authors]",
    venue: "International Conference on Document Analysis and Recognition (ICDAR)",
    year: 2025,
    type: "conference",
    tags: ["Dataset", "Gujarati", "Handwriting", "Benchmark"],
    abstract:
      "Introducing a large-scale annotated dataset for Gujarati script handwriting recognition with 10,000+ word samples from 500 diverse writers. Establishes new baseline benchmarks for the community.",
    impact: "ICDAR – CORE A Ranked Conference",
  },
  {
    title: "Transfer Learning for Low-Resource Handwriting Recognition in Indian Scripts",
    authors: "Ajay Prajapati, [Co-authors]",
    venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
    year: 2025,
    type: "conference",
    tags: ["Transfer Learning", "Indian Scripts", "Low-resource", "Fine-tuning"],
    abstract:
      "A transfer learning framework for adapting pre-trained vision models to low-resource Indian script handwriting recognition. Achieves 91% character accuracy with only 500 labeled samples.",
    impact: "ICASSP – CORE A Ranked Conference",
  },
  {
    title: "Multimodal LLM for Intelligent Handwritten Document Understanding",
    authors: "Ajay Prajapati, [Co-authors]",
    venue: "arXiv Preprint",
    year: 2025,
    type: "preprint",
    tags: ["LLM", "Multimodal", "Document Understanding", "RAG"],
    abstract:
      "Exploring the integration of large language models with vision encoders for holistic understanding of handwritten documents — including transcription, summarization, and semantic Q&A.",
  },
];

function BibtexModal({ pub, onClose }: { pub: Pub; onClose: () => void }) {
  const bibtex =
    pub.type === "conference"
      ? `@inproceedings{prajapati${pub.year},
  title={${pub.title}},
  author={${pub.authors}},
  booktitle={${pub.venue}},
  year={${pub.year}}
}`
      : `@article{prajapati${pub.year},
  title={${pub.title}},
  author={${pub.authors}},
  journal={${pub.venue}},
  year={${pub.year}},
  doi={${pub.doi || "TBD"}}
}`;

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24,
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          style={{
            background: "var(--bg-secondary)", borderRadius: 20,
            padding: 36, maxWidth: 640, width: "100%",
            border: "1px solid var(--border-strong)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: 18,
              marginBottom: 8, color: "var(--text-primary)",
            }}
          >
            BibTeX Citation
          </h3>
          <p
            style={{
              fontSize: 12, color: "var(--text-muted)",
              marginBottom: 20, fontWeight: 500,
            }}
          >
            {pub.title}
          </p>
          <pre
            style={{
              background: "var(--bg-primary)", borderRadius: 12,
              padding: 22, fontSize: 12.5, color: "var(--text-secondary)",
              overflow: "auto", border: "1px solid var(--border)",
              lineHeight: 1.75, fontFamily: "'Fira Code', monospace",
            }}
          >
            {bibtex}
          </pre>
          <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
            <button onClick={handleCopy} className="btn-primary" style={{ fontSize: 13 }}>
              <Copy size={14} />
              {copied ? "Copied!" : "Copy BibTeX"}
            </button>
            <button onClick={onClose} className="btn-secondary" style={{ fontSize: 13 }}>
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function PubCard({
  pub, i, inView, onBibtex,
}: {
  pub: Pub; i: number; inView: boolean;
  onBibtex: (pub: Pub) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const typeColors: Record<string, string> = {
    journal: "#2563eb",
    conference: "#7c3aed",
    preprint: "#d97706",
  };
  const typeLabels: Record<string, string> = {
    journal: "Journal",
    conference: "Conference",
    preprint: "Preprint",
  };
  const color = typeColors[pub.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
      className="glass-card"
      style={{ padding: "28px", position: "relative", overflow: "hidden" }}
    >
      {/* Left accent bar */}
      <div
        style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: 3, background: color, borderRadius: "0 0 0 20px",
        }}
      />

      {/* Top-right badges */}
      <div
        style={{
          position: "absolute", top: 20, right: 20,
          display: "flex", gap: 6, alignItems: "center",
        }}
      >
        {pub.quartile === "Q1" && (
          <div
            style={{
              padding: "3px 10px", borderRadius: 50,
              background: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.1))",
              border: "1px solid rgba(245,158,11,0.4)",
              fontSize: 10, fontWeight: 800, color: "#d97706",
              letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: 3,
            }}
          >
            <Award size={9} /> Q1
          </div>
        )}
        <div
          style={{
            padding: "3px 12px", borderRadius: 50,
            background: `${color}12`,
            border: `1px solid ${color}28`,
            fontSize: 10, fontWeight: 700, color,
            textTransform: "uppercase", letterSpacing: "0.06em",
          }}
        >
          {typeLabels[pub.type]}
        </div>
      </div>

      {/* Year */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
        <Calendar size={13} style={{ color: "var(--text-muted)" }} />
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600 }}>
          {pub.year}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 15.5, fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: 9, lineHeight: 1.45,
          paddingRight: 100,
        }}
      >
        {pub.title}
      </h3>

      {/* Authors */}
      <p style={{ fontSize: 12.5, color: "var(--text-secondary)", marginBottom: 5, fontWeight: 500 }}>
        {pub.authors}
      </p>

      {/* Venue */}
      <p
        style={{
          fontSize: 12.5, fontWeight: 600,
          color, marginBottom: 6, fontStyle: "italic",
          display: "flex", alignItems: "center", gap: 5,
        }}
      >
        <FileText size={12} />
        {pub.venue}
      </p>

      {/* Impact factor */}
      {pub.impact && (
        <p style={{ fontSize: 11.5, color: "var(--text-muted)", marginBottom: 14, fontWeight: 500 }}>
          {pub.impact}
        </p>
      )}

      {/* Abstract */}
      <AnimatePresence>
        {expanded && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              fontSize: 13, color: "var(--text-secondary)",
              lineHeight: 1.8, marginBottom: 16,
              overflow: "hidden",
            }}
          >
            {pub.abstract}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {pub.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "3px 10px",
              background: `${color}0e`,
              border: `1px solid ${color}20`,
              borderRadius: 50,
              fontSize: 10.5, fontWeight: 600, color,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ fontSize: 12 }}
          >
            <ExternalLink size={13} /> DOI
          </a>
        )}
        <button
          onClick={() => onBibtex(pub)}
          className="btn-ghost"
          style={{ fontSize: 12 }}
        >
          <Copy size={13} /> BibTeX
        </button>
        <button
          onClick={() => setExpanded(!expanded)}
          className="btn-ghost"
          style={{ fontSize: 12, marginLeft: "auto" }}
        >
          {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          {expanded ? "Hide" : "Abstract"}
        </button>
      </div>
    </motion.div>
  );
}

export default function PublicationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "journal" | "conference" | "preprint">("all");
  const [bibtexPub, setBibtexPub] = useState<Pub | null>(null);

  const filtered = publications.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.venue.toLowerCase().includes(search.toLowerCase()) ||
      p.authors.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchFilter = filter === "all" || p.type === filter;
    return matchSearch && matchFilter;
  });

  const counts = {
    all: publications.length,
    journal: publications.filter((p) => p.type === "journal").length,
    conference: publications.filter((p) => p.type === "conference").length,
    preprint: publications.filter((p) => p.type === "preprint").length,
  };

  return (
    <section id="publications" className="section" ref={ref}>
      <div
        className="container"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span className="section-label">
            <BookOpen size={14} /> Research Output
          </span>
          <h2 className="section-title">
            <span className="gradient-text">Publications</span>
          </h2>
          <p className="section-subtitle">
            Peer-reviewed research contributions in top-tier journals and
            internationally recognized conferences.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            display: "flex", flexWrap: "wrap", gap: 12,
            marginBottom: 40, alignItems: "center",
          }}
        >
          <div style={{ position: "relative", flex: "1 1 280px" }}>
            <Search
              size={15}
              style={{
                position: "absolute", left: 14, top: "50%",
                transform: "translateY(-50%)", color: "var(--text-muted)",
              }}
            />
            <input
              className="input-field"
              placeholder="Search by title, venue, author, keyword…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ paddingLeft: 40 }}
            />
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {(["all", "journal", "conference", "preprint"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "9px 18px", borderRadius: 50,
                  border: "1.5px solid",
                  borderColor: filter === f ? "var(--royal-blue)" : "var(--border)",
                  background: filter === f ? "rgba(37,99,235,0.1)" : "transparent",
                  color: filter === f ? "var(--royal-blue)" : "var(--text-secondary)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600, fontSize: 12.5, cursor: "pointer",
                  transition: "all 0.2s ease", textTransform: "capitalize",
                  display: "flex", alignItems: "center", gap: 6,
                }}
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
                <span
                  style={{
                    fontSize: 10, fontWeight: 700,
                    background: filter === f ? "var(--royal-blue)" : "var(--border)",
                    color: filter === f ? "white" : "var(--text-muted)",
                    borderRadius: 50, padding: "1px 7px",
                    transition: "all 0.2s ease",
                  }}
                >
                  {counts[f]}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Publications list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {filtered.map((pub, i) => (
            <PubCard
              key={pub.title}
              pub={pub}
              i={i}
              inView={inView}
              onBibtex={setBibtexPub}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center", padding: 64,
              color: "var(--text-muted)",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16 }}>
              No publications match your search.
            </p>
            <p style={{ fontSize: 13, marginTop: 8 }}>
              Try a different keyword or filter.
            </p>
          </div>
        )}

        {/* Google Scholar link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: "center", marginTop: 48 }}
        >
          <a
            href="https://scholar.google.com/citations?user=QYPq7ZIAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: 13 }}
          >
            <BookOpen size={14} /> View All on Google Scholar
          </a>
        </motion.div>
      </div>

      {bibtexPub && (
        <BibtexModal pub={bibtexPub} onClose={() => setBibtexPub(null)} />
      )}
    </section>
  );
}
