import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPosts from '../../posts.json';
import PostPage from './components/PostPage';

export async function generateMetadata(params: any): Promise<Metadata> {
  const blogPost: any = BlogPosts.all.find((post) => post.slug === params.params.slug);

  if (!blogPost) {
    return notFound();
  }

  return {
    title: blogPost.title,
  };
}

// The actual BlogPostPage component.
function BlogPostPage(params: any) {
  const blogPost: any = BlogPosts.all.find((post) => post.slug === params.params.slug);

  if (!blogPost) {
    return notFound();
  }
  const postDate = new Date(blogPost.date);

  return (
    <main>
      <PostPage blogPost={blogPost} postDate={postDate} />
    </main>
  );
}

export default BlogPostPage;
