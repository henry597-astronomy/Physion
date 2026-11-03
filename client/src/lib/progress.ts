import { useEffect, useState } from "react";

const STORAGE_KEY = "cosmic-path-progress";

function readProgress(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((value): value is string => typeof value === "string") : [];
  } catch {
    return [];
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => setCompleted(readProgress()), []);

  const markComplete = (slug: string) => {
    setCompleted((current) => {
      const next = current.includes(slug) ? current : [...current, slug];
      try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* optional convenience */ }
      return next;
    });
  };

  return { completed, markComplete, isComplete: (slug: string) => completed.includes(slug) };
}
