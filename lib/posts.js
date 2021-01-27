import matter from "gray-matter";
import { fetchGithub } from "@/lib/github";

// TODO move it to next.config.js ?
const blogPostsRepo = "repos/strboul/website-blog-posts";

const getAllPostLinks = async () => {
  const endpoint = `${blogPostsRepo}/contents/posts`;
  const postsList = await fetchGithub(endpoint);
  return postsList.map((post) => {
    return {
      params: {
        slug: post.name,
      },
    };
  });
};

const getPostContent = async (postLink) => {
  const indexFile = await fetchGithub(
    `${blogPostsRepo}/contents/posts/${postLink}/index.md`
  );
  const content = Buffer.from(indexFile.content, "base64").toString("utf-8");
  return content;
};

const getSortedPostsData = async () => {
  const postLinks = await getAllPostLinks();
  const allPostsData = await Promise.all(
    postLinks.map(async (postLink) => {
      const slug = postLink.params.slug;
      const content = await getPostContent(slug);
      const { data: metadata } = matter(content);
      return { slug: `posts/${slug}`, ...metadata };
    })
  );

  // order posts by date
  const allPostsDataSorted = allPostsData.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  return allPostsDataSorted;
};

export { getAllPostLinks, getPostContent, getSortedPostsData };
