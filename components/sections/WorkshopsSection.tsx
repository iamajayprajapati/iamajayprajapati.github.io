"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Calendar, MapPin, Award } from "lucide-react";

const workshops = [
  {
    title: "Global Wales (UK)–India Workshop on Tackling Online Crimes Against Women and Children",
    org: "Cardiff University",
    year: "April 2026",
    description: "Gained interdisciplinary insights into cyber law, online safety, and policy responses for protecting women and children in digital spaces.",
    icon: "🌍",
    color: "#2563eb",
  },
  {
    title: "Medical Intervention Using Smart Technologies (MIST) - Online Short-Term Course",
    org: "IIIT ALLAHABAD",
    year: "19-20 March, 2026",
    description: "Participated in the online short-term certificate course.",
    icon: "⚕️",
    color: "#7c3aed",
  },
  {
    title: "ANRF-PAIR Hands on workshop on generative AI and large language models",
    org: "IIIT Nagpur in association with Nvidia Deep learning (DLI)",
    year: "4-14 March, 2026",
    description: "Sponsored by ANRF-PAIR (Hub: IIT Bombay).",
    icon: "🤖",
    color: "#10b981",
  },
  {
    title: "FDP on Integrating Generative AI in Education: Impacts on TLE",
    org: "E&ICT Academy PDPM IIITDM Jabalpur",
    year: "Feb 23 - Mar 1, 2026",
    description: "Participated in the Faculty Development Programme.",
    icon: "🎓",
    color: "#f59e0b",
  },
  {
    title: "6th International Workshop on Generative AI and Human Robot Interactions",
    org: "CIR IIIT-A & IHFC (IIT Delhi)",
    year: "Jan 23-25, 2026",
    description: "Participated in the international workshop.",
    icon: "🤖",
    color: "#ec4899",
  },
  {
    title: "Advancement in Computational Drug Design (ACDD-2025)",
    org: "Dept of Applied Sciences, IIITA",
    year: "Dec 2-4, 2025",
    description: "National Webinar and Schrödinger Life Science Hands-on Training Program.",
    icon: "🧬",
    color: "#3b82f6",
  },
  {
    title: "ATAL FDP on Exploratory Data Analytics (EDA) - Tools and Techniques",
    org: "Velammal College of Engineering & Technology",
    year: "Nov 24-29, 2025",
    description: "Participated & completed AICTE Training And Learning Academy Faculty Development Program.",
    icon: "📊",
    color: "#8b5cf6",
  },
  {
    title: "Online Short Term Programme on Academic Writing for Research Scholars",
    org: "CFDET, IIT (BHU) Varanasi",
    year: "Nov 10-15, 2025",
    description: "Under Malaviya Mission Teacher Training program (MM-TTP).",
    icon: "✍️",
    color: "#06b6d4",
  },
  {
    title: "Foundations of Data Science and Machine Learning for STEM Professionals",
    org: "NIT Warangal",
    year: "Nov 3-15, 2025",
    description: "Attended 12-Day Online Refresher Course.",
    icon: "💻",
    color: "#f97316",
  },
  {
    title: "Machine Learning Assisted IoT Networks Towards Performance Improvement",
    org: "Dept of CS, Institute of Science, BHU",
    year: "Oct 26, 2025",
    description: "Attended One-Day Workshop under ANRF sponsored project.",
    icon: "📡",
    color: "#14b8a6",
  },
  {
    title: "Applied Deep Learning using Python",
    org: "NIT Kurukshetra",
    year: "Sep 1-6, 2025",
    description: "Participated in Short Term Course.",
    icon: "🧠",
    color: "#6366f1",
  },
  {
    title: "Emerging Technologies in Computing and Communication",
    org: "NIT Jalandhar",
    year: "Jul 21-25, 2025",
    description: "One Week Online Short Term Course.",
    icon: "🌐",
    color: "#a855f7",
  },
  {
    title: "7th Summer School on Advances in Deep Architectures for Signal, Image and Vision Applications (ADASIVA)",
    org: "IIIT Allahabad",
    year: "Jul 7-12, 2025",
    description: "Participated in the summer school.",
    icon: "👁️",
    color: "#eab308",
  },
  {
    title: "Emerging Research and Innovations in AI Applications in Mathematics, Bio-Sciences, and Management",
    org: "NIMS University, Jaipur",
    year: "Jun 26 - Jul 2, 2025",
    description: "Participated in the International Faculty Development Program (FDP).",
    icon: "📈",
    color: "#ef4444",
  },
  {
    title: "Advanced Optimization Techniques using MATLAB",
    org: "Electronics & ICT Academies (MeitY)",
    year: "Feb 17-28, 2025",
    description: "Participated in Online Training Programme.",
    icon: "⚙️",
    color: "#0ea5e9",
  },
  {
    title: "Mendeley Training Certification of Achievement",
    org: "IQAC, NSB Bangalore in collab with Mendeley",
    year: "Mar 28, 2024",
    description: "Certification of Achievement.",
    icon: "📜",
    color: "#84cc16",
  },
  {
    title: "Citation & Reference Management for Scholarly Writing",
    org: "IQAC, NSB Bangalore & Mendeley",
    year: "Feb 26-28, 2024",
    description: "Three-Day Faculty Development Programme.",
    icon: "📚",
    color: "#10b981",
  },
  {
    title: "4th International Workshop on Generative AI and Human Robot Interactions",
    org: "CIR IIIT-A & IHFC (IIT Delhi)",
    year: "Feb 16-18, 2024",
    description: "Attended the international workshop.",
    icon: "🤖",
    color: "#db2777",
  },
  {
    title: "Advanced Entrepreneurship and Skill Development Program (E-SDP)",
    org: "IIIT Allahabad (Sponsored by MSME)",
    year: "Feb 12-16, 2024",
    description: "Capacity Building Using Data Driven Technologies for Budding Entrepreneur of Future.",
    icon: "💡",
    color: "#f59e0b",
  },
  {
    title: "NEP 2020 Orientation & Sensitization Programme",
    org: "MM-TTP, IIT (BHU) / BHU",
    year: "Feb 1-28, 2024",
    description: "Participated under Malaviya Mission Teacher Training Programme.",
    icon: "🇮🇳",
    color: "#2563eb",
  },
  {
    title: "IIT DELHI - INRIA WORKSHOP",
    org: "IIT Delhi (IFCPAR/CEFIPRA)",
    year: "Oct 25-27, 2023",
    description: "Attended Indo-French Centre for the Promotion of Advanced Research workshop.",
    icon: "🤝",
    color: "#8b5cf6",
  },
  {
    title: "IoT, 5G Network Security, 5G PHY, and LiFi Training Workshops",
    org: "IIT Delhi",
    year: "October 2023",
    description: "Attended multiple workshops on IoT, 5G Network Security, 5G Physical Layer, and LiFi.",
    icon: "📡",
    color: "#06b6d4",
  },
  {
    title: "Machine Learning and its Application in IoT, Computer Vision and Cloud Computing (MICC-2023)",
    org: "NIT Jamshedpur",
    year: "Jul 10-14, 2023",
    description: "One Week Online Short Term Course.",
    icon: "☁️",
    color: "#6366f1",
  },
  {
    title: "MS OFFICE SKILL ENRICHMENT PROGRAMME (MOSEP)",
    org: "Skill Development Cell, BHU & CIMS",
    year: "May 19-27, 2023",
    description: "Participated in the enrichment programme.",
    icon: "📊",
    color: "#f97316",
  },
  {
    title: "One Week Workshop on Communication Skills",
    org: "Institute of Science & Dept of Extension Education, BHU",
    year: "Dec 7-14, 2022",
    description: "Participated in communication skills workshop.",
    icon: "🗣️",
    color: "#14b8a6",
  },
  {
    title: "Fractal Geometry And Related Fields (FGRF)",
    org: "Dept of Applied Sciences, IIITA",
    year: "Sep 25 - Oct 1, 2022",
    description: "Participated in the workshop.",
    icon: "📐",
    color: "#eab308",
  },
  {
    title: "4th workshop on Machine Learning and Data Analytics (MLDA'21)",
    org: "IIIT Allahabad",
    year: "May 28 - Jun 11, 2021",
    description: "Participated in the machine learning workshop.",
    icon: "📈",
    color: "#ef4444",
  },
  {
    title: "Python for Data Science",
    org: "IBM Developer Skills Network",
    year: "Sep 26, 2020",
    description: "Attended powered by IBM.",
    icon: "🐍",
    color: "#2563eb",
  },
  {
    title: "Artificial Intelligence with Machine Learning Workshops",
    org: "Kyrlon Technologies & Effervescence IIIT Allahabad",
    year: "Aug 2020",
    description: "Participated in multiple online workshop series.",
    icon: "🧠",
    color: "#8b5cf6",
  },
  {
    title: "Workshop on Python during Robothlon-2019",
    org: "IIT Delhi",
    year: "Oct 3-5, 2019",
    description: "Participated during Robothlon-2019.",
    icon: "🐍",
    color: "#10b981",
  }
];

