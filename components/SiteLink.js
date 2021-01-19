import Link from "next/link";

/**
 * Wrapper around 'next/link' with site styling & settings
 * applied.  Use this in lieu of 'next/link'.
 */
const SiteLink = ({ children, href }) => {
  return (
    <div className="fill-current hover:text-blue-600">
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default SiteLink;
