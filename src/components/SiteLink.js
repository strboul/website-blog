import Link from "next/link";

/**
 * Wrapper around 'next/link' with site styling & settings applied.
 *
 * SiteLink works in a way that all external links (links with a different
 * domain) are opened in a new tab.
 *
 * Use this in lieu of 'next/link'.
 * @param children content to display for the link.
 * @param {string} href link to open.
 * @param {boolean} dontUseNextLink an option not to use the 'next/link'
 * component.
 */
const SiteLink = (props) => {
  const href = props.href;
  const children = props.children;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
  return (
    <span className="no-underline fill-current hover:text-blue-400">
      {isInternalLink ? (
        props.dontUseNextLink ? (
          <a href={href}>{children}</a>
        ) : (
          <Link href={href}>
            <a>{children}</a>
          </Link>
        )
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )}
    </span>
  );
};

export default SiteLink;
