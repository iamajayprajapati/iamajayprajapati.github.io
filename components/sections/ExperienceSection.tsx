import SlidingDisclosure from "@/components/SlidingDisclosure";
import ProfileSection from "@/components/ProfileSection";
import ExpandableList from "@/components/ExpandableList";
type ExpItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  type: "research" | "teaching" | "internship" | "project";
  description: string;
  highlights: string[];
  tech?: string[];
  color: string;
  icon: string;
  link?: string;
};

const experiences: ExpItem[] = [
  {
    role: "Project Work: Wireless Sensor Networks",
    org: "CST Uttar Pradesh / IIIT Allahabad", location: "Allahabad, India",
    period: "January - April 2024", type: "project",
    description: "Optimal Clustering using Hybrid Techniques in Wireless Sensor Networks (ID 1196).",
    highlights: ["Supervisor: Dr. Rajat Kumar Singh"], color: "#29485f", icon: "R",
    link: "https://sites.google.com/view/ajayprajapati/projects",
  },
  {
    role: "Summer School on Deep Learning", org: "IIITDM Jabalpur", location: "India",
    period: "19 May - 14 June 2025", type: "internship",
    description: "Shaping the Future of Artificial Intelligence.", highlights: [], color: "#29485f", icon: "AI",
    link: "https://sites.google.com/view/ajayprajapati/internship",
  },
  {
    role: "SERB Vritika Internship", org: "IIIT Allahabad", location: "Allahabad, India",
    period: "15 December 2023 - 19 January 2024", type: "internship",
    description: "Photoacoustic tomography: equipment training, data acquisition, and image reconstruction.",
    highlights: ["Supervisor: Dr. Ratan K. Saha"], color: "#29485f", icon: "R",
    link: "https://sites.google.com/view/ajayprajapati/internship",
  },
  {
    role: "Summer Internship", org: "IIIT Allahabad", location: "Allahabad, India",
    period: "May - July 2021", type: "internship",
    description: "Graph Theoretic Properties of Some Fractals.",
    highlights: ["Supervisor: Dr. Saurabh Verma"], color: "#29485f", icon: "R",
    link: "https://sites.google.com/view/ajayprajapati/internship",
  },

  {
    role: "PhD Research Scholar",
    org: "Indian Institute of Information Technology Vadodara (IIITV)",
    location: "Diu, India",
    period: "Pursuing",
    type: "research",
    description:
      "Ph.D. in Computer Science and Engineering at IIIT Vadodara, International Campus Diu.",
    highlights: [
      "Focusing on Machine Learning, Deep Learning, and Fractal Geometry",

    ],
    color: "#29485f",
    icon: "🎓",
  },
  {
    role: "Program & Website Committee Member",
    org: "GAANA-2025",
    location: "India",
    period: "2025",
    type: "project",
    description: "Geometry, Analysis, Algebra, Numerics and Applications",
    highlights: [
      "Served as a Program and Website Committee Member for the GAANA-2025 conference",

    ],
    color: "#29485f",
    icon: "🌐",
  },
  {
    role: "Program & Website Committee Member",
    org: "MADP-2024, CGAC-2024, FGRF-2024",
    location: "India",
    period: "2024",
    type: "project",
    description: "Meeting on Analysis, Dimensions and PDE; Conference on Graph Theory and Additive Combinatorics; 2nd Workshop on Fractal Geometry and Related Fields",
    highlights: [
      "Served as a Program and Website Committee Member for MADP-2024",
      "Served as a Program and Website Committee Member for CGAC-2024",
      "Served as a Program and Website Committee Member for FGRF-2024",
    ],
    color: "#29485f",
    icon: "🌐",
  }
];

export default function ExperienceSection() {
  const ordered = [experiences[4], experiences[1], experiences[5], experiences[0], experiences[2], experiences[6], experiences[3]];
  return (
    <ProfileSection id="experience" title="Experience & Academic Service">
      <ExpandableList limit={3} label="experience" style={{ display: "grid", gap: 24 }}>
        {ordered.map((item) => (
          <article key={item.role + item.org} className="glass-card academic-entry">
            <h3>{item.role}</h3>
            <p>{item.org}</p>
            <p className="entry-meta">{item.period} / {item.location}</p>
            <SlidingDisclosure className="entry-detail" label="Read details" expandedLabel="Hide details">
              <p>{item.description}</p>
              {item.highlights.map((highlight) => <p key={highlight}>{highlight}</p>)}
            </SlidingDisclosure>
          </article>
        ))}
      </ExpandableList>
    </ProfileSection>
  );
}
