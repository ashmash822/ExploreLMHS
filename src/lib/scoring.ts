import { profiles, type ProfileId } from "@/content/profiles";
import { quizQuestions } from "@/content/quiz";

export type QuizResponseMap = Record<string, string>;
export type ProfileScore = { id: ProfileId; score: number };

export function scoreQuiz(responses: QuizResponseMap): ProfileScore[] {
  const totals = Object.fromEntries(profiles.map((profile) => [profile.id, 0])) as Record<ProfileId, number>;
  quizQuestions.forEach((question) => {
    const selected = question.answers.find((answer) => answer.id === responses[question.id]);
    if (!selected) return;
    Object.entries(selected.weights).forEach(([id, weight]) => { totals[id as ProfileId] += weight ?? 0; });
  });
  return profiles.map((profile) => ({ id: profile.id, score: totals[profile.id] })).sort((a, b) => b.score - a.score || profiles.findIndex((p) => p.id === a.id) - profiles.findIndex((p) => p.id === b.id));
}

export function topProfile(responses: QuizResponseMap): ProfileId {
  return scoreQuiz(responses)[0]?.id ?? "explorer";
}
