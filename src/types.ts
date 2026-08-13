export interface Skill {
  id: string;
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner' | 'Pro';
  category: 'Languages' | 'Frontend & Frameworks' | 'Backend & Tools' | 'Marketing & SEO';
  iconName: string;
  iconType: 'fa' | 'si' | 'lucide';
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  tags: string[];
  category: string;
  featured?: boolean;
  type: string;
  highlights: string[];
  bannerImage?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skillsUsed: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  logo: string;
  period: string;
  details: string;
}
