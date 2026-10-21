"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import { useWarrior } from "./WarriorProvider";
import { navigation } from "@/content/navigation";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { mode, setWarriorState } = useWarrior();
  return <header className="site-header">
    <div className="nav-shell">
      <Link href="/" className="brand" aria-label="LMHS home"><span className="brand-mark"><Image src="/lmhs-mark.png" alt="Louisburg Magnet High School L mark" width={52} height={40} priority /></span><span><b>LMHS</b><small>Start Here. Go Anywhere.</small></span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map(({label, href}) => <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>)}</nav>
      <button className="mode-toggle" onClick={() => setWarriorState({ mode: mode === "student" ? "family" : "student" })} aria-label={`Switch to ${mode === "student" ? "family" : "student"} experience`}>
        {mode === "student" ? <Sparkles size={15}/> : <Users size={15}/>} {mode === "student" ? "Student" : "Family"}
      </button>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(({label, href}) => <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href ? "active" : ""}>{label}</Link>)}</nav>}
  </header>;
}
