"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { emptyState, loadState, resetQuizState, saveState, toggleFavorite, type WarriorState } from "@/lib/storage";

type WarriorContextValue = WarriorState & { hydrated: boolean; setWarriorState: (next: Partial<WarriorState>) => void; togglePathway: (slug: string) => void; resetQuiz: () => void };
const WarriorContext = createContext<WarriorContextValue | null>(null);

export function WarriorProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<WarriorState>(emptyState);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { const frame = requestAnimationFrame(() => { setState(loadState()); setHydrated(true); }); return () => cancelAnimationFrame(frame); }, []);
  useEffect(() => { if (hydrated) saveState(state); }, [state, hydrated]);
  const setWarriorState = useCallback((next: Partial<WarriorState>) => setState((current) => ({ ...current, ...next })), []);
  const togglePathway = useCallback((slug: string) => setState((current) => ({ ...current, favorites: toggleFavorite(slug, current.favorites) })), []);
  const resetQuiz = useCallback(() => setState(resetQuizState), []);
  const value = useMemo(() => ({ ...state, hydrated, setWarriorState, togglePathway, resetQuiz }), [state, hydrated, setWarriorState, togglePathway, resetQuiz]);
  return <WarriorContext.Provider value={value}>{children}</WarriorContext.Provider>;
}

export function useWarrior() {
  const context = useContext(WarriorContext);
  if (!context) throw new Error("useWarrior must be used within WarriorProvider");
  return context;
}
