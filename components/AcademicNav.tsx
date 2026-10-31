"use client";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const primary = [["Research", "research"], ["Publications", "publications"], ["Education", "about"], ["Teaching", "teaching"], ["Contact", "contact"]];
const additional = [["Projects", "projects"], ["Experience", "experience"], ["Workshops & training", "workshops"], ["Training topics", "skills"], ["Achievements", "awards"]];

export default function AcademicNav() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="academic-nav">
      <nav className="container nav-inner" aria-label="Main navigation">
        <a href="#home" className="wordmark scholar-wordmark" onClick={() => setOpen(false)}><span className="scholar-name">Ajay Prajapati</span><span className="scholar-role">Ph.D. Scholar · IIIT Vadodara</span></a>
        <div className="nav-main-links">
          {primary.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          <details className="nav-more"><summary>More <span aria-hidden="true">⌄</span></summary><div>{additional.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div></details>
        </div>
        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>{theme === "light" ? "◐" : "☀"}</button>
          <button className="mobile-menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        </div>
      </nav>
      {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{[...primary, ...additional].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
    </header>
  );
}
