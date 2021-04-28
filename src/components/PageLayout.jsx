import Head from "next/head";
import SiteLink from "@/src/components/SiteLink";

import SocialLinks from "@/src/components/SocialLinks";
import ThemeChanger from "@/src/components/ThemeChanger";
import Navbar from "@/src/components/Navbar";
import DevMode from "@/src/components/DevMode";

const Header = () => {
  return (
    <div className="flex justify-between px-8 py-4">
      <div>
        <SiteLink href="/" tooltip="Homepage">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-500">
            Scientia Potentia
          </h1>
        </SiteLink>
      </div>
      <div className="py-2">
        <ThemeChanger />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex justify-between px-8 py-10">
      <SocialLinks />
      <div className="text-xs">
        &#169; 2017 &mdash; {new Date().getFullYear()} | All rights reserved
      </div>
    </footer>
  );
};

const PageHead = ({ title }) => {
  const nameTitle = typeof title !== "undefined" ? `${title} | ` : "";
  return (
    <Head>
      <title>{nameTitle}Scientia Potentia</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </Head>
  );
};

const PageBody = ({ children }) => {
  return <main className="p-8 flex-grow">{children}</main>;
};

const PageLayout = ({ children, title }) => {
  return (
    <div className="dark:bg-black dark:text-gray-100">
      <div className="min-h-screen flex flex-col">
        <DevMode />
        <div className="max-w-3xl mx-auto mb-16 w-full">
          <PageHead title={title} />
          <Header />
          <Navbar paths={["/about", "/projects"]} />
          <PageBody children={children} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
