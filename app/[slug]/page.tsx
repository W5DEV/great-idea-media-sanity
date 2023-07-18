import { Metadata, ResolvingMetadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { fetchBlogPost, fetchBlogPosts } from "@/src/contentful/blogPosts";
import Link from "next/link";
import RichText from "@/src/contentful/RichText";
import Image from "next/image";

interface BlogPostPageParams {
  slug: string;
}

interface BlogPostPageProps {
  params: BlogPostPageParams;
}

// Tell Next.js about all our blog posts so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
  const blogPosts = await fetchBlogPosts({ preview: false });

  return blogPosts.map((post) => ({ slug: post.slug }));
}

// For each blog post, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata(
  { params }: BlogPostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!blogPost) {
    return notFound();
  }

  return {
    title: blogPost.title,
  };
}

// The actual BlogPostPage component.
async function BlogPostPage({ params }: BlogPostPageProps) {
  // Fetch a single blog post by slug,
  // using the content preview if draft mode is enabled:
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!blogPost) {
    // If a blog post can't be found,
    // tell Next.js to render a 404 page.
    return notFound();
  }
  const postDate = new Date(blogPost.date);

  return (
    <main className="p-[6vw]">
      <Link href="/">← Posts</Link>
      <div className="pt-8 mt-8 prose border-t border-black">
        <div className="pb-2">
          <h1 className="pb-2 text-3xl font-semibold">{blogPost.title}</h1>
          <p>{postDate.toDateString()}</p>
        </div>

        <div className="flex flex-row items-center justify-start gap-5 my-8">
          <Image
            alt={blogPost.author.fields.name}
            src={"https:" + blogPost.author.fields.picture.fields.file.url}
            width={48}
            height={48}
          />
          <h2 className="text-xl font-medium">{blogPost.author.fields.name}</h2>
        </div>
        <Image
          alt={blogPost.coverImage.fields.file.fileName}
          src={"https:" + blogPost.coverImage.fields.file.url}
          width={1920}
          height={1080}
        />

        <RichText document={blogPost.body} />
      </div>
    </main>
  );
}

export default BlogPostPage;
