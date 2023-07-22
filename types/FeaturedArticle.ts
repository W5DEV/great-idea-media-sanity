import type { Article } from '@/types/Article';

export interface FeaturedArticles {
  news: Article[];
  sports: Article[];
  featured: Article[];
}
