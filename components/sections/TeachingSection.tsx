import ProfileSection from "@/components/ProfileSection";
import ExpandableList from "@/components/ExpandableList";
const courses = [
  { code: "CS307", title: "Artificial Intelligence", role: "Teaching Assistant", institution: "IIIT Vadodara", semester: "August - December 2026", description: "Teaching Assistant for Artificial Intelligence.", color: "#29485f" },
  { code: "AI261, CS363", title: "Operating System", role: "Teaching Assistant", institution: "IIIT Vadodara", semester: "August - December 2026", description: "Teaching Assistant for Operating System.", color: "#29485f" },
  {
    code: "AICTE QIP",
    title: "PG Certificate Program on Artificial Intelligence",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara (Sponsored by AICTE)",
    semester: "March 2026 – July 2026",
    description: "Assisted in the AICTE QIP PG Certificate Program on Artificial Intelligence.",
    color: "#29485f",
  },
  {
    code: "CS448",
    title: "Operating System",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "January – May 2026",
    description: "Teaching Assistant for Operating System (CS448).",
    color: "#29485f",
  },
  {
    code: "CS268",
    title: "Computer Organization and Architecture",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "January – May 2026",
    description: "Teaching Assistant for Computer Organization and Architecture.",
    color: "#29485f",
  },
  {
    code: "CS/IT261",
    title: "Object Oriented Programming",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "August – December 2025",
    description: "Teaching Assistant for Object Oriented Programming.",
    color: "#29485f",
  },
  {
    code: "CS363",
    title: "Operating System",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "August – December 2025",
    description: "Teaching Assistant for Operating System (CS363).",
    color: "#29485f",
  },
  {
    code: "AICTE QIP",
    title: "PG Certificate Program on AI and Cyber Security",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara (Sponsored by AICTE)",
    semester: "23 June 2025 – 4 July 2025",
    description: "Assisted in the AICTE QIP PG Certificate Program on AI and Cyber Security for Faculty in Core Engineering Disciplines.",
    color: "#29485f",
  },
  {
    code: "CS/IT326",
    title: "Topics in Security and Privacy",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "January – May 2025",
    description: "Teaching Assistant for Topics in Security and Privacy.",
    color: "#29485f",
  },
  {
    code: "MA102",
    title: "Linear Algebra and Matrices",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "January – May 2025",
    description: "Teaching Assistant for Linear Algebra and Matrices.",
    color: "#29485f",
  },
  {
    code: "CS361",
    title: "Computer Network",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "August – December 2024",
    description: "Teaching Assistant for Computer Network.",
    color: "#29485f",
  },
  {
    code: "CS363",
    title: "Operating System",
    role: "Teaching Assistant",
    institution: "IIIT Vadodara",
    semester: "August – December 2024",
    description: "Teaching Assistant for Operating System (CS363).",
    color: "#29485f",
  },
];

export default function TeachingSection() {
  return (
    <ProfileSection id="teaching" title="Teaching" source="https://sites.google.com/view/ajayprajapati/academic-activities">
      <ExpandableList limit={3} label="teaching" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 28 }}>
        {courses.map((item, index) => (
          <article className="glass-card academic-entry" key={index}>
            <h3>{item.title}</h3>
            <p className="entry-meta">{item.code + " / " + item.semester}</p>
            <details className="entry-detail">
              <summary>Read details</summary>
              <p>{item.role + " at " + item.institution + ". " + item.description}</p>
              <a href="https://sites.google.com/view/ajayprajapati/academic-activities" target="_blank" rel="noopener noreferrer">View source</a>
            </details>
          </article>
        ))}
      </ExpandableList>
    </ProfileSection>
  );
}
