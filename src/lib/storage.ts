import type { ProfileId } from "@/content/profiles";
import type { QuizResponseMap } from "./scoring";

export const STORAGE_KEY = "lmhs-warrior-future-v1";
export type WarriorState = { responses: QuizResponseMap; profileId?: ProfileId; favorites: string[]; mode: "student" | "family"; updatedAt: string };
export const emptyState: WarriorState = { responses: {}, favorites: [], mode: "student", updatedAt: "" };

export function loadState(storage: Pick<Storage, "getItem"> = localStorage): WarriorState {
  try { const raw = storage.getItem(STORAGE_KEY); return raw ? { ...emptyState, ...JSON.parse(raw) } : emptyState; } catch { return emptyState; }
}

export function saveState(state: WarriorState, storage: Pick<Storage, "setItem"> = localStorage) {
  storage.setItem(STORAGE_KEY, JSON.stringify({ ...state, updatedAt: new Date().toISOString() }));
}

export function toggleFavorite(slug: string, favorites: string[]) {
  return favorites.includes(slug) ? favorites.filter((item) => item !== slug) : [...favorites, slug];
}

export function resetQuizState(state: WarriorState): WarriorState { return { ...state, responses:{}, profileId:undefined }; }
