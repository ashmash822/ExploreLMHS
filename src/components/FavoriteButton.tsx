"use client";
import { Bookmark } from "lucide-react";
import { useWarrior } from "./WarriorProvider";
export function FavoriteButton({ slug, name }: { slug:string; name:string }) { const { favorites,togglePathway }=useWarrior(); const saved=favorites.includes(slug); return <button className="button" onClick={()=>togglePathway(slug)}><Bookmark size={18} fill={saved?"currentColor":"none"}/>{saved?"Saved to My Future":`Add ${name} to My Future`}</button>; }
