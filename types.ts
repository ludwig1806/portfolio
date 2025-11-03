
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface VolunteerExperience {
  role: string;
  organization: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title:string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}
