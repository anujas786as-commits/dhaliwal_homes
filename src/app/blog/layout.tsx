import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Building & Design Blog – Melbourne Construction Insights",
    template: "%s | Dhaliwal Homes",
  },
  description:
    "Expert advice on Melbourne building permits, luxury home design trends, renovation planning, NCC compliance, knockdown rebuilds, and construction tips from Dhaliwal Homes.",
  alternates: {
    canonical: "https://dhaliwalhomes.com.au/blog",
  },
  openGraph: {
    title: "Building & Design Blog | Dhaliwal Homes Melbourne",
    description:
      "Read expert articles on custom home construction, Melbourne planning regulations, home renovation checklists, and luxury design trends from Dhaliwal Homes.",
    url: "https://dhaliwalhomes.com.au/blog",
    images: [
      {
        url: "/images/a-suburban-luxury-home-in-a-north-american-city-2026-01-11-09-38-23-utc.jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Dhaliwal Homes Building & Design Blog",
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
