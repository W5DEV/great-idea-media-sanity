import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { useEffect } from "react";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  category,
  subCategory,
  tags,
  post,
}) {
  useEffect(() => {
    if (post) {
      console.log(post.category.category);
      console.log(category);
      console.log(subCategory);
      console.log(tags);
    }
  });
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mt-4 mb-10">
        {category && (
          <span className="p-2 mr-1 text-white bg-black">{category}</span>
        )}
        {subCategory && (
          <span className="p-2 mx-1 text-white bg-black">{subCategory}</span>
        )}
        {tags &&
          tags.map((tag) => {
            console.log(tag.id);
            return (
              <span className="p-2 mx-1 text-white bg-black" key={tag.id}>
                {tag.name}&nbsp;
              </span>
            );
          })}
      </div>
      <div className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-6 text-lg">
        <DateComponent dateString={date} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} slug={coverImage.slug} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6 md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </>
  );
}
