import { describe,expect,it } from "vitest";
import { navigation } from "@/content/navigation";
describe("core navigation",()=>{it("includes every required destination with a unique route",()=>{expect(navigation.map((item)=>item.label)).toEqual(["Home","Find Your Path","Explore Pathways","My Warrior Future","Warrior Life","For Families","Take the Next Step"]);expect(new Set(navigation.map((item)=>item.href)).size).toBe(navigation.length);});});
