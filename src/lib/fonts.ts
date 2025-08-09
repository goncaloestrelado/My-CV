import { Anta, Raleway } from "next/font/google";

export const anta = Anta({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anta",
  adjustFontFallback: false, // disable metrics override to prevent Netlify build error
  fallback: ["sans-serif"], // explicit fallback to keep layout stable
});

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});
