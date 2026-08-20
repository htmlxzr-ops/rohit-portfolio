export interface Skill {
  name: string;
  category: "Full Stack" | "Language" | "Security";
  level: "Learning" | "Proficient" | "Advanced";
}

export const skills: Skill[] = [
  { name: "Full Stack Web Development", category: "Full Stack", level: "Advanced" },
  { name: "Python", category: "Language", level: "Learning" },
  { name: "Cyber Security", category: "Security", level: "Advanced" },
];

export const skillCategories = ["Full Stack", "Language", "Security"] as const;
