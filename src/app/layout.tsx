import type { Metadata } from "next";
import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/utils/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eva Natalie Burgos",
  description: "Building smart machines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Brittany-style background */}
        <div
  className="fixed inset-0 -z-10
    bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#020c1b]
    before:content-[''] before:absolute before:inset-0
    before:bg-[radial-gradient(ellipse_at_top,rgba(100,255,218,0.04),transparent_60%)]"
/>


        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
