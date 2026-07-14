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
    title: "Further analysis of multivariable fractal functions",
    authors: "Amit Bawalia, Vineeta Basotia, and Ajay Prajapati",
    venue: "Arabian Journal of Mathematics",
    year: 2025,
    type: "journal",
    tags: ["Fractal Functions", "Multivariable Analysis"],
    abstract: "Further analysis of multivariable fractal functions. Arabian Journal of Mathematics (2025): 1-17.",
  },
  {
    title: "Fractal surfaces in Lebesgue spaces with respect to fractal measures and associated fractal operators",
    authors: "Rattan Lal, Subhash Chandra, and Ajay Prajapati",
    venue: "Chaos, Solitons & Fractals",
    year: 2024,
    type: "journal",
    quartile: "Q1",
    tags: ["Fractal Surfaces", "Lebesgue Spaces", "Fractal Operators"],
    abstract: "Fractal surfaces in Lebesgue spaces with respect to fractal measures and associated fractal operators. Chaos, Solitons & Fractals 181 (2024): 114684",
  },
  {
    title: "Non-stationary ϕ-contractions and associated fractals",
    authors: "Amit, Vineeta Basotia, and Ajay Prajapati",
    venue: "The Journal of Analysis",
    year: 2023,
    type: "journal",
    tags: ["ϕ-contractions", "Fractals"],
    abstract: "Non-stationary ϕ-contractions and associated fractals. The Journal of Analysis 31, no. 2 (2023): 1375-1391.",
  },
  {
    title: "Some results on Continuous dependence of fractal functions on the Sierpiński gasket",
    authors: "Vishal Agrawal, Ajay Prajapati, Abhilash Sahu, and Tanmoy Som",
    venue: "arXiv Preprint",
    year: 2023,
    type: "preprint",
    doi: "arXiv:2304.11866",
    tags: ["Fractal Functions", "Sierpiński gasket"],
    abstract: "Some results on Continuous dependence of fractal functions on the Sierpiński gasket. arXiv preprint arXiv:2304.11866 (2023).",
  },
  {
    title: "Personality Classification from Handwriting Using Pretrained CNN Architectures",
    authors: "Ajay Prajapati, Deepika Gupta, and Dharmendra Singh",
    venue: "International Conference on Harnessing Artificial Intelligence for Healthcare & Climate Resilience (HACER 2025)",
    year: 2025,
    type: "conference",
    tags: ["Handwriting Analysis", "CNN", "Personality Classification"],
    abstract: "Personality Classification from Handwriting Using Pretrained CNN Architectures. In International Conference on Harnessing Artificial Intelligence for Healthcare & Climate Resilience: Path to Sustainable Future (HACER 2025), December 19–20, 2025.",
  },
  {
    title: "Offline Handwritten Text Recognition Using Convolutional Recurrent Neural Network",
    authors: "Ajay Prajapati",
    venue: "9th Prof. Vijaya Agarwala Memorial National Workshop on Microwave Absorbing Materials (VAMMAM-2025)",
    year: 2025,
    type: "conference",
    tags: ["Handwriting Recognition", "CRNN", "Offline Text"],
    abstract: "Presented a work titled Offline Handwritten Text Recognition Using Convolutional Recurrent Neural Network at 9th Prof. Vijaya Agarwala Memorial National Workshop on Microwave Absorbing Materials (VAMMAM-2025), IIIT Vadodara.",
  },
  {
    title: "A Note on Fractal Antenna and Fractal Interpolation",
    authors: "Ajay Prajapati",
    venue: "Conference on Functional Analysis and Fractals (CFAF - 2024)",
    year: 2024,
    type: "conference",
    tags: ["Fractal Antenna", "Fractal Interpolation"],
    abstract: "Presented a work titled A Note on Fractal Antenna and Fractal Interpolation at Conference on Functional Analysis and Fractals (CFAF - 2024), IIIT Allahabad.",
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
