import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeAuthorSkeleton } from "./TypeAuthor";
import type { TypeCateogrySkeleton } from "./TypeCateogry";

export interface TypePostFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  category: EntryFieldTypes.EntryLink<TypeCateogrySkeleton>;
  content: EntryFieldTypes.RichText;
  excerpt: EntryFieldTypes.Symbol;
  coverImage: EntryFieldTypes.AssetLink;
  date: EntryFieldTypes.Date;
  author: EntryFieldTypes.EntryLink<TypeAuthorSkeleton>;
}

export type TypePostSkeleton = EntrySkeletonType<TypePostFields, "post">;
export type TypePost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePostSkeleton, Modifiers, Locales>;
