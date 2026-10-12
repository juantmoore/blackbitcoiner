import { notFound, redirect } from "next/navigation";
import { chapters } from "@/lib/book";

// The book now lives on one page. Keep old chapter URLs working by sending
// them to the matching page anchor.

const renamed: Record<string, string> = {
  "inflation-the-hidden-tax": "inflation",
  "deflation-what-they-dont-want": "deflation",
  "real-estate-and-the-landlord-trap": "the-landlord-trap",
};

export function generateStaticParams() {
  return [...chapters.map((c) => ({ slug: c.slug })), ...Object.keys(renamed).map((slug) => ({ slug }))];
}

export default async function ChapterRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const target = renamed[slug] ?? slug;
  if (!chapters.some((c) => c.slug === target)) notFound();
  redirect(`/#${target}`);
}
