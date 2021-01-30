import PageLayout from "@/components/PageLayout";
import TitleSection from "@/components/TitleSection";

import { timeSince } from "@/lib/timeSince";

const PostLayout = ({ title, publishedAt, content }) => {
  return (
    <PageLayout title={title}>
      <article>
        <div className="pb-12">
          <div className="flex items-center space-x-2 pb-2">
            <div className="text-md text-gray-700 dark:text-gray-200">{publishedAt}</div>
            <div className="italic text-xs text-gray-400 dark:text-gray-500">
              {timeSince(publishedAt)}
            </div>
          </div>
          <TitleSection>{title}</TitleSection>
        </div>
        <div className="prose">{content}</div>
      </article>
    </PageLayout>
  );
};

export default PostLayout;
