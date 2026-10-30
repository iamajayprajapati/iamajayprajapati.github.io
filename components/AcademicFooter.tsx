export default function AcademicFooter() {
  return (
    <footer className="academic-footer">
      <div className="container footer-content">
        <div><p className="wordmark">Ajay Prajapati<span>.</span></p><p>Ph.D. Scholar · IIIT Vadodara</p></div>
        <div className="footer-contact"><a href="mailto:202491001@iiitvadodara.ac.in">202491001@iiitvadodara.ac.in</a><p>Education Hub, Kevdi - Diu (U.T.), 362520</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Ajay Prajapati</span><a href="#home">Back to top ↑</a></div>
    </footer>
  );
}
