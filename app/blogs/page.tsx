import { fetchBlogPosts, getAllCategories } from "@/lib/blog";
import type { Metadata } from "next";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog | Cynical Blogs",
  description: "Read the latest articles and updates on Cynical Blogs.",
  alternates: {
    canonical: "https://cynicalsite.vercel.app/blogs",
  },
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogsPage() {
  const posts = await fetchBlogPosts();
  const categories = await getAllCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <BlogList initialPosts={posts} categories={categories} />
    </div>
  );
}
