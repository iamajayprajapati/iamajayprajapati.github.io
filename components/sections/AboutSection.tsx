import ExpandableList from "@/components/ExpandableList";
import ProfileSection from "@/components/ProfileSection";
const education = [["Ph.D. in Computer Science and Engineering", "IIIT Vadodara, International Campus Diu", "Pursuing"], ["M.Sc. in Computer Science", "Banaras Hindu University", "2023"], ["B.Tech. in Computer Science and Engineering", "Dr. A.P.J. Abdul Kalam Technical University", "2021"], ["Intermediate (10+2)", "UP Board", "2017"], ["High School", "UP Board", "2015"]];
export default function AboutSection() {
  return (
    <ProfileSection id="about" title="Education & Background">

      <p style={{ maxWidth: 760, margin: "0 auto 32px", color: "var(--text-secondary)" }}>
        I am Ajay Prajapati, a Ph.D. scholar in Computer Science and Engineering
        at IIIT Vadodara. My research interests include machine learning, deep
        learning, handwriting analysis, and fractals.
      </p>
      <h3 style={{ marginBottom: 20 }}>Education</h3>
      <ExpandableList limit={2} label="education" style={{ display: "grid", gap: 16 }}>
        {education.map(([degree, institution, year]) => (
          <article className="glass-card" key={degree} style={{ padding: 24 }}>
            <h4>{degree}</h4>
            <p style={{ color: "var(--text-secondary)", marginTop: 8 }}>{institution}</p>
            <p style={{ color: "var(--royal-blue)", marginTop: 8 }}>{year}</p>
          </article>
        ))}
      </ExpandableList>
    </ProfileSection>
  );
}
