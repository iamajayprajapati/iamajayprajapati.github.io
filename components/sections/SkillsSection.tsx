import ProfileSection from "@/components/ProfileSection";

export default function SkillsSection() {
  return (
    <ProfileSection id="skills" title="Training Topics" source="https://sites.google.com/view/ajayprajapati/workshops">

      <p style={{ textAlign: "center", marginBottom: 24 }}>Topics covered by documented training and coursework.</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {["Python for Data Science", "Machine Learning", "Deep Learning", "MATLAB Optimization", "Citation & Reference Management", "Academic Writing"].map((topic) => (
          <span className="glass-card" key={topic} style={{ padding: "16px 24px" }}>{topic}</span>
        ))}
      </div>
    </ProfileSection>
  );
}
