import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Our Services – Custom Homes, Renovations & Extensions",
    template: "%s | Dhaliwal Homes",
  },
  description:
    "Explore Dhaliwal Homes' full range of building services: custom homes, luxury homes, home renovations, second-storey extensions, knockdown rebuilds, and commercial construction across Melbourne's South East.",
  alternates: {
    canonical: "https://dhaliwalhomes.com.au/services",
  },
  openGraph: {
    title: "Building Services | Dhaliwal Homes Melbourne",
    description:
      "From custom home builds to knockdown rebuilds and commercial fitouts — Dhaliwal Homes is your registered domestic builder in Pakenham, Berwick, Cranbourne & South East Melbourne.",
    url: "https://dhaliwalhomes.com.au/services",
    images: [
      {
        url: "/images/luxury-house-at-sunny-day-in-vancouver-canada-2026-03-26-11-34-19-utc.jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Dhaliwal Homes Building Services",
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
