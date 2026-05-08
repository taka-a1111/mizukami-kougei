export interface BlogPost {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  thumbnail?: string;
  content?: string[];
}

export const blogPosts: BlogPost[] = [];
