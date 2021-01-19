import Head from "next/head";
import SiteLink from "@/components/SiteLink";

import SocialLinks from "@/components/SocialLinks";
import ThemeChanger from "@/components/ThemeChanger";
import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <div className="flex justify-between py-4 px-6">
      <div>
        <SiteLink href="/">
          <a>
            <h1 className="text-2xl font-medium">Scientia Potentia</h1>
          </a>
        </SiteLink>
      </div>
      <div>
        <ThemeChanger />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex justify-between p-4">
      <SocialLinks />
      <p style={{ fontSize: "x-small" }}>
        &#169; 2017 &mdash; {new Date().getFullYear()} | All rights reserved
      </p>
    </footer>
  );
};

const PageHead = ({ name }) => {
  const nameTitle = typeof name !== "undefined" ? `${name} | ` : "";
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
  return <main className="p-8">{children}</main>;
};

const PageLayout = ({ children, name }) => {
  const navbarPaths = ["/about", "/notes"];
  return (
    <div className="dark:bg-black dark:text-gray-100">
      <PageHead name={name} />
      <Header />
      <Navbar paths={navbarPaths} />
      <PageBody children={children} />
      <Footer />
    </div>
  );
};

export default PageLayout;
