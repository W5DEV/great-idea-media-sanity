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
    groq`*[_type == "article" && category == $category] | order(_createdAt desc)[0..6]{
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
        }`,
    { category },
  );
}

export async function getFeaturedArticles(): Promise<Article[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article"] | order(_createdAt desc)[0..5]{
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
        }`,
  );
}

export async function getFeaturedArticlesByCategory() {
  return createClient(clientConfig).fetch(
    groq`
    {'featured': *[_type == "article"] | order(_createdAt desc)[0..10]{
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
        },
    'sports': *[_type == "article" && category == 'Sports'] | order(_createdAt desc)[0..2]{
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
        },
    'news': *[_type == "article" && category == 'News'] | order(_createdAt desc)[0..2]{
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
        },}`,
  );
}
