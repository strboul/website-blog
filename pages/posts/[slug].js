import PageLayout from "@/components/PageLayout";
import { getAllPostLinks, getPostContent } from "@/lib/posts";

function Post({ postContent }) {
  return <PageLayout>{postContent}</PageLayout>;
}

export async function getStaticPaths() {
  const paths = await getAllPostLinks();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postContent = await getPostContent(params.slug);
  return {
    props: {
      postContent,
    },
  };
}

export default Post;
