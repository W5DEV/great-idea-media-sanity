import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeCateogryFields {
  category: EntryFieldTypes.Symbol<"News" | "Sports">;
  subCategory: EntryFieldTypes.Symbol;
}

export type TypeCateogrySkeleton = EntrySkeletonType<
  TypeCateogryFields,
  "cateogry"
>;
export type TypeCateogry<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeCateogrySkeleton, Modifiers, Locales>;
