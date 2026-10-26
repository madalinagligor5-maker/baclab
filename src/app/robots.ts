import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://baclab.ro").replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/azi", "/progres", "/setari", "/greseli", "/diagnostic", "/exersare"] },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
