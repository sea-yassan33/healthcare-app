export interface HealthcareInfoRow {
  id: number;
  category: number;
  url: string;
  title: string;
  description?: string;
  tags?: string[];
  date: string;
  created_at: string;
  updated_at: string;
};