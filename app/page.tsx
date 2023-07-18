import NavBar from "@/components/NavBar";
import {fetchBlogPosts } from "@/src/contentful/blogPosts";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";

async function Home() {
  // Fetch blog posts using the content preview
  // if draft mode is enabled:
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled });

  const news = blogPosts.filter((blogPost) => {
    if (blogPost.category.fields.category === 'News') {
      return blogPost;
    }
  });
  const sports = blogPosts.filter((blogPost) => {
    if (blogPost.category.fields.category === 'Sports') {
      return blogPost;
    }
  });

  console.log(news[0].title)

  return (
    <>
      <NavBar news={news} sports={sports} newest={blogPosts[0]} />
      
    </>
  );
}

export default Home;
