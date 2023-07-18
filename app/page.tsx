import HomePage from "@/app/components/HomePage";
import {fetchBlogPosts } from "@/src/contentful/blogPosts";
import { draftMode } from "next/headers";

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

  return (
    <>
      <HomePage news={news} sports={sports} newest={blogPosts[0]} />
    </>
  );
}

export default Home;
