'use client';

export default function HomePage() {
  const footerNavigation = {
    shop: [
      { name: 'Bags', href: '#' },
      { name: 'Tees', href: '#' },
      { name: 'Objects', href: '#' },
      { name: 'Home Goods', href: '#' },
      { name: 'Accessories', href: '#' },
    ],
    company: [
      { name: 'Who we are', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Privacy', href: '#' },
    ],
    account: [
      { name: 'Manage Account', href: '#' },
      { name: 'Returns & Exchanges', href: '#' },
      { name: 'Redeem a Gift Card', href: '#' },
    ],
    connect: [
      { name: 'Contact Us', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Pinterest', href: '#' },
    ],
  };

  return (
    <div className='bg-white'>
      <footer aria-labelledby='footer-heading' className='bg-gray-900'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='py-20 xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
              <div className='space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
                <div>
                  <h3 className='text-sm font-medium text-white'>Shop</h3>
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.shop.map((item) => (
                      <li key={item.name} className='text-sm'>
                        <a href={item.href} className='text-gray-300 hover:text-white'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-sm font-medium text-white'>Company</h3>
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className='text-sm'>
                        <a href={item.href} className='text-gray-300 hover:text-white'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
                <div>
                  <h3 className='text-sm font-medium text-white'>Account</h3>
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.account.map((item) => (
                      <li key={item.name} className='text-sm'>
                        <a href={item.href} className='text-gray-300 hover:text-white'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-sm font-medium text-white'>Connect</h3>
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.connect.map((item) => (
                      <li key={item.name} className='text-sm'>
                        <a href={item.href} className='text-gray-300 hover:text-white'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='mt-12 md:mt-16 xl:mt-0'>
              <h3 className='text-sm font-medium text-white'>Sign up for our newsletter</h3>
              <p className='mt-6 text-sm text-gray-300'>
                Weekly highlights, without the bloat, sent to your inbox.
              </p>
              <form className='flex mt-2 sm:max-w-md'>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  type='text'
                  autoComplete='email'
                  required
                  className='w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-white rounded-md shadow-sm appearance-none focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900'
                />
                <div className='flex-shrink-0 ml-4'>
                  <button
                    type='submit'
                    className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900'
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className='py-10 border-t border-gray-800'>
            <p className='text-sm text-gray-400'>Copyright &copy; 2023 Great Idea Media.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
