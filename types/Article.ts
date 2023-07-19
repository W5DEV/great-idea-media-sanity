import { PortableTextBlock } from 'sanity';

export type Article = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  coverImage: string;
  author: string;
  alt: string;
  category: string;
  subCategory: string;
  content: PortableTextBlock[];
};
