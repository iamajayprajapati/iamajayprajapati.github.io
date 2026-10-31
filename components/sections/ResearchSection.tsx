import ProfileSection from "@/components/ProfileSection";

export default function ResearchSection() {
  return (
    <ProfileSection id="research" title="Research Interests">

      <div className="research-topics">
        {["Machine Learning", "Deep Learning", "Handwriting Analysis", "Fractals"].map((area, index) => (
          <article className="research-topic" key={area}><span aria-hidden="true">0{index + 1}</span><h3>{area}</h3></article>
        ))}
      </div>
    </ProfileSection>
  );
}
