import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, Outfit } from "next/font/google";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GsapEffects } from "@/components/ui/gsap-effects";
import { getSettings } from "@/lib/db-helper";
import { MaintenanceProvider } from "@/components/ui/maintenance-provider";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhaliwalhomes.com.au"),
  title: {
    default: "Dhaliwal Homes | Premium Custom & Luxury Home Builders Melbourne",
    template: "%s | Dhaliwal Homes",
  },
  description: "Dhaliwal Homes is a premier Melbourne builder specializing in luxury custom homes, multi-generational extensions, high-end renovations, and commercial construction. Serving South East Melbourne, Pakenham, Berwick, Officer, and Cranbourne.",
  keywords: [
    "Custom Home Builder Melbourne",
    "Luxury Home Builder Melbourne",
    "Home Renovations Melbourne",
    "Commercial Builder Melbourne",
    "Knockdown Rebuild Melbourne",
    "Home Extensions Melbourne",
    "Construction Company Melbourne",
    "Builder Pakenham",
    "Builder Berwick",
    "Builder Cranbourne",
    "Builder Narre Warren",
    "Builder Officer",
    "Second Storey Extensions Melbourne",
    "Bespoke Homes Melbourne",
    "DSD Holdings",
    "Devinder Dhaliwal Builder",
  ],
  authors: [{ name: "Dhaliwal Homes", url: "https://dhaliwalhomes.com.au" }],
  creator: "Dhaliwal Homes",
  publisher: "DSD Holdings Pty Ltd",
  openGraph: {
    title: "Dhaliwal Homes | Premium Custom & Luxury Home Builders Melbourne",
    description: "Building Melbourne's Future, One Exceptional Project at a Time. Precision custom home builders, renovations, and extensions in Victoria, Australia.",
    url: "https://dhaliwalhomes.com.au",
    siteName: "Dhaliwal Homes",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/beautiful-house-exterior-at-twilight-in-suburban-s-2026-03-18-08-25-48-utc.jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Dhaliwal Homes – Premium Custom Home Builders Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhaliwal Homes | Premium Custom & Luxury Home Builders Melbourne",
    description: "Building Melbourne's Future, One Exceptional Project at a Time. Precision custom home builders, renovations, and extensions in Victoria.",
    images: ["/images/beautiful-house-exterior-at-twilight-in-suburban-s-2026-03-18-08-25-48-utc.jpg.jpeg"],
  },
  alternates: {
    canonical: "https://dhaliwalhomes.com.au",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "construction",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Dhaliwal Homes",
    "legalName": "DSD Holdings Pty Ltd T/A Dhaliwal Homes",
    "url": "https://dhaliwalhomes.com.au",
    "logo": "https://dhaliwalhomes.com.au/images/logo/fav.png",
    "image": "https://dhaliwalhomes.com.au/images/beautiful-house-exterior-at-twilight-in-suburban-s-2026-03-18-08-25-48-utc.jpg.jpeg",
    "description": "Bespoke Melbourne residential builder specializing in luxury custom homes, multi-generational extensions, modern renovations, and knockdown-rebuilds in Pakenham and South East suburbs.",
    "telephone": "+61433 704 645",
    "email": "devinder@hotmail.com.au",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1424, 1 Queens Road",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3004",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.8427,
      "longitude": 144.9749
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "areaServed": [
      "Melbourne",
      "Pakenham",
      "Berwick",
      "Officer",
      "Cranbourne",
      "Narre Warren",
      "South East Melbourne"
    ],
    "priceRange": "$$$$"
  };

  return (
    <html
      lang="en"
      className={`${sans.variable} ${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground flex flex-col">
        <ScrollReveal />
        <GsapEffects />
        <MaintenanceProvider initialMaintenanceMode={!!settings.maintenanceMode}>
          {children}
        </MaintenanceProvider>
      </body>
    </html>
  );
}

