export type ProfileId = "innovator" | "creator" | "builder" | "changemaker" | "entrepreneur" | "explorer";

export type WarriorProfile = {
  id: ProfileId;
  name: string;
  tagline: string;
  color: string;
  interests: string[];
  strengths: string[];
  pathwaySlugs: string[];
};

export const profiles: WarriorProfile[] = [
  { id: "innovator", name: "The Innovator", tagline: "You see possibilities where others see problems.", color: "#41c8f5", interests: ["Science", "Technology", "Engineering", "Problem-solving"], strengths: ["Curious thinking", "Experimenting", "Systems thinking"], pathwaySlugs: ["biotechnology", "automotive", "mechatronics", "college-transfer"] },
  { id: "creator", name: "The Creator", tagline: "Your imagination is one of your greatest tools.", color: "#f5b946", interests: ["Art", "Design", "Digital media", "Creative expression"], strengths: ["Storytelling", "Visual thinking", "Original ideas"], pathwaySlugs: ["adobe-digital-media", "fine-arts", "culinary", "sales-entrepreneurship"] },
  { id: "builder", name: "The Builder", tagline: "You turn ideas into something real.", color: "#ff7c43", interests: ["Construction", "Mechanical work", "Skilled trades", "Hands-on learning"], strengths: ["Practical thinking", "Craftsmanship", "Persistence"], pathwaySlugs: ["carpentry", "welding", "automotive", "agriculture-horticulture", "mechatronics"] },
  { id: "changemaker", name: "The Changemaker", tagline: "You want your work to make a difference.", color: "#7ed6a7", interests: ["Helping others", "Leadership", "Public service", "Community impact"], strengths: ["Empathy", "Team leadership", "Service"], pathwaySlugs: ["health-science", "public-safety-emt", "criminal-justice", "early-childhood", "biotechnology"] },
  { id: "entrepreneur", name: "The Entrepreneur", tagline: "You don’t just dream about opportunities. You create them.", color: "#f96872", interests: ["Business", "Leadership", "Marketing", "Entrepreneurship"], strengths: ["Initiative", "Persuasion", "Planning"], pathwaySlugs: ["sales-entrepreneurship", "business-management", "adobe-digital-media", "culinary", "agriculture-horticulture"] },
  { id: "explorer", name: "The Explorer", tagline: "Your future has more than one possibility.", color: "#b39bff", interests: ["Multiple fields", "Discovery", "Trying new things", "Interdisciplinary learning"], strengths: ["Adaptability", "Connecting ideas", "Open-mindedness"], pathwaySlugs: ["college-transfer", "biotechnology", "health-science", "adobe-digital-media", "business-management"] },
];

export const getProfile = (id: ProfileId) => profiles.find((profile) => profile.id === id)!;
