import HomePage from '@/app/components/HomePage';
import { draftMode } from 'next/headers';
import BlogPosts from '../posts.json';

async function Home() {
  // Fetch blog posts using the content preview
  // if draft mode is enabled:

  const news = BlogPosts.news;
  const sports = BlogPosts.sports;
  const newest = BlogPosts.newest;

  return (
    <>
      <HomePage news={news} sports={sports} newest={newest} />
    </>
  );
}

export default Home;
