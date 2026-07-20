export interface Profile {
  id: string;
  full_name: string;
  username: string;
  email: string;

  university: string | null;
  degree: string | null;
  graduation_year: string | null;

  location: string | null;
  phone: string | null;
  bio: string | null;

  trust_score: number;

  skills: string[] | null;

  github: string | null;
  linkedin: string | null;
  avatar_url: string | null;
  open_to_work: boolean;

  role: "student" | "recruiter" | "admin";
}