import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Melbourne's Custom Home Builder",
  description:
    "Learn about Dhaliwal Homes and founder Devinder Dhaliwal – a registered domestic builder based in Melbourne specialising in bespoke custom homes, structural extensions, and renovations across Melbourne.",
  alternates: {
    canonical: "https://dhaliwalhomes.com.au/about",
  },
  openGraph: {
    title: "About Dhaliwal Homes | Custom & Luxury Home Builder Melbourne",
    description:
      "Dhaliwal Homes is a boutique Melbourne residential builder focused on structural quality, direct builder access, and fixed-price transparency.",
    url: "https://dhaliwalhomes.com.au/about",
    images: [
      {
        url: "/images/perfect-usa-home-2026-03-17-04-21-11-utc.jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "About Dhaliwal Homes – Founder Devinder Dhaliwal",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
