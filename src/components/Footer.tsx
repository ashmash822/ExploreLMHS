import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return <footer className="footer"><div className="footer-grid"><div><Image src="/lmhs-mark.png" alt="" width={80} height={60}/><h2>{site.campaign}</h2><p>{site.theme}</p></div><div><h3>Explore</h3><Link href="/find-your-path">Find Your Path</Link><Link href="/explore-pathways">All Pathways</Link><Link href="/college">College Opportunities</Link></div><div><h3>Plan</h3><Link href="/my-warrior-future">My Warrior Future</Link><Link href="/families">For Families</Link><Link href="/next-step">Take the Next Step</Link></div></div><div className="footer-note"><span>Designed for discovery. No account required.</span><span>Choices are saved only in this browser.</span></div></footer>;
}
