import { getArticlesByCategory } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/types/Article';

export default async function Home() {
  const articles = await getArticlesByCategory('Sports');

  return (
    <>
      <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-200 to-white'>
        <main className='h-auto pb-16'>
          <div className='pt-8 ml-24 sm:pt-16'>
            <span className='text-4xl font-bold'>Sports</span>
            <span className='ml-8 text-lg font-medium'>
              Check out the latest in sports from around the area!
            </span>
          </div>
          {/* Featured Sports */}
          <section
            aria-labelledby='social-impact-heading'
            className='h-64 mx-auto mt-8 max-w-7xl sm:mt-16 sm:h-96 md:h-128 lg:h-160'
          >
            <div className='flex flex-row items-center justify-center w-full h-full'>
              <div className='flex-1 h-full mr-2'>
                <span className='relative w-full h-full overflow-hidden cursor-pointer'>
                  <div className='absolute inset-0'>
                    <Image
                      fill
                      quality={25}
                      src={articles[0].coverImage}
                      alt=''
                      className='object-cover object-center w-full h-full'
                    />
                  </div>
                  <div className='relative flex flex-col items-end justify-end w-full h-full bg-gradient-to-t from-gray-800 to-transparent hover:bg-gray-800 hover:bg-opacity-30'>
                    <div className='relative flex flex-col items-start justify-end w-full pl-4 mb-4 text-center'>
                      <Link
                        href={`/articles/${articles[0].slug}`}
                        className='flex flex-col items-start text-white hover:underline'
                      >
                        <h2
                          id='social-impact-heading'
                          className='text-3xl font-bold tracking-tight text-white sm:text-4xl'
                        >
                          <span className='block sm:inline'>{articles[0].title}</span>
                        </h2>
                      </Link>
                      <p className='mt-3 text-base text-left text-white'>{articles[0].excerpt}</p>
                    </div>
                  </div>
                </span>
              </div>
              <div className='w-[calc(40%-0.5rem)] h-full'>
                <div className='relative w-full mb-2 overflow-hidden h-[calc(50%-0.25rem)]'>
                  <Link
                    href={`/articles/${articles[1].slug}`}
                    className='relative w-full h-full cursor-pointer'
                  >
                    <div className='absolute inset-0'>
                      <Image
                        fill
                        quality={25}
                        src={articles[1].coverImage}
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
                            <span className='block sm:inline'>{articles[1].title}</span>
                          </h2>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='relative w-full mt-1 overflow-hidden h-[calc(50%-0.25rem)]'>
                  <Link
                    href={`/articles/${articles[2].slug}`}
                    className='relative w-full h-full cursor-pointer'
                  >
                    <div className='absolute inset-0'>
                      <Image
                        fill
                        quality={25}
                        src={articles[2].coverImage}
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
                            <span className='block sm:inline'>{articles[2].title}</span>
                          </h2>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Sports Slider */}
          <section
            aria-labelledby='category-heading'
            className='mt-12 sm:mt-16 xl:mx-auto xl:max-w-7xl xl:px-8'
          >
            <div className='px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0'>
              <h2 id='category-heading' className='text-2xl font-bold tracking-tight text-gray-900'>
                Latest Sports
              </h2>
            </div>

            <div className='flow-root mt-4'>
              <div className='-my-2'>
                <div className='box-content relative py-2 overflow-x-auto h-80'>
                  <div className='absolute flex px-4 space-x-8 sm:px-6 lg:px-8 '>
                    {articles.map((article: Article) => (
                      <a
                        key={article._id}
                        href={`/articles/${article.slug}`}
                        className='relative flex flex-col w-56 p-6 overflow-hidden rounded-lg h-80 hover:opacity-75'
                      >
                        <span aria-hidden='true' className='absolute inset-0'>
                          <Image
                            fill
                            quality={25}
                            src={article.coverImage}
                            alt=''
                            className='object-cover object-center w-full h-full'
                          />
                        </span>
                        <span
                          aria-hidden='true'
                          className='absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800'
                        />
                        <span className='relative mt-auto text-xl font-bold text-center text-white'>
                          {article.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='px-4 mt-6 sm:hidden'>
              <a
                href='#'
                className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'
              >
                Browse all categories
                <span aria-hidden='true'> &rarr;</span>
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
