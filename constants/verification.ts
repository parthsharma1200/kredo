import {
  GraduationCap,
  Briefcase,
  Award,
  Globe,
} from "lucide-react";

export const verification = [
  {
    id: crypto.randomUUID(),
    title: "Bachelor of Technology",
    category: "Education",
    status: "Verified",
    submitted: "2 Jul 2026",
    trust: "+25",
    icon: GraduationCap,
  },

  {
    id: crypto.randomUUID(),
    title: "Software Engineering Internship",
    category: "Experience",
    status: "Pending",
    submitted: "5 Jul 2026",
    trust: "+15",
    icon: Briefcase,
  },

  {
    id: crypto.randomUUID(),
    title: "AWS Cloud Practitioner",
    category: "Certification",
    status: "Verified",
    submitted: "28 Jun 2026",
    trust: "+8",
    icon: Award,
  },

  {
    id: crypto.randomUUID(),
    title: "GitHub Portfolio",
    category: "Projects",
    status: "Verified",
    submitted: "1 Jul 2026",
    trust: "+12",
    icon: Globe,
  },
];