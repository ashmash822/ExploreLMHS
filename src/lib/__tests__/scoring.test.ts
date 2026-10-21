import { describe, expect, it } from "vitest";
import { quizQuestions } from "@/content/quiz";
import { scoreQuiz, topProfile } from "@/lib/scoring";

describe("quiz scoring",()=>{
  it("deterministically identifies a builder pattern",()=>{const responses=Object.fromEntries(quizQuestions.map((q)=>[q.id,q.answers.find((a)=>a.weights.builder)?.id??q.answers[0].id]));expect(topProfile(responses)).toBe("builder");expect(scoreQuiz(responses)[0].score).toBeGreaterThan(scoreQuiz(responses)[1].score);});
  it("returns an explainable score for all six profiles",()=>{const scores=scoreQuiz({});expect(scores).toHaveLength(6);expect(scores.every((score)=>score.score===0)).toBe(true);});
});
