import PageLayout from "@/src/components/PageLayout";
import TitleSection from "@/src/components/TitleSection";
import Prose from "@/src/components/Prose";

import timeSince from "@/src/lib/timeSince";

const PostLayout = ({ title, publishedAt, readingTime, content }) => {
  return (
    <PageLayout title={title}>
      <article>
        <div className="pb-14">
          <TitleSection>{title}</TitleSection>
          <div className="flex space-x-2 text-sm text-gray-400 dark:text-gray-500">
            <div>Metin Yazici</div>
            <div>•</div>
            <div>
              {publishedAt} - <i>{timeSince(publishedAt)}</i>
            </div>
            <div>•</div>
            <div>{readingTime}</div>
          </div>
        </div>
        <Prose>{content}</Prose>
      </article>
    </PageLayout>
  );
};

export default PostLayout;
