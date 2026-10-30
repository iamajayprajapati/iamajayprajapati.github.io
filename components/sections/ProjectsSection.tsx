import ProfileSection from "@/components/ProfileSection";
import ExpandableList from "@/components/ExpandableList";
const projects = [
  {
    "title": "Offline Handwritten Text Recognition Using Convolutional Recurrent Neural Network",
    "subtitle": "Machine Learning class project",
    "description": "Guidance: Dr. Jignesh S. Bhatt, IIIT Vadodara",
    "stack": [],
    "tags": [],
    "github": "https://sites.google.com/view/ajayprajapati/projects",
    "color": "#2563eb",
    "emoji": "📚"
  },
  {
    "title": "Facial Mask Recognition Using Residual Network",
    "subtitle": "Topics in Deep Learning class project",
    "description": "Guidance: Dr. Jignesh S. Bhatt, IIIT Vadodara",
    "stack": [],
    "tags": [],
    "github": "https://sites.google.com/view/ajayprajapati/projects",
    "color": "#2563eb",
    "emoji": "📚"
  },
  {
    "title": "Music Creation and Decomposition through Non-negative Matrix Factorization",
    "subtitle": "Topics in Deep Learning class project",
    "description": "Guidance: Dr. Jignesh S. Bhatt, IIIT Vadodara",
    "stack": [],
    "tags": [],
    "github": "https://sites.google.com/view/ajayprajapati/projects",
    "color": "#2563eb",
    "emoji": "📚"
  },
  {
    "title": "Feature Selection and Classification Using Entropy, Information Gain, and Mutual Information",
    "subtitle": "Information Theory class project",
    "description": "Guidance: Dr. Jignesh Patel, IIIT Vadodara",
    "stack": [],
    "tags": [],
    "github": "https://sites.google.com/view/ajayprajapati/projects",
    "color": "#2563eb",
    "emoji": "📚"
  },
  {
    "title": "Quantifying Paper Quality Using Multi-Criteria Decision Making (MCDM)",
    "subtitle": "Major project",
    "description": "Guidance: Dr. Sachchida Nand Chaurasia, BHU",
    "stack": [],
    "tags": [],
    "github": "https://sites.google.com/view/ajayprajapati/projects",
    "color": "#2563eb",
    "emoji": "📚"
  },
  {
    "title": "Gender and Age Detection",
    "subtitle": "Minor project, September 2022 - February 2023",
    "description": "Guidance: Dr. Sachchida Nand Chaurasia, BHU",
    "stack": [],
    "tags": [],
    "github": "https://sites.google.com/view/ajayprajapati/projects",
    "color": "#2563eb",
    "emoji": "📚"
  },
  {
    "title": "StudyVeda",
    "subtitle": "B.Tech e-commerce website project",
    "description": "Guidance: Mrs. Arju Malik",
    "stack": [],
    "tags": [],
    "github": "https://sites.google.com/view/ajayprajapati/projects",
    "color": "#2563eb",
    "emoji": "📚"
  }
];

export default function ProjectsSection() {
  return (
    <ProfileSection id="projects" title="Projects" source="https://sites.google.com/view/ajayprajapati/projects">
      <ExpandableList limit={3} label="projects" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 28 }}>
        {projects.map((item, index) => (
          <article className="glass-card academic-entry" key={index}>
            <h3>{item.title}</h3>
            <p className="entry-meta">{item.subtitle}</p>
            <details className="entry-detail">
              <summary>Read details</summary>
              <p>{item.description}</p>
              <a href="https://sites.google.com/view/ajayprajapati/projects" target="_blank" rel="noopener noreferrer">View source</a>
            </details>
          </article>
        ))}
      </ExpandableList>
    </ProfileSection>
  );
}
