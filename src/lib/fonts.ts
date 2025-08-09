import { Anta, Raleway } from "next/font/google";

// Google font Anta (single weight) loaded via next/font for optimal performance & no FOUT.
export const anta = Anta({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anta",
});

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});
