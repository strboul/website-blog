import PageLayout from "@/components/PageLayout";
import SiteLink from "@/components/SiteLink";
import { getSortedPostsData } from "@/lib/posts";

const BlogPosts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post} className="flex flex-row space-x-2">
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
    revalidate: 600, // render every 10 minutes
  };
};

export default Home;
