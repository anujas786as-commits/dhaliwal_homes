import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dhaliwal Homes | Premium Custom & Luxury Home Builders Melbourne",
    short_name: "Dhaliwal Homes",
    description:
      "Premier Melbourne builder specialising in luxury custom homes, extensions, renovations, and commercial construction across Melbourne.",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1a1a",
    theme_color: "#c49a3c",
    icons: [
      {
        src: "/images/logo/fav.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo/fav.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
