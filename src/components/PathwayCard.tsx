"use client";
import Link from "next/link";
import { ArrowUpRight, Bookmark, MapPin } from "lucide-react";
import type { Pathway } from "@/content/pathways";
import { useWarrior } from "./WarriorProvider";

export function PathwayCard({ pathway, compact = false }: { pathway: Pathway; compact?: boolean }) {
  const { favorites, togglePathway } = useWarrior();
  const saved = favorites.includes(pathway.slug);
  return <article className={`pathway-card ${compact ? "compact" : ""}`}>
    <div className="card-top"><span className="eyebrow">{pathway.category}</span><button className={`save-button ${saved ? "saved" : ""}`} onClick={() => togglePathway(pathway.slug)} aria-label={`${saved ? "Remove" : "Add"} ${pathway.name} ${saved ? "from" : "to"} My Warrior Future`}><Bookmark size={18} fill={saved ? "currentColor" : "none"}/></button></div>
    <h3>{pathway.name}</h3><p>{pathway.summary}</p>
    <div className="meta"><span><MapPin size={14}/>{pathway.location}</span><span className={`status ${pathway.status === "Verified" ? "verified" : "pending"}`}>{pathway.status}</span></div>
    <Link href={`/pathways/${pathway.slug}`} className="text-link">Explore pathway <ArrowUpRight size={16}/></Link>
  </article>;
}
