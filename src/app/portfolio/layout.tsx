import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Vision – Inspiration Gallery",
  description:
    "Browse Dhaliwal Homes' inspiration gallery — curated exterior, interior, modern, classic, and landscape design styles to help you envision your custom Melbourne home.",
  alternates: {
    canonical: "https://dhaliwalhomes.com.au/portfolio",
  },
  openGraph: {
    title: "Design Vision & Inspiration Gallery | Dhaliwal Homes",
    description:
      "Explore architectural styles, exterior facades, interior concepts, and landscape designs curated by Dhaliwal Homes to inspire your custom build in Melbourne.",
    url: "https://dhaliwalhomes.com.au/portfolio",
    images: [
      {
        url: "/images/a-suburban-luxury-home-in-a-north-american-city-2026-03-26-09-21-00-utc.jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Dhaliwal Homes Design Vision Gallery",
      },
    ],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
