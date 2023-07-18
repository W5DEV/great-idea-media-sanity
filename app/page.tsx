import { fetchBlogPosts } from "@/src/contentful/blogPosts";
import { draftMode } from "next/headers";
import Link from "next/link";

async function Home() {
  // Fetch blog posts using the content preview
  // if draft mode is enabled:
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled });

  return (
    <main className="p-[6vw]">
      <div className="prose">
        <h1>My Contentful Blog</h1>
        <ul>
          {blogPosts.map((blogPost) => {
            return (
              <li key={blogPost.slug}>
                <Link href={`/${blogPost.slug}`}>{blogPost.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Home;
