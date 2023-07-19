import { getArticles } from '@/sanity/sanity-utils';

export default async function Sports() {
  const articles = await getArticles();

  const sports = articles.filter((article) => {
    if (article.category === 'Sports') {
      return article;
    }
  });

  return (
    <>
      <div>Sports Page Goes Here.</div>
    </>
  );
}
