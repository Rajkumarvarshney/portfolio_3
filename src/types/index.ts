// ─── Shared TypeScript Interfaces ─────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string; // Short personal descriptor
  avatar: string; // Initials for placeholder
  avatarColor: string; // Hex color for avatar background
  education: Education[];
  experience: Experience[];
  skills: string[];
  topSkills: string[]; // 2-3 skills shown on card
  projects: string[]; // Project IDs
  interests?: string[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  cgpa?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: ('ml-ai' | 'full-stack' | 'frontend' | 'flagship')[];
  teamMemberIds: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  role: string;
  isPlaceholder: boolean;
}
