// components/BlogList.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogListProps {
  initialPosts: BlogPost[];
  categories: string[];
}

export default function BlogList({ initialPosts, categories }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"date" | "title">("date");

  const filteredPosts = useMemo(() => {
    let filtered = initialPosts;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query),
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) =>
        post.categories?.includes(selectedCategory),
      );
    }

    // Sort
    if (sortBy === "date") {
      filtered.sort(
        (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
      );
    } else {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [initialPosts, searchQuery, selectedCategory, sortBy]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 space-y-4 md:flex md:items-center md:justify-between md:space-y-0 md:gap-4">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-12 px-4 py-1 border rounded-lg"
        />

        <div className="flex gap-4 flex-wrap md:flex-nowrap">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 h-12 py-2 bg-background border rounded-lg"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "date" | "title")}
            className="px-4 h-12 bg-background py-2 border rounded-lg"
          >
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Showing {filteredPosts.length} of {initialPosts.length} posts
      </p>

      {/* Blog list */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >
            <Link href={`/blogs/${post.id}`}>
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                {post.title}
              </h2>
            </Link>

            <time className="text-sm text-gray-500">
              {new Date(post.pubDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>

            <p className="mt-3 text-gray-700 dark:text-gray-400 line-clamp-3">
              {post.description.replace(/<[^>]*>/g, "")}
            </p>

            {post.categories && post.categories.length > 0 && (
              <div className="mt-4 flex gap-2 flex-wrap">
                {post.categories.slice(0, 3).map((cat) => (
                  <span
                    key={cat}
                    className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 py-12">No posts found</p>
      )}
    </div>
  );
}
