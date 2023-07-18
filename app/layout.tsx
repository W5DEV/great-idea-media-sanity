import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import ExitDraftModeLink from "./ExitDraftModeLink";
import { fetchBlogPosts } from "@/src/contentful/blogPosts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Great Idea Media",
  description: "News and Sports. Nothing added.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled });

  const news = blogPosts.filter((blogPost) => {
    if (blogPost.category.fields.category === 'News') {
      return blogPost;
    }
  });
  const sports = blogPosts.filter((blogPost) => {
    if (blogPost.category.fields.category === 'Sports') {
      return blogPost;
    }
  });
  return (
    <html lang="en">
      <body className={inter.className}>
        {draftMode().isEnabled && (
          <p className="bg-orange-200 py-4 px-[6vw]">
            Draft mode is on! <ExitDraftModeLink className="underline" />
          </p>
        )}
        <NavBar news={news} sports={sports} />
        {children}
        <Footer news={news} sports={sports} />
      </body>
    </html>
  );
}
