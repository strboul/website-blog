import PageLayout from "@/src/components/PageLayout";
import TitleSection from "@/src/components/TitleSection";
import Prose from "@/src/components/Prose";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import { readFileFromGithub } from "@/src/lib/github";

const Projects = ({ source }) => {
  const content = hydrate(source);
  return (
    <PageLayout title="Projects">
      <TitleSection>Projects</TitleSection>
      <Prose>{content}</Prose>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const projectsPath = `${process.env.CONTENT_REPO}/contents/projects.md`;
  const projectsFile = await readFileFromGithub(projectsPath);
  const mdxProjectsFile = await renderToString(projectsFile);
  return { props: { source: mdxProjectsFile } };
};

export default Projects;
