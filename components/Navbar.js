import SiteLink from "@/components/SiteLink";

/**
 * Navbar of the page
 *
 * @param {Object} paths - The path names from the `/pages` directory (except
 * the defaults).
 */
const Navbar = ({ paths }) => {
  return (
    <nav className="flex flex-row space-x-2 float-right px-8">
      {paths.map((path) => {
        return (
          <SiteLink href={path}>
            <a key={path}>{path}</a>
          </SiteLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
