import PageLayout from "@/components/PageLayout";
import TitleSection from "@/components/TitleSection";

const PostLayout = ({ title, publishedAt, content }) => {
  return (
    <PageLayout title={title}>
      <article>
        <div className="pb-10">
          <div className="text-sm text-gray-500">{publishedAt}</div>
          <TitleSection>{title}</TitleSection>
        </div>
        <div className="prose">{content}</div>
      </article>
    </PageLayout>
  );
};

export default PostLayout;
