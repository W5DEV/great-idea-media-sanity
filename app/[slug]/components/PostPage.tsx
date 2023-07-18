"use client";
import RichText from '@/src/contentful/RichText';
import Image from "next/image";


export default function PostPage(posts: any) {
    console.log('nav: ', posts.sports)

  return (
    <div className="p-16 bg-white">

      <main className="mb-16">
        {/* News Post */}
        <div className="py-8 my-8 prose border-black border-y">
        <div className="pb-2">
          <h1 className="pb-2 text-3xl font-semibold">{posts.blogPost.title}</h1>
          <p className="mx-4 text-sm italic">{posts.postDate.toDateString()}</p>
        </div>

        <div className="flex flex-row items-center justify-start gap-3 mt-4 mb-10">
          <Image
            className="rounded-full"
            alt={posts.blogPost.author.fields.name}
            src={"https:" + posts.blogPost.author.fields.picture.fields.file.url}
            width={36}
            height={36}
          />
          <h2 className="text-xl font-medium">{posts.blogPost.author.fields.name}</h2>
        </div>
        <Image
          alt={posts.blogPost.coverImage.fields.file.fileName}
          src={"https:" + posts.blogPost.coverImage.fields.file.url}
          width={1920}
          height={1080}
        />
        <RichText document={posts.blogPost.body} />
      </div>
      </main>
    </div>
  )
}
