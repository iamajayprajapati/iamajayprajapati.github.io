import SlidingDisclosure from "@/components/SlidingDisclosure";
import ProfileSection from "@/components/ProfileSection";
import ExpandableList from "@/components/ExpandableList";
const workshops = [
  { title: "Research Scholar Day 2026", org: "IIIT Vadodara", year: "15 September 2026", description: "Participated in Research Scholar Day.", icon: "R", color: "#29485f" },
  { title: "Responsible Use of Artificial Intelligence in Life & Environment Research", org: "Taylor & Francis", year: "31 August 2026", description: "Participated in the training event.", icon: "AI", color: "#29485f" },
  { title: "MPCI 2026", org: "IIIT Allahabad (Virtual)", year: "1-3 August 2026", description: "Workshop on Mathematics, Physics and Computing in Information Technology.", icon: "M", color: "#29485f" },
  { title: "MANTRA 2026", org: "IIIT Allahabad (Hybrid)", year: "20-22 July 2026", description: "Workshop on Machine Learning, Linear Algebra and Natural Language Transformation.", icon: "ML", color: "#29485f" },
  {
    title: "Global Wales (UK)–India Workshop on Tackling Online Crimes Against Women and Children",
    org: "Cardiff University",
    year: "April 2026",
    description: "Gained interdisciplinary insights into cyber law, online safety, and policy responses for protecting women and children in digital spaces.",
    icon: "🌍",
    color: "#29485f",
  },
  {
    title: "Medical Intervention Using Smart Technologies (MIST) - Online Short-Term Course",
    org: "IIIT ALLAHABAD",
    year: "19-20 March, 2026",
    description: "Participated in the online short-term certificate course.",
    icon: "⚕️",
    color: "#29485f",
  },
  {
    title: "ANRF-PAIR Hands on workshop on generative AI and large language models",
    org: "IIIT Nagpur in association with Nvidia Deep learning (DLI)",
    year: "4-14 March, 2026",
    description: "Sponsored by ANRF-PAIR (Hub: IIT Bombay).",
    icon: "🤖",
    color: "#29485f",
  },
  {
    title: "FDP on Integrating Generative AI in Education: Impacts on TLE",
    org: "E&ICT Academy PDPM IIITDM Jabalpur",
    year: "Feb 23 - Mar 1, 2026",
    description: "Participated in the Faculty Development Programme.",
    icon: "🎓",
    color: "#29485f",
  },
  {
    title: "6th International Workshop on Generative AI and Human Robot Interactions",
    org: "CIR IIIT-A & IHFC (IIT Delhi)",
    year: "Jan 23-25, 2026",
    description: "Participated in the international workshop.",
    icon: "🤖",
    color: "#29485f",
  },
  {
    title: "Advancement in Computational Drug Design (ACDD-2025)",
    org: "Dept of Applied Sciences, IIITA",
    year: "Dec 2-4, 2025",
    description: "National Webinar and Schrödinger Life Science Hands-on Training Program.",
    icon: "🧬",
    color: "#29485f",
  },
  {
    title: "ATAL FDP on Exploratory Data Analytics (EDA) - Tools and Techniques",
    org: "Velammal College of Engineering & Technology",
    year: "Nov 24-29, 2025",
    description: "Participated & completed AICTE Training And Learning Academy Faculty Development Program.",
    icon: "📊",
    color: "#29485f",
  },
  {
    title: "Online Short Term Programme on Academic Writing for Research Scholars",
    org: "CFDET, IIT (BHU) Varanasi",
    year: "Nov 10-15, 2025",
    description: "Under Malaviya Mission Teacher Training program (MM-TTP).",
    icon: "✍️",
    color: "#29485f",
  },
  {
    title: "Foundations of Data Science and Machine Learning for STEM Professionals",
    org: "NIT Warangal",
    year: "Nov 3-15, 2025",
    description: "Attended 12-Day Online Refresher Course.",
    icon: "💻",
    color: "#29485f",
  },
  {
    title: "Machine Learning Assisted IoT Networks Towards Performance Improvement",
    org: "Dept of CS, Institute of Science, BHU",
    year: "Oct 26, 2025",
    description: "Attended One-Day Workshop under ANRF sponsored project.",
    icon: "📡",
    color: "#29485f",
  },
  {
    title: "Applied Deep Learning using Python",
    org: "NIT Kurukshetra",
    year: "Sep 1-6, 2025",
    description: "Participated in Short Term Course.",
    icon: "🧠",
    color: "#29485f",
  },
  {
    title: "Emerging Technologies in Computing and Communication",
    org: "NIT Jalandhar",
    year: "Jul 21-25, 2025",
    description: "One Week Online Short Term Course.",
    icon: "🌐",
    color: "#29485f",
  },
  {
    title: "7th Summer School on Advances in Deep Architectures for Signal, Image and Vision Applications (ADASIVA)",
    org: "IIIT Allahabad",
    year: "Jul 7-12, 2025",
    description: "Participated in the summer school.",
    icon: "👁️",
    color: "#29485f",
  },
  {
    title: "Emerging Research and Innovations in AI Applications in Mathematics, Bio-Sciences, and Management",
    org: "NIMS University, Jaipur",
    year: "Jun 26 - Jul 2, 2025",
    description: "Participated in the International Faculty Development Program (FDP).",
    icon: "📈",
    color: "#29485f",
  },
  {
    title: "Advanced Optimization Techniques using MATLAB",
    org: "Electronics & ICT Academies (MeitY)",
    year: "Feb 17-28, 2025",
    description: "Participated in Online Training Programme.",
    icon: "⚙️",
    color: "#29485f",
  },
  {
    title: "Mendeley Training Certification of Achievement",
    org: "IQAC, NSB Bangalore in collab with Mendeley",
    year: "Mar 28, 2024",
    description: "Certification of Achievement.",
    icon: "📜",
    color: "#29485f",
  },
  {
    title: "Citation & Reference Management for Scholarly Writing",
    org: "IQAC, NSB Bangalore & Mendeley",
    year: "Feb 26-28, 2024",
    description: "Three-Day Faculty Development Programme.",
    icon: "📚",
    color: "#29485f",
  },
  {
    title: "4th International Workshop on Generative AI and Human Robot Interactions",
    org: "CIR IIIT-A & IHFC (IIT Delhi)",
    year: "Feb 16-18, 2024",
    description: "Attended the international workshop.",
    icon: "🤖",
    color: "#29485f",
  },
  {
    title: "Advanced Entrepreneurship and Skill Development Program (E-SDP)",
    org: "IIIT Allahabad (Sponsored by MSME)",
    year: "Feb 12-16, 2024",
    description: "Capacity Building Using Data Driven Technologies for Budding Entrepreneur of Future.",
    icon: "💡",
    color: "#29485f",
  },
  {
    title: "NEP 2020 Orientation & Sensitization Programme",
    org: "MM-TTP, IIT (BHU) / BHU",
    year: "Feb 1-28, 2024",
    description: "Participated under Malaviya Mission Teacher Training Programme.",
    icon: "🇮🇳",
    color: "#29485f",
  },
  {
    title: "IIT DELHI - INRIA WORKSHOP",
    org: "IIT Delhi (IFCPAR/CEFIPRA)",
    year: "Oct 25-27, 2023",
    description: "Attended Indo-French Centre for the Promotion of Advanced Research workshop.",
    icon: "🤝",
    color: "#29485f",
  },
  {
    title: "IoT, 5G Network Security, 5G PHY, and LiFi Training Workshops",
    org: "IIT Delhi",
    year: "October 2023",
    description: "Attended multiple workshops on IoT, 5G Network Security, 5G Physical Layer, and LiFi.",
    icon: "📡",
    color: "#29485f",
  },
  {
    title: "Machine Learning and its Application in IoT, Computer Vision and Cloud Computing (MICC-2023)",
    org: "NIT Jamshedpur",
    year: "Jul 10-14, 2023",
    description: "One Week Online Short Term Course.",
    icon: "☁️",
    color: "#29485f",
  },
  {
    title: "MS OFFICE SKILL ENRICHMENT PROGRAMME (MOSEP)",
    org: "Skill Development Cell, BHU & CIMS",
    year: "May 19-27, 2023",
    description: "Participated in the enrichment programme.",
    icon: "📊",
    color: "#29485f",
  },
  {
    title: "One Week Workshop on Communication Skills",
    org: "Institute of Science & Dept of Extension Education, BHU",
    year: "Dec 7-14, 2022",
    description: "Participated in communication skills workshop.",
    icon: "🗣️",
    color: "#29485f",
  },
  {
    title: "Fractal Geometry And Related Fields (FGRF)",
    org: "Dept of Applied Sciences, IIITA",
    year: "Sep 25 - Oct 1, 2022",
    description: "Participated in the workshop.",
    icon: "📐",
    color: "#29485f",
  },
  {
    title: "4th workshop on Machine Learning and Data Analytics (MLDA'21)",
    org: "IIIT Allahabad",
    year: "May 28 - Jun 11, 2021",
    description: "Participated in the machine learning workshop.",
    icon: "📈",
    color: "#29485f",
  },
  {
    title: "Python for Data Science",
    org: "IBM Developer Skills Network",
    year: "Sep 26, 2020",
    description: "Attended powered by IBM.",
    icon: "🐍",
    color: "#29485f",
  },
  {
    title: "Artificial Intelligence with Machine Learning Workshops",
    org: "Kyrlon Technologies & Effervescence IIIT Allahabad",
    year: "Aug 2020",
    description: "Participated in multiple online workshop series.",
    icon: "🧠",
    color: "#29485f",
  },
  {
    title: "Workshop on Python during Robothlon-2019",
    org: "IIT Delhi",
    year: "Oct 3-5, 2019",
    description: "Participated during Robothlon-2019.",
    icon: "🐍",
    color: "#29485f",
  }
];

export default function WorkshopsSection() {
  return (
    <ProfileSection id="workshops" title="Workshops & Training" source="https://sites.google.com/view/ajayprajapati/workshops">
      <ExpandableList limit={3} label="workshops & training" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 28 }}>
        {workshops.map((item, index) => (
          <article className="glass-card academic-entry" key={index}>
            <h3>{item.title}</h3>
            <p className="entry-meta">{item.org + " / " + item.year}</p>
            <SlidingDisclosure className="entry-detail" label="Read details" expandedLabel="Hide details">
              <p>{item.description}</p>
              <a href="https://sites.google.com/view/ajayprajapati/workshops" target="_blank" rel="noopener noreferrer">View source</a>
            </SlidingDisclosure>
          </article>
        ))}
      </ExpandableList>
    </ProfileSection>
  );
}
