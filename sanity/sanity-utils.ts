import { Article } from '@/types/Article';
import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

export async function getArticles(): Promise<Article[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article"] | order(_createdAt desc){
            _id,
            _createdAt,
            title, 
            "slug": slug.current,
            author,
            "coverImage": coverImage.asset->url,
            alt,
            category,
            subCategory,
            excerpt,
            content,
        }`,
  );
}

export async function getArticle(slug: string): Promise<Article> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title, 
            "slug": slug.current,
            author,
            "coverImage": coverImage.asset->url,
            alt,
            category,
            subCategory,
            excerpt,
            content,
        }`,
    { slug },
  );
}

export async function getArticlesByCategory(
  category: string,
): Promise<Article[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article" && category == $category] | order(_createdAt desc){
            _id,
            _createdAt,
            title, 
            "slug": slug.current,
            author,
            "coverImage": coverImage.asset->url,
            alt,
            category,
            subCategory,
            excerpt,
            content,
        }`,
    { category },
  );
}
