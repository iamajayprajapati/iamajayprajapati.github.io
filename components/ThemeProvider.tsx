"use client";
import { createContext, useContext, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({ theme: "light", toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as Theme);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", next); } catch { /* The theme also works for this session. */ }
    document.documentElement.setAttribute("data-theme", next);
    window.dispatchEvent(new Event("profile-theme-change"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function getTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function subscribe(notify: () => void) {
  const update = () => {
    try {
      const stored = localStorage.getItem("theme");
      const dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    } catch { /* Retain the current session theme. */ }
    notify();
  };
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("profile-theme-change", notify);
  window.addEventListener("storage", update);
  mq.addEventListener("change", update);
  return () => {
    window.removeEventListener("profile-theme-change", notify);
    window.removeEventListener("storage", update);
    mq.removeEventListener("change", update);
  };
}

export const useTheme = () => useContext(ThemeContext);
