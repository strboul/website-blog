import matter from "gray-matter";
import { fetchGithub, readFileFromGithub } from "@/src/lib/github";

const getAllPostSlugs = async () => {
  const endpoint = `${process.env.CONTENT_REPO}/contents/posts`;
  const postsList = await fetchGithub(endpoint);
  const slug = postsList.map((post) => post.name);
  return slug;
};

const getPostContent = async (slug) => {
  const indexFilePath = `${process.env.CONTENT_REPO}/contents/posts/${slug}/index.md`;
  const readFile = await readFileFromGithub(indexFilePath);
  return readFile;
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
