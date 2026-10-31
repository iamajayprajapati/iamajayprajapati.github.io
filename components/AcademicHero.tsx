import Image from "next/image";

export default function AcademicHero() {
  return (
    <section id="home" className="academic-hero">
      <div className="container academic-hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">RESEARCH PROFILE / COMPUTER SCIENCE & ENGINEERING</p>
          <h1>Ajay Prajapati<span className="hero-period">.</span></h1>
          <p className="hero-position">Ph.D. Scholar</p>
          <p className="hero-institution">Indian Institute of Information Technology Vadodara<br />International Campus Diu</p>
          <p className="hero-introduction">My research interests span machine learning, deep learning, handwriting analysis, and fractals.</p>
          <div className="hero-actions">
            <a href="#publications" className="btn-primary">Selected publications <span aria-hidden="true">↗</span></a>
            <a href="mailto:202491001@iiitvadodara.ac.in" className="btn-secondary">Get in touch</a>
          </div>
          <div className="hero-profile-links">
            <a href="https://scholar.google.co.in/citations?hl=en&user=QYPq7ZIAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
            <a href="https://github.com/iamajayprajapati" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.researchgate.net/profile/Ajay-Prajapati-9" target="_blank" rel="noopener noreferrer">ResearchGate ↗</a>
          </div>
        </div>
        <figure className="academic-portrait">
          <Image src="/ajay-profile.jpg" alt="Ajay Prajapati" width={340} height={420} priority />
          <figcaption><span className="portrait-rule" /> IIIT Vadodara · Diu, India</figcaption>
        </figure>
      </div>
      <div className="container hero-bottom"><span>RESEARCH · LEARNING · ACADEMIC SERVICE</span><a href="#about">Discover more ↓</a></div>
    </section>
  );
}
