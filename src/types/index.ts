export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'iot';
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'soft-skills' | 'design' | 'mobile';
  level: number; // 1-100
  icon: string;
  years: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description?: string;
  current: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: string;
  year: string;
  credentialId?: string;
  expirationDate?: string;
  skills?: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
  resume?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration: number;
      ease?: string;
      delay?: number;
    };
  };
} 