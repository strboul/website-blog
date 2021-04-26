import PageLayout from "@/src/components/PageLayout";
import TitleSection from "@/src/components/TitleSection";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

const About = ({ source }) => {
  const content = hydrate(source);

  return (
    <PageLayout title="About">
      <div className="pb-6">
        <TitleSection>About</TitleSection>
      </div>
      <div className="prose">{content}</div>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const source = `
  I initially started blogging in June 2017 and been mainly writing about many
  different topics including, but not limited to, programming languages,
  statistics, data visualizations, databases and relational tables, web
  applications, and so on.

  If you find my writing interesting, follow me from
  the links in the footer so we can be in touch. This site is made with amazing
  [Next.js](https://nextjs.org/) and is currently hosted on
  [Vercel](https://vercel.com/). You can get the source code of the site from
  [strboul/website-blog](https://github.com/strboul/website-blog).

  Please note that some parts of the website are still under construction 🚧.
  `;
  const mdxSource = await renderToString(source);
  return { props: { source: mdxSource } };
};

export default About;
