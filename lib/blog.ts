import { decode } from "he";
import { parseStringPromise } from "xml2js";

export interface BlogPost {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  categories?: string[];
  author?: string;
}

export function sanitizeHtmlContent(html: string): string {
  if (!html) return "";

  let cleaned = decode(html);

  cleaned = cleaned
    .replace(/<h[1-6]>\s*&nbsp;\s*<\/h[1-6]>/gi, "")
    .replace(/<h[1-6]>\s*<\/h[1-6]>/gi, "")
    .replace(/<p>\s*&nbsp;\s*<\/p>/gi, "")
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")
    .replace(/<div>\s*<\/div>/gi, "")
    .replace(/\n\s*\n\s*\n/g, "\n\n");

  return cleaned;
}

const RSS_FEED_URL = "https://cynicaltechnology.com/feed/"; // Your RSS URL

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(RSS_FEED_URL, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) throw new Error("Failed to fetch RSS feed");

    const xmlText = await response.text();
    const parsed = await parseStringPromise(xmlText);

    const items = parsed.rss.channel[0].item || [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return items.map((item: any, index: number) => ({
      id: item.link?.[0]?.split("/").filter(Boolean).pop() || `post-${index}`,
      title: item.title?.[0] || "Untitled",
      link: item.link?.[0] || "",
      pubDate: item.pubDate?.[0] || "",
      description: item.description?.[0] || "",
      content: sanitizeHtmlContent(
        item["content:encoded"]?.[0] || item.description?.[0] || "",
      ),
      categories: item.category || [],
      author: item["dc:creator"]?.[0] || item.author?.[0] || "Unknown",
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  //   console.log(slug);
  return posts.find((post) => post.id === slug) || null;
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await fetchBlogPosts();
  const categories = new Set<string>();

  posts.forEach((post) => {
    post.categories?.forEach((cat) => categories.add(cat));
  });

  return Array.from(categories).sort();
}
