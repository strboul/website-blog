import Link from "next/link";

/**
 * Wrapper around 'next/link' with site styling & settings
 * applied.  Use this in lieu of 'next/link'.
 */
const SiteLink = ({ children, href }) => {
  return (
    <div className="no-underline fill-current hover:text-blue-400">
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default SiteLink;
