import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/components/utils/ThemeProvider";
import ThemeProvider from "@/components/utils/ThemeProvider";
import Header from "@/components/Header";




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
  <div className="grid lg:grid-cols-[420px_1fr]">
    {/* Sidebar */}
    <Header />

    {/* Main content */}
    <main className="px-6 lg:px-12">
      {children}
    </main>
  </div>
</ThemeProvider>



      </body>
    </html>
  );
}
