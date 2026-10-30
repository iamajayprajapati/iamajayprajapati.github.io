import { Children, type CSSProperties, type ReactNode } from "react";
import SlidingDisclosure from "@/components/SlidingDisclosure";

export default function ExpandableList({ children, limit = 3, label = "items", style }: {
  children: ReactNode; limit?: number; label?: string; style?: CSSProperties;
}) {
  const items = Children.toArray(children);
  return (
    <div className="expandable-list">
      <div style={style}>{items.slice(0, limit)}</div>
      {items.length > limit && (
        <SlidingDisclosure
          className="more-content"
          label={<>See more {label} <span className="remaining-count">({items.length - limit})</span></>}
          expandedLabel={<>Show fewer {label}</>}
        >
          <div className="expanded-items" style={style}>{items.slice(limit)}</div>
        </SlidingDisclosure>
      )}
    </div>
  );
}
