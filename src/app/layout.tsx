import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { geist, geistMono, unbounded } from "@/styles/fonts";
import "./globals.sass";

const description =
  "Independent digital studio. Websites, Telegram mini apps and tools for streamers. Built layer by layer.";

export const metadata: Metadata = {
  metadataBase: new URL("https://recursia.online"),
  title: "RECURSIA — studio",
  description,
  applicationName: "RECURSIA",
  authors: [{ name: "RECURSIA", url: "https://recursia.online" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "RECURSIA",
    title: "RECURSIA — studio",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "RECURSIA — studio",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffd400",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>
        {children}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          type="module"
          data-cf-beacon='{"token": "35e2d7bb9dbf4aaab2bdf55c87de7be6"}'
        />
      </body>
    </html>
  );
}
