import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dhaliwalhomes.com.au";

  // Base routes
  const staticRoutes = ["", "/about", "/services", "/portfolio", "/blog", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Dynamic Service pages
  const serviceSlugs = [
    "custom-homes",
    "luxury-homes",
    "renovations",
    "extensions",
    "knockdown-rebuild",
    "commercial-construction",
  ];
  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Blog pages
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
