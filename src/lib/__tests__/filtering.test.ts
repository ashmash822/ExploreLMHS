import { describe,expect,it } from "vitest";
import { pathways } from "@/content/pathways";
import { filterPathways } from "@/lib/filtering";
describe("pathway discovery",()=>{
  it("searches pathway names, careers, and descriptions",()=>{expect(filterPathways(pathways,{search:"bioprocess"}).map((p)=>p.slug)).toContain("biotechnology");});
  it("combines category, provider, and college-credit filters",()=>{const results=filterPathways(pathways,{category:"Skilled Trades & Technical Careers",provider:"VGCC",collegeCredit:true});expect(results.map((p)=>p.slug)).toContain("welding");expect(results.every((p)=>p.collegeCredit&&p.category==="Skilled Trades & Technical Careers")).toBe(true);});
});
