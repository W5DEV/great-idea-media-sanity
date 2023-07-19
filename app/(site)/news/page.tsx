import { getArticles } from '@/sanity/sanity-utils';

export default async function News() {
  const articles = await getArticles();

  const news = articles.filter((article) => {
    if (article.category === 'News') {
      return article;
    }
  });

  return (
    <>
      <div>News Page Goes Here.</div>
    </>
  );
}
