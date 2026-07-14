"use client";
import { useEffect } from "react";

/**
 * CursorGlow – a soft radial gradient that follows the cursor.
 * Works only on non-touch devices to avoid battery drain on mobile.
 */
export default function CursorGlow() {
  useEffect(() => {
    // Only show on desktop (pointer: fine)
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const el = document.querySelector<HTMLDivElement>(".cursor-glow");
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };

    const onLeave = () => { el.style.opacity = "0"; };
    const onEnter = () => { el.style.opacity = "1"; };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
}
