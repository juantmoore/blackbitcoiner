import { Reader } from "@/components/reader";
import { buildPages } from "@/lib/book";

export default function Home() {
  return <Reader pages={buildPages()} />;
}
