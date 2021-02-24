import { getSortedPostsData } from "@/src/lib/posts";

export const generateRss = (posts) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Scientia Potentia</title>
      <description>Scientia Potentia</description>
      <link>${process.env.DOMAIN}/posts</link>
      <lastBuildDate>${new Date(
        posts[0].publishedAt
      ).toUTCString()}</lastBuildDate>
      <atom:link href=\"${
        process.env.DOMAIN
      }/feed.xml\" rel="self" type="application/rss+xml"/>
      ${posts
        .map((post) => {
          return `
            <item>
              <title>${post.title}</title>
              <description>${post.summary}</description>
              <link>${process.env.DOMAIN + post.link}</link>
              <guid>${process.env.DOMAIN + post.link}</guid>
              <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
            </item>
          `;
        })
        .join("")}
    </channel>
  </rss>
`;

export default async (_, res) => {
  const posts = await getSortedPostsData();
  const rss = generateRss(posts);
  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(rss);
  res.end();
};
