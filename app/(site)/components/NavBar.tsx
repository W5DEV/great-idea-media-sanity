'use client';

import { Fragment, useState } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = {
    pages: [
      { name: 'Home', href: '/' },
      { name: 'News', href: '/news' },
      { name: 'Sports', href: '/sports' },
      { name: 'Media', href: '/media' },
      { name: 'Columns', href: '/columns' },
    ],
  };

  return (
    <div className='bg-white'>
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl'>
                <div className='flex px-4 pt-5 pb-2'>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='w-6 h-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}

                <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      <a href={page.href} className='block p-2 -m-2 font-medium text-gray-900'>
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Hero section */}
      <div className='relative bg-gray-900'>
        {/* Navigation */}
        <header className='relative z-10'>
          <nav aria-label='Top'>
            {/* Account navigation */}
            {/* <div className="bg-gray-900">
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
            </div> */}

            {/* Main navigation */}
            <div className='bg-black bg-opacity-80 backdrop-blur-md backdrop-filter'>
              <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div>
                  <div className='flex items-center justify-between h-16'>
                    {/* Logo (lg+) */}
                    <div className='hidden lg:flex lg:flex-1 lg:items-center'>
                      <a href='/'>
                        <span className='sr-only'>Great Idea Media</span>
                        <Image
                          quality={25}
                          height={36}
                          width={300}
                          src='/great-idea-logo.svg'
                          alt=''
                        />
                      </a>
                    </div>

                    <div className='hidden h-full lg:flex'>
                      {/* Flyout menus */}
                      <Popover.Group className='inset-x-0 bottom-0 px-4'>
                        <div className='flex justify-center h-full space-x-8'>
                          {navigation.pages.map((page) => (
                            <Link
                              key={page.name}
                              href={page.href}
                              className='flex items-center text-sm font-medium text-white'
                            >
                              {page.name}
                            </Link>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className='flex items-center flex-1 lg:hidden'>
                      <button
                        type='button'
                        className='p-2 -ml-2 text-white'
                        onClick={() => setMobileMenuOpen(true)}
                      >
                        <span className='sr-only'>Open menu</span>
                        <Bars3Icon className='w-6 h-6' aria-hidden='true' />
                      </button>
                    </div>

                    {/* Logo (lg-) */}
                    <a href='/' className='lg:hidden'>
                      <span className='sr-only'>Great Idea Media</span>
                      <Image
                        src='/great-idea-logo.svg'
                        alt=''
                        height={32}
                        width={300}
                        quality={25}
                      />
                    </a>

                    <div className='flex items-center justify-end flex-1'>
                      {/* Search */}
                      <a href='#' className='p-2 ml-4 text-white'>
                        <span className='sr-only'>Search</span>
                        <MagnifyingGlassIcon className='w-6 h-6' aria-hidden='true' />
                      </a>

                      <div className='flex items-center lg:ml-4'>
                        {/* Help */}
                        <span className='p-2 text-white'>
                          <span className='sr-only'>Help</span>
                          <QuestionMarkCircleIcon className='w-6 h-6' aria-hidden='true' />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}
