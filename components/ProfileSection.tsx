import type { ReactNode } from "react";

const sectionLabels: Record<string, string> = {
  about: "Background & education", research: "Research focus", projects: "Selected academic work",
  experience: "Research & service", teaching: "Teaching assistantships", workshops: "Continued learning",
  skills: "Methods & training", awards: "Academic milestones", contact: "Connect",
};

export default function ProfileSection({ id, title, description, children }: {
  id: string; title: string; description?: string; children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="container scholar-section-layout">
        <div className="section-heading scholar-section-heading">
          <p className="section-kicker">{sectionLabels[id] || "Research overview"}</p>
          <h2 className="section-title">{title}</h2>
          {description && <p className="section-subtitle">{description}</p>}
        </div>
        <div className="scholar-section-content">{children}</div>
      </div>
    </section>
  );
}
