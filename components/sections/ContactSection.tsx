"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, ExternalLink, BookOpen, FlaskConical, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const contactLinks = [
  {
    label: "Email",
    value: "202491001@iiitvadodara.ac.in",
    href: "mailto:202491001@iiitvadodara.ac.in",
    icon: <Mail size={20} />,
    description: "Fastest response – usually within 24 hours",
    color: "#2563eb",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/iamajayprajapati",
    href: "https://www.linkedin.com/in/iamajayprajapati",
    icon: <LinkedinIcon size={20} />,
    description: "Professional networking and collaborations",
    color: "#0077b5",
  },
  {
    label: "GitHub",
    value: "github.com/iamajayprajapati",
    href: "https://github.com/iamajayprajapati",
    icon: <GithubIcon size={20} />,
    description: "Open-source projects and code repositories",
    color: "#333",
  },
  {
    label: "Google Scholar",
    value: "Publications & Citations",
    href: "https://scholar.google.com/citations?user=QYPq7ZIAAAAJ&hl=en",
    icon: <BookOpen size={20} />,
    description: "View research publications and citation metrics",
    color: "#4285f4",
  },
  {
    label: "ResearchGate",
    value: "researchgate.net/directory/profiles",
    href: "https://www.researchgate.net/directory/profiles",
    icon: <ExternalLink size={20} />,
    description: "Academic profile and paper sharing",
    color: "#00d0af",
  },
  {
    label: "ORCID",
    value: "0000-0003-1550-356X",
    href: "https://orcid.org/0000-0003-1550-356X",
    icon: <FlaskConical size={20} />,
    description: "Unique researcher identifier",
    color: "#a6ce39",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" ref={ref}>
      {/* Background gradient */}
      <div
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(37,99,235,0.07) 0%, transparent 55%),\n           radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.06) 0%, transparent 50%)",
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
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <span className="section-label">
            <Mail size={14} /> Get In Touch
          </span>
          <h2 className="section-title">
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Interested in collaboration, research partnerships, or just want
            to discuss AI and handwriting intelligence? I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        <div
          className="two-col-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* ── LEFT: Contact Links ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 20, fontWeight: 700,
                  color: "var(--text-primary)", marginBottom: 8,
                }}
              >
                Contact &amp; Profiles
              </h3>
              <p style={{ fontSize: 13.5, color: "var(--text-secondary)", marginBottom: 28, lineHeight: 1.7 }}>
                Reach out through any of the channels below. I am open to
                research collaborations, speaking invitations, and academic
                discussions.
              </p>

              {/* Location */}
              <div
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "14px 18px", borderRadius: 14,
                  background: "rgba(37,99,235,0.06)",
                  border: "1px solid rgba(37,99,235,0.12)",
                  marginBottom: 28,
                }}
              >
                <MapPin size={18} style={{ color: "var(--royal-blue)", flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--text-primary)" }}>
                    IIIT Vadodara
                  </p>
                  <p style={{ fontSize: 12.5, color: "var(--text-secondary)" }}>
                    Education Hub, Kevdi – Diu (U.T.) 362520, India
                  </p>
                </div>
              </div>

              {/* Contact cards */}
              <div
                className="contact-social-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                {contactLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="glass-card"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "16px",
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: `${link.color}12`,
                        border: `1px solid ${link.color}22`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: link.color, flexShrink: 0,
                      }}
                    >
                      {link.icon}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <p
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700, fontSize: 13,
                          color: "var(--text-primary)", marginBottom: 2,
                        }}
                      >
                        {link.label}
                      </p>
                      <p
                        style={{
                          fontSize: 11,
                          color: "var(--text-muted)",
                          lineHeight: 1.45,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {link.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CV Download */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                style={{ marginTop: 24 }}
              >
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", fontSize: 14 }}
                >
                  📥 Download Full CV / Resume
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card"
            style={{ padding: "36px" }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 80, height: 80, borderRadius: "50%",
                    background: "rgba(16,185,129,0.1)",
                    border: "2px solid rgba(16,185,129,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <CheckCircle size={36} style={{ color: "#10b981" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700, fontSize: 20, color: "var(--text-primary)",
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  Thank you for reaching out. I&apos;ll get back to you as soon
                  as possible, usually within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-secondary"
                  style={{ fontSize: 13, marginTop: 8 }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 19, fontWeight: 700,
                    color: "var(--text-primary)", marginBottom: 8,
                  }}
                >
                  Send a Message
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--text-secondary)", marginBottom: 28, lineHeight: 1.7 }}>
                  Have a research question, collaboration proposal, or just want
                  to say hello? Fill out the form below.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div
                    className="contact-form-row"
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
                  >
                    <div>
                      <label
                        htmlFor="contact-name"
                        style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 6, letterSpacing: "0.05em", textTransform: "uppercase" }}
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className="input-field"
                        placeholder="John Doe"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 6, letterSpacing: "0.05em", textTransform: "uppercase" }}
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        className="input-field"
                        placeholder="john@university.edu"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 6, letterSpacing: "0.05em", textTransform: "uppercase" }}
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      className="input-field"
                      placeholder="Research Collaboration / Question / Other"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 6, letterSpacing: "0.05em", textTransform: "uppercase" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      className="input-field"
                      placeholder="Write your message here…"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ resize: "vertical", minHeight: 120 }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={submitting}
                    style={{
                      justifyContent: "center",
                      opacity: submitting ? 0.7 : 1,
                      cursor: submitting ? "wait" : "pointer",
                    }}
                  >
                    <Send size={15} />
                    {submitting ? "Sending…" : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
