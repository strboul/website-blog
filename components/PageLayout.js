import Head from "next/head";

import styles from "@/styles/PageLayout.module.css";
import SocialLinks from "@/components/SocialLinks";

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Scientia Potentia</h2>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SocialLinks />
      <hr />
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
  return <main className={styles.main}>{children}</main>;
};

const PageLayout = ({ children, name }) => {
  return (
    <>
      <PageHead name={name} />
      <Header />
      <PageBody children={children} />
      <Footer />
    </>
  );
};

export default PageLayout;
