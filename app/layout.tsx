import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PrivyAI — Private AI for Document Analysis",
  description:
    "Analyze hundreds of research papers and legal documents instantly. Complete privacy—your data never leaves your machine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)] noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
