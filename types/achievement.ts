import { LucideIcon } from "lucide-react";

export interface Achievement {
  id: string;

  title: string;
  issuer: string;
  category: string;
  description: string;

  completionDate: string;

  file: string;

  status: string;

  score: string;

  icon?: LucideIcon;
}