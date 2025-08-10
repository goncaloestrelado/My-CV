import { Anta, Raleway } from "next/font/google";
import localFont from "next/font/local";

export const anta = Anta({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anta",
  adjustFontFallback: false,
  fallback: ["sans-serif"],
});

export const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const modernTimes = localFont({
  src: "../../public/fonts/tural-alisoy-tamoderntimes/TAModernTimes-RoundedExtLt.otf",
  weight: "300",
  style: "normal",
  display: "swap",
  variable: "--font-modernTimes",
  fallback: ["var(--font-anta)", "system-ui", "sans-serif"],
});

export const allFontVariables = `${raleway.variable} ${anta.variable} ${modernTimes.variable}`;
