export interface Project {
  id: number;
  name: string;
  description: string | null;
  url: string;
  demoUrl: string | null;
  stars: number;
  language: string | null;
  topics: string[];
}
