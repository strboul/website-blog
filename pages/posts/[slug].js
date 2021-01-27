import PostLayout from "@/components/PostLayout";
import { getAllPostLinks, getPostContent } from "@/lib/posts";

import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";

function Post({ source, frontMatter }) {
  const content = hydrate(source);
  const { title, publishedAt } = frontMatter;
  return (
    <PostLayout title={title} publishedAt={publishedAt} content={content} />
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostLinks();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const source = await getPostContent(params.slug);

  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export default Post;
