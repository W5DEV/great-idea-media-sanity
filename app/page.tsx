import { fetchBlogPosts } from "@/src/contentful/blogPosts";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";

async function Home() {
  // Fetch blog posts using the content preview
  // if draft mode is enabled:
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled });

  return (
    <main className="p-[6vw]">
      <div className="prose">
        <h1>Great Idea Media</h1>
        <ul>
          {blogPosts.map((blogPost) => {
            return (
              <li key={blogPost.slug}>
                <Link href={`/${blogPost.slug}`}>
                  <div className="flex flex-col items-start justify-start">
                    <span>{blogPost.title}</span>
                    <span className="italic">
                      by: {blogPost.author.fields.name}
                    </span>
                  </div>
                  <Image
                    alt={blogPost.coverImage.fields.file.fileName}
                    src={"https:" + blogPost.coverImage.fields.file.url}
                    width={240}
                    height={240}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Home;
