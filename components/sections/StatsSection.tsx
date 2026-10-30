import ProfileSection from "@/components/ProfileSection";

export default function StatsSection() {
  return (
    <ProfileSection id="stats" title="Research at a Glance" source="https://sites.google.com/view/ajayprajapati/publications">

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 24 }}>
        {[["3", "Journal articles"], ["1", "Preprint"], ["3", "Conference contributions and presentations"]].map(([value, label]) => (
          <div className="glass-card" key={label} style={{ padding: 28, textAlign: "center" }}>
            <p className="stat-number">{value}</p><p>{label}</p>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
}
