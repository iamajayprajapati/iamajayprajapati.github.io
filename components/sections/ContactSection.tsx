import ProfileSection from "@/components/ProfileSection";
const links = [["Email", "mailto:202491001@iiitvadodara.ac.in", "202491001@iiitvadodara.ac.in"], ["GitHub", "https://github.com/iamajayprajapati", "iamajayprajapati"], ["LinkedIn", "https://www.linkedin.com/in/iamajayprajapati/", "Ajay Prajapati"], ["Google Scholar", "https://scholar.google.co.in/citations?hl=en&user=QYPq7ZIAAAAJ", "Publications & citations"], ["ResearchGate", "https://www.researchgate.net/profile/Ajay-Prajapati-9", "Ajay Prajapati"]];
export default function ContactSection() {
  return (
    <ProfileSection id="contact" title="Contact">

      <p style={{ textAlign: "center", marginBottom: 28 }}>Education Hub, Kevdi - Diu (U.T.), 362520</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 20 }}>
        {links.map(([label, href, text]) => (
          <a className="glass-card" key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" style={{ padding: 24, overflowWrap: "anywhere" }}>
            <h3>{label}</h3><p style={{ color: "var(--royal-blue)", marginTop: 12 }}>{text}</p>
          </a>
        ))}
      </div>
    </ProfileSection>
  );
}
