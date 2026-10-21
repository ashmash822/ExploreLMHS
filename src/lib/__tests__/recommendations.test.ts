import { describe,expect,it } from "vitest";
import { profiles } from "@/content/profiles";
import { pathways } from "@/content/pathways";
describe("profile pathway recommendations",()=>{it("only recommends existing pathway records",()=>{const slugs=new Set(pathways.map((p)=>p.slug));profiles.forEach((profile)=>profile.pathwaySlugs.forEach((slug)=>expect(slugs.has(slug),`${profile.name}: ${slug}`).toBe(true)));});});
