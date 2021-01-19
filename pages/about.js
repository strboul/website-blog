import PageLayout from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <h2 className="text=lg font-medium pb-6">About</h2>
      <p className="w-3/4">
        I initially started blogging in June 2017 and been mainly writing about
        many different topics including, but not limited to, programming
        languages, statistics, data visualizations, databases and relational
        tables, web applications and so on. If you find my writing interesting,
        follow me from the links in the footer so we can be in touch. This site
        is made with the [Next.js](https://nextjs.org/) and is currently hosted
        on [Vercel](https://vercel.com/). Please note that the website is still
        under construction.
      </p>
    </PageLayout>
  );
};

export default About;
