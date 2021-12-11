export interface PostData {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  date: string;
  tags: string[];
  amount: string;
  ingredients: string[];
  preview: string;
  content: string;
  iso8601Date: string;
  basename: string;
}
