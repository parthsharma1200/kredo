import {
  GraduationCap,
  Briefcase,
  Award,
  Globe,
} from "lucide-react";

import type { Achievement } from "@/types/achievement";

export const achievements: Achievement[] = [
  {
    id: crypto.randomUUID(),
    title: "Degree Certificate",
    issuer: "ABC University",
    category: "Degree",
    description: "Bachelor of Technology in Computer Science",
    completionDate: "2026-06-15",
    file: "Bachelor_of_Technology.pdf",
    status: "Verified",
    score: "+25",
    icon: GraduationCap,
  },

  {
    id: crypto.randomUUID(),
    title: "Internship Letter",
    issuer: "Google",
    category: "Internship",
    description: "Software Engineering Internship",
    completionDate: "2025-08-30",
    file: "Google_Internship.pdf",
    status: "Pending",
    score: "+10",
    icon: Briefcase,
  },

  {
    id: crypto.randomUUID(),
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    category: "Certification",
    description: "AWS Cloud Practitioner Certification",
    completionDate: "2025-12-10",
    file: "AWS_Certificate.pdf",
    status: "Verified",
    score: "+8",
    icon: Award,
  },

  {
    id: crypto.randomUUID(),
    title: "GitHub Repository",
    issuer: "GitHub",
    category: "Project",
    description: "Open-source project showcasing development work",
    completionDate: "2026-01-20",
    file: "github.com/johndoe",
    status: "Verified",
    score: "+15",
    icon: Globe,
  },
];