import matter from "gray-matter";
import fetchGithub from "@/src/lib/github";

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

      /* Exclude draft posts from the list.  If the Next is in the development
       * mode, show them with a draft mark.*/
      if (typeof metadata.draft === "undefined" || metadata.draft) {
        if (process.env.NODE_ENV === "development") {
          const draft_text = "[DRAFT]";
          metadata.title = metadata.title.startsWith(draft_text)
            ? metadata.title
            : `${draft_text} ${metadata.title}`;
        } else {
          return null;
        }
      }

      return { slug, link: `/posts/${slug}`, ...metadata };
    })
  );
  // filter all null values
  const allPostsDataFiltered = allPostsData.filter(Boolean);

  // order posts by date
  const allPostsDataSorted = allPostsDataFiltered.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  return allPostsDataSorted;
};

export { getPostContent, getSortedPostsData };
