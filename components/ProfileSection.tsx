import type { ReactNode } from "react";

export default function ProfileSection({ id, title, description, source, children }: {
  id: string; title: string; description?: string; source: string; children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-heading" style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 className="section-title">{title}</h2>
          {description && <p className="section-subtitle">{description}</p>}
          <a href={source} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 16, color: "var(--royal-blue)" }}>View source</a>
        </div>
        {children}
      </div>
    </section>
  );
}
