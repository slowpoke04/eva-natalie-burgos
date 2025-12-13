import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/components/utils/ThemeProvider";
import ThemeProvider from "@/components/utils/ThemeProvider";
import Header from "@/components/Header";
import MobileHeader from "@/components/utils/MobileHeader";



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
  {/* Mobile header */}
  <MobileHeader />

  <div className="lg:flex">
    {/* Desktop sidebar */}
    <Header />

    <main className="flex-1 px-6 lg:px-0">
      {children}
    </main>
  </div>
</ThemeProvider>

      </body>
    </html>
  );
}
