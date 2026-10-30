import ProfileSection from "@/components/ProfileSection";

export default function ResearchSection() {
  return (
    <ProfileSection id="research" title="Research Interests" source="https://sites.google.com/view/ajayprajapati/home">

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 24 }}>
        {["Machine Learning", "Deep Learning", "Handwriting Analysis", "Fractals"].map((area) => (
          <article className="glass-card" key={area} style={{ padding: 32 }}><h3>{area}</h3></article>
        ))}
      </div>
    </ProfileSection>
  );
}
