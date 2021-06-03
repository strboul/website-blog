import SiteLink from "@/src/components/SiteLink";

/**
 * Navbar of the page
 *
 * @param {Object} paths - The path names from the `/pages` directory (except
 * the defaults).
 */
const Navbar = ({ paths }) => {
  return (
    <nav className="text-sm md:text-base flex justify-end">
      <div className="flex flex-row space-x-2 px-8">
        {paths.map((path) => {
          return (
            <SiteLink key={path} href={path}>
              {path}
            </SiteLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
