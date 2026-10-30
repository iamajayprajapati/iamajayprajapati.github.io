import ProfileSection from "@/components/ProfileSection";
import ExpandableList from "@/components/ExpandableList";
const sourceBase = "https://sites.google.com/view/ajayprajapati";
const awards = [
  {
    title: "Program & Website Committee Member",
    org: "IIIT Allahabad academic events",
    year: "2024–2025",
    description: "Committee service for MADP 2024, CGAC 2024, FGRF 2024, and GAANA 2025.",
    type: "service", icon: "🤝", color: "#29485f",
    source: `${sourceBase}/academic-activities`,
  },
  {
    title: "Research Presentation at CFAF 2024",
    org: "IIIT Allahabad",
    year: "2024",
    description: "Presented research on fractal antennas and fractal interpolation at CFAF 2024.",
    type: "presentation", icon: "🎤", color: "#29485f",
    source: `${sourceBase}/publications`,
  },
  {
    title: "Mendeley Training Certification",
    org: "IQAC, NSB Bangalore & Mendeley",
    year: "28 March 2024",
    description: "Received a training certificate of achievement in research reference management.",
    type: "certification", icon: "📜", color: "#29485f",
    source: `${sourceBase}/workshops`,
  },
  {
    title: "ADASIVA 2025 Summer School",
    org: "IIIT Allahabad",
    year: "7–12 July 2025",
    description: "Participated in advanced study of deep architectures for signal, image, and vision applications.",
    type: "training", icon: "🧠", color: "#29485f",
    source: `${sourceBase}/workshops`,
  },
  {
    title: "Emerging Technologies Short Course",
    org: "NIT Jalandhar",
    year: "21–25 July 2025",
    description: "Participated in a week-long online course covering computing and communication technologies.",
    type: "training", icon: "💻", color: "#29485f",
    source: `${sourceBase}/workshops`,
  },
];

export default function AwardsSection() {
  return (
    <ProfileSection id="awards" title="Academic Achievements" source="https://sites.google.com/view/ajayprajapati/academic-activities">
      <ExpandableList limit={2} label="academic achievements" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 28 }}>
        {awards.map((item, index) => (
          <article className="glass-card academic-entry" key={index}>
            <h3>{item.title}</h3>
            <p className="entry-meta">{item.org + " / " + item.year}</p>
            <details className="entry-detail">
              <summary>Read details</summary>
              <p>{item.description}</p>
              <a href={item.source} target="_blank" rel="noopener noreferrer">View source</a>
            </details>
          </article>
        ))}
      </ExpandableList>
    </ProfileSection>
  );
}
