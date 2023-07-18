"use client";

import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function HomePage(posts: any) {
    console.log('nav: ', posts.sports)


  return (
    <div className="bg-white">


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

    </div>
  )
}
