"use client";

import { useId, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function SlidingDisclosure({ children, label, expandedLabel, className = "", panelClassName = "" }: {
  children: ReactNode;
  label: ReactNode;
  expandedLabel: ReactNode;
  className?: string;
  panelClassName?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  const reducedMotion = useReducedMotion();

  return (
    <div className={className} data-expanded={expanded}>
      <button
        id={`${id}-toggle`}
        type="button"
        className="sliding-toggle"
        aria-expanded={expanded}
        aria-controls={`${id}-panel`}
        onClick={() => setExpanded((value) => !value)}
      >
        <span>{expanded ? expandedLabel : label}</span>
        <span aria-hidden="true" className="disclosure-icon">+</span>
      </button>
      <motion.div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-toggle`}
        aria-hidden={!expanded}
        inert={!expanded}
        className={`sliding-panel ${panelClassName}`}
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0, y: expanded ? 0 : -10 }}
        transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
