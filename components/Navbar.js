import SiteLink from "@/components/SiteLink";

/**
 * Navbar of the page
 *
 * @param {Object} paths - The path names from the `/pages` directory (except
 * the defaults).
 */
const Navbar = ({ paths }) => {
  return (
    <nav className="flex justify-end">
      <div className="flex flex-row space-x-2 px-8">
        {paths.map((path) => {
          return (
            <SiteLink key={path} href={path}>
              <a>{path}</a>
            </SiteLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
