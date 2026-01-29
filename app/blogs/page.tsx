import type { Metadata } from "next";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Blog | Cynical Blogs",
  description: "Read the latest articles and updates on Cynical Blogs.",
};

export default function BlogPage() {
  return (
    <div>
      <UnderConstruction />
    </div>
  );
}
