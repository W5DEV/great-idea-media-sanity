"use client";

import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BlogPost } from '@/src/contentful/blogPosts';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(posts: any) {
    console.log('nav: ', posts.sports)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const currencies = ['USD', 'CAD', 'AUD', 'EUR', 'GBP'];
    const navigation = {
        categories: [
            {
                name: 'News',
                featured: [
                    {
                        name: posts.news[0].title,
                        href: `/${posts.news[0].slug}`,
                        imageSrc: posts.news[0].coverImage.fields.file.url,
                        imageAlt: posts.news[0].coverImage.fields.file.fileName,
                    },
                    {
                        name: posts.news[1].title,
                        href: `/${posts.news[1].slug}`,
                        imageSrc: posts.news[1].coverImage.fields.file.url,
                        imageAlt: posts.news[1].coverImage.fields.file.fileName,
                    },
                    {
                        name: posts.news[2].title,
                        href: `/${posts.news[2].slug}`,
                        imageSrc: posts.news[2].coverImage.fields.file.url,
                        imageAlt: posts.news[2].coverImage.fields.file.fileName,
                    },
                    {
                        name: posts.news[3].title,
                        href: `/${posts.news[3].slug}`,
                        imageSrc: posts.news[3].coverImage.fields.file.url,
                        imageAlt: posts.news[3].coverImage.fields.file.fileName,
                    },
                ],
            },
            {
                name: 'Sports',
                featured: [
                    {
                        name: posts.sports[0].title,
                        href: `/${posts.sports[0].slug}`,
                        imageSrc: posts.sports[0].coverImage.fields.file.url,
                        imageAlt: posts.sports[0].coverImage.fields.file.fileName,
                    },
                    {
                        name: posts.sports[1].title,
                        href: `/${posts.sports[1].slug}`,
                        imageSrc: posts.sports[1].coverImage.fields.file.url,
                        imageAlt: posts.sports[1].coverImage.fields.file.fileName,
                    },
                    {
                        name: posts.sports[2].title,
                        href: `/${posts.sports[2].slug}`,
                        imageSrc:  posts.sports[2].coverImage.fields.file.url,
                        imageAlt: posts.sports[2].coverImage.fields.file.fileName,
                    },
                ],
            },
        ],
        pages: [
            { name: 'Local', href: '#' },
            { name: 'Contact', href: '#' },
        ],
    };
    const categories = [
        {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
        },
        {
            name: 'Productivity',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
        },
        {
            name: 'Workspace',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
        },
        {
            name: 'Accessories',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
        },
        { name: 'Sale', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg' },
    ];
    const collections = [
        {
            name: 'Handcrafted Collection',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
            imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
            description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
        },
        {
            name: 'Organized Desk Collection',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
            imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
            description: 'The rest of the house will still be a mess, but your desk will look great.',
        },
        {
            name: 'Focus Collection',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
            imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
            description: 'Be more productive than enterprise project managers with a single piece of paper.',
        },
    ];
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
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="flex px-4 -mb-px space-x-8">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="px-4 py-6 space-y-12">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.featured.map((item) => (
                            <div key={item.name} className="relative group">
                              <div className="overflow-hidden bg-gray-100 rounded-md aspect-h-1 aspect-w-1 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="block mt-6 text-sm font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="block p-2 -m-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  <div className="flow-root">
                    <a href="#" className="block p-2 -m-2 font-medium text-gray-900">
                      Create an account
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="block p-2 -m-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  {/* Currency selector */}
                  <form>
                    <div className="inline-block">
                      <label htmlFor="mobile-currency" className="sr-only">
                        Currency
                      </label>
                      <div className="relative -ml-2 border-transparent rounded-md group focus-within:ring-2 focus-within:ring-white">
                        <select
                          id="mobile-currency"
                          name="currency"
                          className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                        >
                          {currencies.map((currency) => (
                            <option key={currency}>{currency}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                          <ChevronDownIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src={"https:"+ posts.newest.coverImage.fields.file.url}
            alt=""
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <div className="bg-gray-900">
              <div className="flex items-center justify-between h-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                <div className="flex items-center justify-end w-full space-x-6">
                  <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                    Sign in
                  </a>
                  <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                    Create an account
                  </a>
                </div>
              </div>
            </div>

            {/* Secondary navigation */}
            <div className="bg-black bg-opacity-80 backdrop-blur-md backdrop-filter">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div>
                  <div className="flex items-center justify-between h-16">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                      <a href="#">
                        <span className="sr-only">Your Company</span>
                        <img
                          className="w-auto h-8"
                          src="https://tailwindui.com/img/logos/mark.svg?color=white"
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="hidden h-full lg:flex">
                      {/* Flyout menus */}
                      <Popover.Group className="inset-x-0 bottom-0 px-4">
                        <div className="flex justify-center h-full space-x-8">
                          {navigation.categories.map((category) => (
                            <Popover key={category.name} className="flex">
                              {({ open }) => (
                                <>
                                  <div className="relative flex">
                                    <Popover.Button className="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out">
                                      {category.name}
                                      <span
                                        className={classNames(
                                          open ? 'bg-white' : '',
                                          'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out'
                                        )}
                                        aria-hidden="true"
                                      />
                                    </Popover.Button>
                                  </div>

                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Popover.Panel className="absolute inset-x-0 text-sm text-gray-500 top-full">
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div className="absolute inset-0 bg-white shadow top-1/2" aria-hidden="true" />

                                      <div className="relative bg-white">
                                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                          <div className="grid grid-cols-4 py-16 gap-x-8 gap-y-10">
                                            {category.featured.map((item) => (
                                              <div key={item.name} className="relative group">
                                                <div className="overflow-hidden bg-gray-100 rounded-md aspect-h-1 aspect-w-1 group-hover:opacity-75">
                                                  <img
                                                    src={"https:" + item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-cover object-center"
                                                  />
                                                </div>
                                                <a href={item.href} className="block mt-4 font-medium text-gray-900">
                                                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                  {item.name}
                                                </a>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          ))}

                          {navigation.pages.map((page) => (
                            <a
                              key={page.name}
                              href={page.href}
                              className="flex items-center text-sm font-medium text-white"
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex items-center flex-1 lg:hidden">
                      <button type="button" className="p-2 -ml-2 text-white" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                      </button>

                      {/* Search */}
                      <a href="#" className="p-2 ml-2 text-white">
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
                      </a>
                    </div>

                    {/* Logo (lg-) */}
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">Your Company</span>
                      <img src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" className="w-auto h-8" />
                    </a>

                    <div className="flex items-center justify-end flex-1">
                      <a href="#" className="hidden text-sm font-medium text-white lg:block">
                        Search
                      </a>

                      <div className="flex items-center lg:ml-8">
                        {/* Help */}
                        <a href="#" className="p-2 text-white lg:hidden">
                          <span className="sr-only">Help</span>
                          <QuestionMarkCircleIcon className="w-6 h-6" aria-hidden="true" />
                        </a>
                        <a href="#" className="hidden text-sm font-medium text-white lg:block">
                          Help
                        </a>

                        {/* Cart */}
                        <div className="flow-root ml-4 lg:ml-8">
                          <a href="#" className="flex items-center p-2 -m-2 group">
                            <ShoppingBagIcon className="flex-shrink-0 w-6 h-6 text-white" aria-hidden="true" />
                            <span className="ml-2 text-sm font-medium text-white">0</span>
                            <span className="sr-only">items in cart, view bag</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">{posts.newest.title}</h1>
          <p className="mt-4 text-xl text-white">
            {posts.newest.excerpt}
          </p>
          <a
            href={posts.newest.slug}
            className="inline-block px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100"
          >
            Read More...
          </a>
        </div>
      </div>

      <main className="mb-16">
        {/* News Slider */}
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
              Latest News
            </h2>
            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              View all news
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="flow-root mt-4">
            <div className="-my-2">
              <div className="box-content relative py-2 overflow-x-auto h-80">
                <div className="absolute flex px-4 space-x-8 sm:px-6 lg:px-8 ">
                  {posts.news.map((item: any) => (
                    <a
                      key={item.id}
                      href={item.slug}
                      className="relative flex flex-col w-56 p-6 overflow-hidden rounded-lg h-80 hover:opacity-75"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img src={"https:" + item.coverImage.fields.file.url} alt="" className="object-cover object-center w-full h-full" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800"
                      />
                      <span className="relative mt-auto text-xl font-bold text-center text-white">{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 mt-6 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>

        {/* Featured News */}
        <section
          aria-labelledby="social-impact-heading"
          className="px-4 pt-24 mx-auto max-w-7xl sm:px-6 sm:pt-32 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src={"https:" + (posts.news[0].coverImage.fields.file.url === posts.newest.coverImage.fields.file.url ? posts.news[1].coverImage.fields.file.url : posts.news[0].coverImage.fields.file.url)}
                alt=""
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="relative px-6 py-32 bg-gray-900 bg-opacity-75 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
                <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block sm:inline">{posts.news[0].title === posts.newest.title ? posts.news[1].title : posts.news[0].title}</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                  {posts.news[0].excerpt === posts.newest.excerpt ? posts.news[1].excerpt : posts.news[0].excerpt}
                </p>
                <a
                  href={posts.news[0].slug === posts.newest.slug ? posts.news[1].slug : posts.news[0].slug}
                  className="block w-full px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100 sm:w-auto"
                >
                  Read More... 
                </a>
              </div>
            </div>
          </div>
        </section>

         {/* Sports Slider */}
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
              Latest Sports
            </h2>
            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              View all Sports
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="flow-root mt-4">
            <div className="-my-2">
              <div className="box-content relative py-2 overflow-x-auto h-80">
                <div className="absolute flex px-4 space-x-8 sm:px-6 lg:px-8 ">
                  {posts.sports.map((item: any) => (
                    <a
                      key={item.id}
                      href={item.slug}
                      className="relative flex flex-col w-56 p-6 overflow-hidden rounded-lg h-80 hover:opacity-75"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img src={"https:" + item.coverImage.fields.file.url} alt="" className="object-cover object-center w-full h-full" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800"
                      />
                      <span className="relative mt-auto text-xl font-bold text-center text-white">{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 mt-6 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>

        {/* Featured Sports */}
        <section
          aria-labelledby="social-impact-heading"
          className="px-4 pt-24 mx-auto max-w-7xl sm:px-6 sm:pt-32 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src={"https:" + (posts.sports[0].coverImage.fields.file.url === posts.newest.coverImage.fields.file.url ? posts.sports[1].coverImage.fields.file.url : posts.sports[0].coverImage.fields.file.url)}
                alt=""
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="relative px-6 py-32 bg-gray-900 bg-opacity-75 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
                <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block sm:inline">{posts.sports[0].title === posts.newest.title ? posts.sports[1].title : posts.sports[0].title}</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                  {posts.sports[0].excerpt === posts.newest.excerpt ? posts.sports[1].excerpt : posts.sports[0].excerpt}
                </p>
                <a
                  href={posts.sports[0].slug === posts.newest.slug ? posts.sports[1].slug : posts.sports[0].slug}
                  className="block w-full px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100 sm:w-auto"
                >
                  Read More... 
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer aria-labelledby="footer-heading" className="bg-gray-900">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-white">Shop</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.shop.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-white">Account</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.account.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Connect</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.connect.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16 xl:mt-0">
              <h3 className="text-sm font-medium text-white">Sign up for our newsletter</h3>
              <p className="mt-6 text-sm text-gray-300">The latest deals and savings, sent to your inbox weekly.</p>
              <form className="flex mt-2 sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-white rounded-md shadow-sm appearance-none focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                />
                <div className="flex-shrink-0 ml-4">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="py-10 border-t border-gray-800">
            <p className="text-sm text-gray-400">Copyright &copy; 2021 Your Company, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
