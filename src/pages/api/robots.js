export default async (_, res) => {
  const robots = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${process.env.DOMAIN}/sitemap.xml`,
  ].join("\n");
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  res.write(robots);
  res.end();
};
