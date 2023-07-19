import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import ExitDraftModeLink from './ExitDraftModeLink';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BlogPosts from '../posts.json';
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
  const news = BlogPosts.news;
  const sports = BlogPosts.sports;
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
