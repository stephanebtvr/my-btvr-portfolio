// src/app/models/portfolio.models.ts

export interface Skill {
  name: string;
  icon?: string;
  hoverColor?: string;
  type?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  gradient: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tags?: string[];
  isExpanded: boolean;
}

export interface Project {
  title: string;
  shortDescription: string;
  fullDescription: string;
  image?: string;
  tags: string[];
  status?: 'terminé' | 'en cours' | 'non commencé';
  links?: {
    github?: string;
    live?: string;
  };
  isExpanded?: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  viewBox?: string;
}
