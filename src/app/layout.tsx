import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/components/utils/ThemeProvider";
import ThemeProvider from "@/components/utils/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Natalie Burgos",
  description:
    "I build thoughtful, human-centered solutions at the intersection of science and engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
     <body className={`${inter.variable} font-sans depth-bg`}>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
