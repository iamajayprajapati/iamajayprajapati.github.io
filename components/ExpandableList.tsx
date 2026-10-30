import { Children, type CSSProperties, type ReactNode } from "react";

export default function ExpandableList({ children, limit = 3, label = "items", style }: {
  children: ReactNode; limit?: number; label?: string; style?: CSSProperties;
}) {
  const items = Children.toArray(children);
  return (
    <div className="expandable-list">
      <div style={style}>{items.slice(0, limit)}</div>
      {items.length > limit && (
        <details className="more-content">
          <summary>
            <span className="when-closed">See more {label} <span className="remaining-count">({items.length - limit})</span></span>
            <span className="when-open">Show fewer {label}</span>
            <span aria-hidden="true" className="disclosure-icon">+</span>
          </summary>
          <div className="expanded-items" style={style}>{items.slice(limit)}</div>
        </details>
      )}
    </div>
  );
}
