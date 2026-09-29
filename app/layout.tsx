import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Literata } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
  axes: ["opsz"],
  adjustFontFallback: false,
});

const serif = Literata({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-literata",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Black Bitcoiners: A Visual Book",
  description:
    "How money works, why it keeps us behind, and how Bitcoin gives us a way out. A free visual book in 11 chapters.",
};

export const viewport: Viewport = {
  themeColor: "#211b18",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable}`}>
      <body className="bg-desk text-paper antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
