// types/index.ts
export interface Project {
    id: number;
    name: string;
    description: string;
    contributors: number;
  }
  
  export interface ContributionStep {
    action: string;
    command: string | null;
    description: string;
  }
  
  export interface TagCategories {
    difficulty: Record<string, string[]>;
    languages: Record<string, string[]>;
  }