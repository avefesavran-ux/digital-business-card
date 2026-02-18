
export interface Project {
  name: string;
  url: string;
  subtitle?: string;
}

export interface BiographyData {
  bio: string;
  specialties: string[];
  philosophy: string;
}

export interface GeminiResponse {
  text: string;
}
