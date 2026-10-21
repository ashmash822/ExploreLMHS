import { describe,expect,it } from "vitest";
import { emptyState,loadState,resetQuizState,saveState,STORAGE_KEY,toggleFavorite } from "@/lib/storage";
describe("My Warrior Future persistence",()=>{
  it("adds and removes favorite pathways",()=>{expect(toggleFavorite("biotechnology",[])).toEqual(["biotechnology"]);expect(toggleFavorite("biotechnology",["biotechnology","welding"])).toEqual(["welding"]);});
  it("saves and restores on-device state",()=>{const values=new Map<string,string>();const storage={getItem:(key:string)=>values.get(key)??null,setItem:(key:string,value:string)=>values.set(key,value)};saveState({...emptyState,profileId:"innovator",favorites:["biotechnology"]},storage);expect(values.has(STORAGE_KEY)).toBe(true);expect(loadState(storage).favorites).toEqual(["biotechnology"]);});
  it("retakes the quiz without deleting favorites",()=>{const state=resetQuizState({...emptyState,profileId:"creator",responses:{spark:"create"},favorites:["fine-arts"]});expect(state.profileId).toBeUndefined();expect(state.responses).toEqual({});expect(state.favorites).toEqual(["fine-arts"]);});
});
