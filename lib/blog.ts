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

    return items.map((item: any, index: number) => ({
      id: item.link?.[0]?.split("/").filter(Boolean).pop() || `post-${index}`,
      title: item.title?.[0] || "Untitled",
      link: item.link?.[0] || "",
      pubDate: item.pubDate?.[0] || "",
      description: item.description?.[0] || "",
      content: item["content:encoded"]?.[0] || item.description?.[0] || "",
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