export default function WorkshopsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="workshops" className="section" ref={ref}>
      {/* Background decoration */}
      <div
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at 10% 20%, rgba(139,92,246,0.03) 0%, transparent 60%)",
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
            <BookOpen size={14} /> Workshops & Training
          </span>
          <h2 className="section-title">
            Workshops &{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Continuous learning and skill development through national and international workshops, 
            training programs, and faculty development courses.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {workshops.map((ws, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 > 1 ? 0 : i * 0.05, duration: 0.55 }}
              className="glass-card"
              style={{
                padding: "24px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Colorful gradient border at top */}
              <div
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: ws.color,
                }}
              />

              <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 16 }}>
                <div
                  style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: `${ws.color}15`, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: 20, flexShrink: 0,
                    border: `1px solid ${ws.color}30`,
                  }}
                >
                  {ws.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 15, fontWeight: 700, color: "var(--text-primary)",
                      lineHeight: 1.4, marginBottom: 8,
                    }}
                  >
                    {ws.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 12.5, fontWeight: 600, color: ws.color,
                      display: "flex", alignItems: "center", gap: 6, marginBottom: 4,
                    }}
                  >
                    <Award size={13} /> {ws.org}
                  </p>
                  <p
                    style={{
                      fontSize: 11.5, color: "var(--text-muted)",
                      display: "flex", alignItems: "center", gap: 5,
                    }}
                  >
                    <Calendar size={11} /> {ws.year}
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)",
                  flexGrow: 1,
                }}
              >
                {ws.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
