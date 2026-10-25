import { Geist, Geist_Mono, Unbounded } from "next/font/google";

export const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const geist = Geist({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const geistMono = Geist_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
