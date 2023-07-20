import { getFeaturedArticlesByCategory } from '@/sanity/sanity-utils';
import { Article } from '@/types/Article';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const articles = await getFeaturedArticlesByCategory();

  const sports = articles.sports;
  const news = articles.news;

  const newest = articles.featured[0];

  return (
    <>
      {articles && (
        <div className='bg-white'>
          {/* Hero section */}
          <div className='relative bg-gray-900'>
            {/* Decorative image and overlay */}
            <div aria-hidden='true' className='absolute inset-0 overflow-hidden'>
              <Image
                quality={25}
                fill
                src={newest.coverImage}
                alt=''
                className='object-cover object-center w-full h-full'
              />
            </div>
            <div aria-hidden='true' className='absolute inset-0 bg-gray-900 opacity-50' />

            <div className='relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0'>
              <h1 className='text-4xl font-bold tracking-tight text-white lg:text-6xl'>
                {newest.title}
              </h1>
              <p className='mt-4 text-lg text-white'>{newest.excerpt}</p>
              <a
                href={`/articles/${newest.slug}`}
                className='inline-block px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100'
              >
                Read More...
              </a>
            </div>
          </div>

          <main className='mb-16'>
            {/* Featured Articles */}
            <section
              aria-labelledby='category-heading'
              className='mx-auto mt-8 min-h-64 max-w-7xl sm:mt-16 sm:min-h-96 md:min-h-128 xl:px-8'
            >
              <div className='px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0'>
                <h2
                  id='category-heading'
                  className='text-2xl font-bold tracking-tight text-gray-900'
                >
                  Latest Articles
                </h2>
              </div>

              <div className='flex items-center justify-center w-full h-auto mt-4'>
                <div className='flex flex-row items-center justify-center w-11/12 border-2 border-black h-128'>
                  <div className='flex flex-col items-center justify-center w-3/5 h-full'>
                    <div className='flex flex-col items-center justify-center w-full p-1 border border-black md:p-4 h-4/5'>
                      <div className='relative w-full p-1 md:p-4 h-5/6'>
                        <Image
                          quality={25}
                          src={articles.featured[1].coverImage}
                          alt={''}
                          fill={true}
                          className='object-cover'
                        />
                      </div>
                      <span className='w-full text-lg font-semibold text-left'>
                        {articles.featured[1].title}
                      </span>
                      <p className='w-full text-sm font-light text-left line-clamp-2'>
                        {articles.featured[1].excerpt}
                      </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full p-1 border border-black md:p-4 h-1/5'>
                      <span className='w-full text-lg font-semibold text-left line-clamp-2'>
                        {articles.featured[2].title}
                      </span>
                      <p className='w-full text-sm font-light text-left line-clamp-1'>
                        {articles.featured[2].excerpt}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col items-center justify-center w-2/5 h-full'>
                    {articles.featured.map((featuredArticle: Article, i: number) => {
                      if (i < 3) {
                        return;
                      } else {
                        return (
                          <div className='flex flex-col items-start justify-center w-full p-2 border border-black h-1/6'>
                            <p className='w-full text-base font-medium text-left line-clamp-2'>
                              {featuredArticle.title}
                            </p>
                            <p className='w-full text-xs font-light text-left line-clamp-1'>
                              {featuredArticle.excerpt}
                            </p>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </section>
            {/* Featured News */}
            <section
              aria-labelledby='social-impact-heading'
              className='hidden h-64 mx-auto mt-8 md:block max-w-7xl sm:mt-16 sm:h-96 md:h-128 lg:h-160 xl:px-8'
            >
              <div className='px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0'>
                <h2
                  id='category-heading'
                  className='text-2xl font-bold tracking-tight text-gray-900'
                >
                  Latest News
                </h2>
              </div>
              <div className='flex flex-row items-center justify-center w-full h-full px-8 py-8'>
                <div className='flex-1 h-full mr-2'>
                  <Link
                    href={`/articles/${news[0].slug}`}
                    className='relative w-full h-full overflow-hidden cursor-pointer'
                  >
                    <div className='absolute inset-0'>
                      <Image
                        quality={25}
                        fill
                        src={news[0].coverImage}
                        alt=''
                        className='object-cover object-center w-full h-full'
                      />
                    </div>
                    <div className='relative flex flex-col items-end justify-end w-full h-full bg-gradient-to-t from-gray-800 to-transparent hover:bg-gray-800 hover:bg-opacity-30'>
                      <div className='relative flex flex-col items-start justify-end w-full pl-4 mb-4 text-center'>
                        <span className='flex flex-col items-start text-white hover:underline'>
                          <h2
                            id='social-impact-heading'
                            className='text-3xl font-bold tracking-tight text-white sm:text-4xl'
                          >
                            <span className='block sm:inline'>{news[0].title}</span>
                          </h2>
                        </span>
                        <p className='mt-3 text-base text-left text-white'>{news[0].excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='w-[calc(40%-0.5rem)] h-full'>
                  <div className='relative w-full mb-2 overflow-hidden h-[calc(50%-0.25rem)]'>
                    <Link
                      href={`/articles/${news[1].slug}`}
                      className='relative w-full h-full cursor-pointer'
                    >
                      <div className='absolute inset-0'>
                        <Image
                          quality={25}
                          fill
                          src={news[1].coverImage}
                          alt=''
                          className='object-cover object-center w-full h-full'
                        />
                      </div>
                      <div className='relative flex flex-col items-end justify-end w-full h-full bg-gradient-to-t from-gray-800 to-transparent hover:bg-gray-800 hover:bg-opacity-30'>
                        <div className='relative flex flex-col items-start justify-end w-full pl-4 mb-4 text-center'>
                          <span className='flex flex-col items-start text-white hover:underline'>
                            <h2
                              id='social-impact-heading'
                              className='text-3xl font-bold tracking-tight text-left text-white sm:text-lg'
                            >
                              <span className='block sm:inline'>{news[1].title}</span>
                            </h2>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='relative w-full mt-1 overflow-hidden h-[calc(50%-0.25rem)]'>
                    <Link
                      href={`/articles/${news[2].slug}`}
                      className='relative w-full h-full cursor-pointer'
                    >
                      <div className='absolute inset-0'>
                        <Image
                          quality={25}
                          fill
                          src={news[2].coverImage}
                          alt=''
                          className='object-cover object-center w-full h-full'
                        />
                      </div>
                      <div className='relative flex flex-col items-end justify-end w-full h-full bg-gradient-to-t from-gray-800 to-transparent hover:bg-gray-800 hover:bg-opacity-30'>
                        <div className='relative flex flex-col items-start justify-end w-full pl-4 mb-4 text-center'>
                          <span className='flex flex-col items-start text-white hover:underline'>
                            <h2
                              id='social-impact-heading'
                              className='text-3xl font-bold tracking-tight text-left text-white sm:text-lg'
                            >
                              <span className='block sm:inline'>{news[2].title}</span>
                            </h2>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            {/* Featured Sports */}
            <section
              aria-labelledby='social-impact-heading'
              className='hidden h-64 mx-auto mt-8 md:block max-w-7xl sm:mt-16 sm:h-96 md:h-128 lg:h-160 xl:px-8'
            >
              <div className='px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0'>
                <h2
                  id='category-heading'
                  className='text-2xl font-bold tracking-tight text-gray-900'
                >
                  Latest Sports
                </h2>
              </div>
              <div className='flex flex-row items-center justify-center w-full h-full px-8 py-8'>
                <div className='flex-1 h-full mr-2'>
                  <Link
                    href={`/articles/${sports[0].slug}`}
                    className='relative w-full h-full overflow-hidden cursor-pointer'
                  >
                    <div className='absolute inset-0'>
                      <Image
                        quality={25}
                        fill
                        src={sports[0].coverImage}
                        alt=''
                        className='object-cover object-center w-full h-full'
                      />
                    </div>
                    <div className='relative flex flex-col items-end justify-end w-full h-full bg-gradient-to-t from-gray-800 to-transparent hover:bg-gray-800 hover:bg-opacity-30'>
                      <div className='relative flex flex-col items-start justify-end w-full pl-4 mb-4 text-center'>
                        <span className='flex flex-col items-start text-white hover:underline'>
                          <h2
                            id='social-impact-heading'
                            className='text-3xl font-bold tracking-tight text-white sm:text-4xl'
                          >
                            <span className='block sm:inline'>{sports[0].title}</span>
                          </h2>
                        </span>
                        <p className='mt-3 text-base text-left text-white'>{sports[0].excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='w-[calc(40%-0.5rem)] h-full'>
                  <div className='relative w-full mb-2 overflow-hidden h-[calc(50%-0.25rem)]'>
                    <Link
                      href={`/articles/${sports[1].slug}`}
                      className='relative w-full h-full cursor-pointer'
                    >
                      <div className='absolute inset-0'>
                        <Image
                          quality={25}
                          fill
                          src={sports[1].coverImage}
                          alt=''
                          className='object-cover object-center w-full h-full'
                        />
                      </div>
                      <div className='relative flex flex-col items-end justify-end w-full h-full bg-gradient-to-t from-gray-800 to-transparent hover:bg-gray-800 hover:bg-opacity-30'>
                        <div className='relative flex flex-col items-start justify-end w-full pl-4 mb-4 text-center'>
                          <span className='flex flex-col items-start text-white hover:underline'>
                            <h2
                              id='social-impact-heading'
                              className='text-3xl font-bold tracking-tight text-left text-white sm:text-lg'
                            >
                              <span className='block sm:inline'>{sports[1].title}</span>
                            </h2>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='relative w-full mt-1 overflow-hidden h-[calc(50%-0.25rem)]'>
                    <Link
                      href={`/articles/${sports[2].slug}`}
                      className='relative w-full h-full cursor-pointer'
                    >
                      <div className='absolute inset-0'>
                        <Image
                          quality={25}
                          fill
                          src={sports[2].coverImage}
                          alt=''
                          className='object-cover object-center w-full h-full'
                        />
                      </div>
                      <div className='relative flex flex-col items-end justify-end w-full h-full bg-gradient-to-t from-gray-800 to-transparent hover:bg-gray-800 hover:bg-opacity-30'>
                        <div className='relative flex flex-col items-start justify-end w-full pl-4 mb-4 text-center'>
                          <span className='flex flex-col items-start text-white hover:underline'>
                            <h2
                              id='social-impact-heading'
                              className='text-3xl font-bold tracking-tight text-left text-white sm:text-lg'
                            >
                              <span className='block sm:inline'>{sports[2].title}</span>
                            </h2>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
