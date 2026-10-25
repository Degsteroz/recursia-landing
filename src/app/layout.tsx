import type { Metadata } from "next";
import { geist, geistMono, unbounded } from "@/styles/fonts";
import "./globals.sass";

export const metadata: Metadata = {
  title: "RECURSIA — studio",
  description:
    "Independent digital studio. Websites, Telegram mini apps and tools for streamers. Built layer by layer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
