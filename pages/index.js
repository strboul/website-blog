import PageLayout from "@/src/components/PageLayout";
import SiteLink from "@/src/components/SiteLink";
import { getSortedPostsData } from "@/src/lib/posts";

const BlogPosts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.slug} className="flex flex-row space-x-2 pb-2">
            <div className="text-gray-600">{post.publishedAt}</div>
            <div>
              <SiteLink href={post.link}>{post.title}</SiteLink>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Home = ({ posts }) => {
  return (
    <PageLayout>
      <BlogPosts posts={posts} />
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const posts = await getSortedPostsData();
  return {
    props: {
      posts,
    },
    revalidate: process.env.ISR_REVALIDATE,
  };
};

export default Home;
