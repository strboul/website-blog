import matter from "gray-matter";
import { fetchGithub } from "@/src/lib/github";

// TODO move it to next.config.js ?
const blogPostsRepo = "repos/strboul/website-blog-posts";

const getAllPostSlugs = async () => {
  const endpoint = `${blogPostsRepo}/contents/posts`;
  const postsList = await fetchGithub(endpoint);
  const slug = postsList.map((post) => post.name);
  return slug;
};

const getPostContent = async (slug) => {
  const indexFile = await fetchGithub(
    `${blogPostsRepo}/contents/posts/${slug}/index.md`
  );
  const content = Buffer.from(indexFile.content, "base64").toString("utf-8");
  return content;
};

const getSortedPostsData = async () => {
  const slugs = await getAllPostSlugs();
  const allPostsData = await Promise.all(
    slugs.map(async (slug) => {
      const content = await getPostContent(slug);
      const { data: metadata } = matter(content);
      if (metadata.draft) {
        return null;
      }
      return { slug, link: `/posts/${slug}`, ...metadata };
    })
  );
  const allPostsDataFiltered = allPostsData.filter(Boolean);

  // order posts by date
  const allPostsDataSorted = allPostsDataFiltered.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  return allPostsDataSorted;
};

export { getPostContent, getSortedPostsData };
