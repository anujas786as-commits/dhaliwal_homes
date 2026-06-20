import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Book a Free Consultation",
  description:
    "Get in touch with Dhaliwal Homes to discuss your custom home, renovation, or extension project. Book a free feasibility consultation with a Dhaliwal Homes expert in Melbourne.",
  alternates: {
    canonical: "https://dhaliwalhomes.com.au/contact",
  },
  openGraph: {
    title: "Contact Dhaliwal Homes | Free Consultation Melbourne",
    description:
      "Ready to start your custom home build or renovation? Contact a Dhaliwal Homes expert at Dhaliwal Homes for a free feasibility consultation in Melbourne.",
    url: "https://dhaliwalhomes.com.au/contact",
    images: [
      {
        url: "/images/family-embracing-outside-of-modern-home-on-sunny-d-2026-03-25-02-45-12-utc.jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Dhaliwal Homes Melbourne",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
