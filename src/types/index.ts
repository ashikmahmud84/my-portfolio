export interface SocialLinks {
  github: string;
  githubUsername?: string;
  linkedin: string;
  linkedinUsername?: string;
  email: string;
  whatsapp?: string;
}

export interface DeveloperProfile {
  name: string;
  role: string;
  subRole?: string;
  location: string;
  careerFocus: string;
  primaryTechnologies: string[];
  status: string;
  rotatingTitles?: string[];
  headline?: string;
  description?: string;
  secondaryDescription?: string;
  resumeUrl?: string;
  profileImagePath?: string;
  socials: SocialLinks;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  sectionNumber?: string;
}

export interface SectionMeta {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  stepNumber: string;
  description: string;
}
