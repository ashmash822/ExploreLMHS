"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { quizQuestions } from "@/content/quiz";
import { getProfile } from "@/content/profiles";
import { pathways } from "@/content/pathways";
import { scoreQuiz, topProfile } from "@/lib/scoring";
import { useWarrior } from "@/components/WarriorProvider";
import { PathwayCard } from "@/components/PathwayCard";

export default function QuizPage() {
  const warrior = useWarrior();
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const responses = warrior.responses;
  useEffect(() => { if (!warrior.hydrated) return; const frame = requestAnimationFrame(() => { const unanswered = quizQuestions.findIndex((q) => !warrior.responses[q.id]); setIndex(unanswered < 0 ? 0 : unanswered); }); return () => cancelAnimationFrame(frame); }, [warrior.hydrated, warrior.responses]);
  const question = quizQuestions[index];
  const selected = responses[question.id];
  const profileId = useMemo(() => topProfile(responses), [responses]);
  const profile = getProfile(profileId);
  const scores = useMemo(() => scoreQuiz(responses), [responses]);
  const recommendations = profile.pathwaySlugs.map((slug) => pathways.find((p) => p.slug === slug)).filter(Boolean).slice(0, 5) as typeof pathways;
  const choose = (answerId: string) => { const next = { ...responses, [question.id]: answerId }; warrior.setWarriorState({ responses: next }); };
  const next = () => { if (!selected) return; if (index === quizQuestions.length - 1) { warrior.setWarriorState({ responses, profileId }); setDone(true); } else setIndex(index + 1); };
  const restart = () => { warrior.resetQuiz(); setIndex(0); setDone(false); };
  if (done) return <section className="quiz-shell"><div className="quiz-frame"><motion.div className="result-hero" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}}><div className="profile-orb" style={{background:profile.color}}><Sparkles size={55}/></div><span className="eyebrow" style={{color:"#ffc65b"}}>Your Warrior profile</span><h1>{profile.name}</h1><p>{profile.tagline} Your strongest signals were {scores.slice(0,2).map((score) => getProfile(score.id).name.replace("The ","")).join(" and ")}.</p><div className="result-actions"><Link href="/my-warrior-future" className="button">Save to My Warrior Future <Check size={18}/></Link><Link href="/explore-pathways" className="button secondary">Explore all pathways</Link><button className="pill" onClick={restart}><RotateCcw size={16}/> Retake</button></div></motion.div><div className="quiz-card"><span className="eyebrow">Top pathway matches</span><h2 style={{fontSize:"2.7rem",color:"var(--blue-950)",marginTop:".5rem"}}>Places to begin exploring</h2><p>Your interests are a starting point, not a limit. Your future can take you anywhere.</p><div className="match-grid">{recommendations.slice(0,3).map((pathway) => <PathwayCard key={pathway.slug} pathway={pathway} compact/>)}</div></div></div></section>;
  return <section className="quiz-shell"><div className="quiz-frame"><div className="quiz-top"><span>Question {index+1} of {quizQuestions.length}</span><div className="progress-track" aria-label={`${index+1} of ${quizQuestions.length} questions`}><div className="progress-fill" style={{width:`${((index+1)/quizQuestions.length)*100}%`}}/></div><button className="quiet-button" onClick={restart}>Start over</button></div>
    <AnimatePresence mode="wait"><motion.div key={question.id} className="quiz-card" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-30}} transition={{duration:.25}}><span className="eyebrow">Find your path</span><h1>{question.prompt}</h1><p>{question.helper}</p><div className="quiz-answers" role="radiogroup" aria-label={question.prompt}>{question.answers.map((answer,i) => <button key={answer.id} role="radio" aria-checked={selected === answer.id} className={`quiz-answer ${selected === answer.id ? "selected" : ""}`} onClick={() => choose(answer.id)}><span>{String(i+1).padStart(2,"0")}</span>{answer.label}{selected === answer.id && <Check size={20} style={{marginLeft:"auto",color:"var(--orange)"}}/>}</button>)}</div><div className="quiz-actions"><button className="quiet-button" disabled={index===0} onClick={() => setIndex(Math.max(0,index-1))}><ArrowLeft/> Back</button><button className="button" disabled={!selected} onClick={next}>{index === quizQuestions.length-1 ? "Reveal my profile" : "Next question"}<ArrowRight size={18}/></button></div></motion.div></AnimatePresence>
    <p style={{textAlign:"center",color:"#c5d3f3",fontSize:".78rem"}}>No account. No grades. Your progress stays in this browser.</p></div></section>;
}
