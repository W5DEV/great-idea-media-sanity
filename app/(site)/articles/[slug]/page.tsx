import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getArticle } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const article = await getArticle(slug);

  if (!article) {
    return notFound();
  }

  return {
    title: article.title,
  };
}

export default async function ArticlePage({ params }: Props) {
  const slug = params.slug;
  const article = await getArticle(slug);
  const articleDate = new Date(article._createdAt);

  return (
    <main>
      <div className='p-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-200 to-white'>
        <main className='pb-16'>
          <div className='py-8 my-8 prose border-black border-y'>
            <div className='pb-2'>
              <h1 className='pb-2 text-3xl font-semibold'>{article.title}</h1>
              <p className='mx-4 text-sm italic'>{articleDate.toDateString()}</p>
            </div>

            <div className='flex flex-row items-center justify-start gap-3 mt-4 mb-10'>
              {/* <Image
              className='rounded-full'
              alt={posts.blogPost.author.fields.name}
              src={'https:' + posts.blogPost.author.fields.picture.fields.file.url}
              width={36}
              height={36}
            /> */}
              <h2 className='text-xl font-medium'>{article.author}</h2>
            </div>
            <Image alt={article.alt} src={article.coverImage} width={1920} height={1080} />
            <div className='postbody'>
              <PortableText value={article.content} />
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
