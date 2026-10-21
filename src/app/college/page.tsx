"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BriefcaseBusiness, ExternalLink, GraduationCap } from "lucide-react";

export default function CollegePage() {
  const [view, setView] = useState<"transfer" | "career">("transfer");
  return <>
    <section className="page-hero"><div className="page-shell"><span className="eyebrow" style={{color:"#ffc65b"}}>College readiness</span><h1>START HERE. GO TO COLLEGE.</h1><p>Career &amp; College Promise can help eligible high school students begin college-level work through transfer or career-technical pathways.</p></div></section>
    <section className="content-section"><div className="page-shell">
      <div className="section-heading"><div><span className="eyebrow">Choose a lens</span><h2>Two routes. Plenty of possibility.</h2></div><p>Eligibility, course availability, transfer, and credential completion vary. Plan with LMHS and VGCC advisors.</p></div>
      <div className="tabs"><button className={`tab ${view === "transfer" ? "active" : ""}`} onClick={() => setView("transfer")}><GraduationCap size={16}/> College Transfer</button><button className={`tab ${view === "career" ? "active" : ""}`} onClick={() => setView("career")}><BriefcaseBusiness size={16}/> Career &amp; Technical Education</button></div>
      <div className="detail-grid"><div className="board-card">{view === "transfer" ? <><h2>Build toward a college degree.</h2><p>College Transfer Pathways organize eligible college courses that may support progress toward associate and bachelor&apos;s degree goals. VGCC&apos;s guide includes Associate in Arts, Associate in Science, teacher preparation, and Fine Arts routes.</p><ul><li>College-level academic coursework</li><li>Potential progress toward an associate degree</li><li>Transfer planning with advisors</li></ul></> : <><h2>Build career-ready knowledge.</h2><p>Career and Technical Education pathways let eligible students begin structured college coursework connected to fields such as biotechnology, business, welding, early childhood, and mechatronics.</p><ul><li>Technical and applied coursework</li><li>Certificate or diploma pathways</li><li>Skills connected to industries and further study</li></ul></>}</div><aside className="detail-aside"><h2>Keep the fine print clear.</h2><p>CCP participation does not guarantee admission, transfer acceptance, pathway availability, transportation, or credential completion.</p><a className="button" href="https://www.vgcc.edu/high-school/ccp-pathways/" target="_blank" rel="noopener noreferrer">Official VGCC information <ExternalLink size={16}/></a></aside></div>
      <div className="content-section"><div className="college-band-grid" style={{background:"var(--blue-900)",padding:"2rem",borderRadius:"1.5rem",color:"white"}}><div><span className="eyebrow" style={{color:"#ffc65b"}}>The journey</span><h2 style={{fontSize:"3.2rem"}}>High School → College Credit → College or Career</h2></div><div className="journey"><div className="journey-step"><span>1</span><b>Discover your interests</b></div><div className="journey-step"><span>2</span><b>Check eligibility and fit</b></div><div className="journey-step"><span>3</span><b>Build a plan with advisors</b></div></div></div></div>
      <Link href="/biotechnology" className="button">See the Biotechnology spotlight <ArrowRight size={16}/></Link>
    </div></section>
  </>;
}
