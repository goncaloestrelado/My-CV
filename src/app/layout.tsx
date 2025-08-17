import type { Metadata } from "next";
import "./globals.css";
import { allFontVariables } from "@/lib/fonts";
import { ThemeProvider } from "@/context/ThemeContext";
import { Footer } from "@/components";

export const metadata: Metadata = {
  metadataBase: new URL("https://goncalo-estrelado.netlify.app"),
  title: "Gonçalo Estrelado Portfolio",
  description:
    "Welcome to Gonçalo Estrelado's professional portfolio. Discover my expertise in web development, software engineering, and innovative digital solutions. Explore my projects, skills, and experience in creating modern, user-friendly applications.",
  keywords: "portfolio, web developer, software engineer, React, TypeScript, frontend development",
  authors: [{ name: "Gonçalo Estrelado" }],
  openGraph: {
    title: "Gonçalo Estrelado Portfolio",
    description:
      "Welcome to Gonçalo Estrelado's professional portfolio. Discover my expertise in web development, software engineering, and innovative digital solutions. Explore my projects, skills, and experience in creating modern, user-friendly applications.",
    images: [
      {
        url: "https://goncalo-estrelado.netlify.app/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview of Gonçalo Estrelado's portfolio website",
        type: "image/png",
      },
    ],
    url: "https://goncalo-estrelado.netlify.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${allFontVariables} font-raleway`}>
      <body className="transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
