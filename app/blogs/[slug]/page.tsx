// app/blogs/[slug]/page.tsx
import { fetchBlogPosts, getBlogPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await getBlogPost(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description.replace(/<[^>]*>/g, "").substring(0, 160),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/blogs"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
      >
        ← Back to all posts
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
          <time>
            {new Date(post.pubDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.author && <span>By {post.author}</span>}
        </div>

        {post.categories && post.categories.length > 0 && (
          <div className="mt-4 flex gap-2 flex-wrap">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </header>

      <div
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
