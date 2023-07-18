import { TypePostSkeleton } from "./types";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "./contentfulClient";

type BlogPostEntry = Entry<TypePostSkeleton, undefined, string>;

// Our simplified version of a BlogPost.
// We don't need all the data that Contentful gives us.
export interface BlogPost {
  title: string;
  slug: string;
  coverImage: any;
  body: RichTextDocument | null;
  author: any;
  category: any;
  excerpt: any;
  date: any;
}

// A function to transform a Contentful blog post
// into our own BlogPost object.
export function parseContentfulBlogPost(
  blogPostEntry?: BlogPostEntry
): BlogPost | null {
  if (!blogPostEntry) {
    return null;
  }

  return {
    title: blogPostEntry.fields.title || "",
    slug: blogPostEntry.fields.slug,
    coverImage: blogPostEntry.fields.coverImage,
    body: blogPostEntry.fields.content || null,
    author: blogPostEntry.fields.author,
    category: blogPostEntry.fields.category,
    excerpt: blogPostEntry.fields.excerpt,
    date: blogPostEntry.fields.date,
  };
}

// A function to fetch all blog posts.
// Optionally uses the Contentful content preview.
interface FetchBlogPostsOptions {
  preview: boolean;
}
export async function fetchBlogPosts({
  preview,
}: FetchBlogPostsOptions): Promise<BlogPost[]> {
  const contentful = contentfulClient({ preview });

  const blogPostsResult = await contentful.getEntries<TypePostSkeleton>({
    content_type: "post",
    include: 4,
    order: ["fields.title"],
  });

  return blogPostsResult.items.map(
    (blogPostEntry) => parseContentfulBlogPost(blogPostEntry) as BlogPost
  );
}

// A function to fetch a single blog post by its slug.
// Optionally uses the Contentful content preview.
interface FetchBlogPostOptions {
  slug: string;
  preview: boolean;
}
export async function fetchBlogPost({
  slug,
  preview,
}: FetchBlogPostOptions): Promise<BlogPost | null> {
  const contentful = contentfulClient({ preview });

  const blogPostsResult = await contentful.getEntries<TypePostSkeleton>({
    content_type: "post",
    "fields.slug": slug,
    include: 2,
  });

  return parseContentfulBlogPost(blogPostsResult.items[0]);
}
