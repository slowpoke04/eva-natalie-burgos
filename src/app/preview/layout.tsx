import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eva Natalie Burgos | Portfolio",
  description: "Biomedical Engineering · Research · Medical Devices",
  openGraph: {
    title: "Eva Natalie Burgos | Portfolio",
    description: "Biomedical Engineering · Research · Medical Devices",
    url: "https://eva-natalie-burgos-tyxz.vercel.app/preview",
    siteName: "Eva Natalie Burgos",
    type: "website",
    images: [
      {
        url: "https://eva-natalie-burgos-tyxz.vercel.app/preview",
        width: 1200,
        height: 630,
        alt: "Eva Natalie Burgos Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva Natalie Burgos | Portfolio",
    description: "Biomedical Engineering · Research · Medical Devices",
    images: ["https://eva-natalie-burgos-tyxz.vercel.app/preview"],
  },
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
