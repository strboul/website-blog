import { getSortedPostsData } from "@/src/lib/posts";

const generateSitemap = (posts) => {
  return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${posts
        .map((post) => {
          return `
            <url>
              <loc>${process.env.DOMAIN + post.link}</loc>
              <lastmod>${post.publishedAt}</lastmod>
            </url>
          `;
        })
        .join("")}
    </urlset>
    `;
};

export default async (_, res) => {
  const posts = await getSortedPostsData();
  const sitemap = generateSitemap(posts);
  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(sitemap);
  res.end();
};
