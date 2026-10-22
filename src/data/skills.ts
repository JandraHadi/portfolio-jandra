import { BrainCircuit, CodeXml, Wrench, type LucideIcon } from "lucide-react";

export interface SkillGroup {
  title: string;
  Icon: LucideIcon;
  items: string[];
}

/** Plain labels only - no ratings. Edit freely. */
export const skillGroups: SkillGroup[] = [
  { title: "Web", Icon: CodeXml, items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PHP", "Laravel"] },
  { title: "Data & AI", Icon: BrainCircuit, items: ["Python", "OpenCV", "Machine Learning"] },
  { title: "Tools", Icon: Wrench, items: ["Git & GitHub", "Cisco Packet Tracer"] },
];
