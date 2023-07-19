import { getArticlesByCategory } from '@/sanity/sanity-utils';

export default async function Home() {
  const articles = await getArticlesByCategory('Sports');

  return (
    <>
      <div className='bg-white'>
        <main className='mb-16'>
          <div className='pt-8 ml-24 sm:pt-16'>
            <span className='text-4xl font-bold'>Sports</span>
            <span className='ml-8 text-lg font-medium'>
              Check out the latest in sports from around the area!
            </span>
          </div>
          {/* Featured Sports */}
          <section
            aria-labelledby='social-impact-heading'
            className='px-4 pt-8 mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8'
          >
            <div className='relative overflow-hidden rounded-lg'>
              <div className='absolute inset-0'>
                <img
                  src={articles[0].coverImage}
                  alt=''
                  className='object-cover object-center w-full h-full'
                />
              </div>
              <div className='relative px-6 py-32 bg-gray-900 bg-opacity-75 sm:px-12 sm:py-40 lg:px-16'>
                <div className='relative flex flex-col items-center max-w-3xl mx-auto text-center'>
                  <h2
                    id='social-impact-heading'
                    className='text-3xl font-bold tracking-tight text-white sm:text-4xl'
                  >
                    <span className='block sm:inline'>{articles[0].title}</span>
                  </h2>
                  <p className='mt-3 text-xl text-white'>{articles[0].slug}</p>
                  <a
                    href={`/articles/${articles[0].slug}`}
                    className='block w-full px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100 sm:w-auto'
                  >
                    Read More...
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Sports Slider */}
          <section
            aria-labelledby='category-heading'
            className='pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8'
          >
            <div className='px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0'>
              <h2 id='category-heading' className='text-2xl font-bold tracking-tight text-gray-900'>
                Latest Sports
              </h2>
              <a
                href='#'
                className='hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block'
              >
                View all Sports
                <span aria-hidden='true'> &rarr;</span>
              </a>
            </div>

            <div className='flow-root mt-4'>
              <div className='-my-2'>
                <div className='box-content relative py-2 overflow-x-auto h-80'>
                  <div className='absolute flex px-4 space-x-8 sm:px-6 lg:px-8 '>
                    {articles.map((article: any) => (
                      <a
                        key={article.id}
                        href={`/articles/${article.slug}`}
                        className='relative flex flex-col w-56 p-6 overflow-hidden rounded-lg h-80 hover:opacity-75'
                      >
                        <span aria-hidden='true' className='absolute inset-0'>
                          <img
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
