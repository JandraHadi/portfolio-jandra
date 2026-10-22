import { Eye, MessageSquareText, Server, type LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  /** One sentence, ideally under 20 words. */
  description: string;
  tech: string[];
  /** Category icon. */
  Icon: LucideIcon;
  github?: string;
  demo?: string;
}

/**
 * PLACEHOLDER descriptions derived from your earlier portfolio text - verify
 * they match your real work, and add `github` / `demo` URLs where available.
 */
export const projects: Project[] = [
  {
    id: "computer-vision",
    title: "Image Quality & Safety Detection",
    description: "Computer vision experiments for fruit quality, expiry-date OCR and helmet detection.",
    tech: ["Python", "OpenCV", "OCR"],
    Icon: Eye,
  },
  {
    id: "sentiment-analysis",
    title: "Text Sentiment & Clustering",
    description: "Sentiment classification and topic clustering of text data using SVM and K-Means.",
    tech: ["Python", "scikit-learn", "TF-IDF"],
    Icon: MessageSquareText,
  },
  {
    id: "web-information-system",
    title: "Web Information System",
    description: "A role-based web app for managing and reporting on data.",
    tech: ["PHP", "Laravel", "MySQL"],
    Icon: Server,
  },
];
