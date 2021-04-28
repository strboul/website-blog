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
 * @param {string} tooltip text to show as a tooltip.
 * @param {boolean} dontUseNextLink an option not to use the 'next/link'
 * component.
 */
const SiteLink = (props) => {
  const href = props.href;
  const children = props.children;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  const InternalLink = () => {
    return props.dontUseNextLink ? (
      <a href={href}>{children}</a>
    ) : (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  };

  const ExternalLink = () => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  };

  return (
    <span
      title={props.tooltip}
      className="no-underline fill-current hover:text-blue-400"
    >
      {isInternalLink ? <InternalLink /> : <ExternalLink />}
    </span>
  );
};

export default SiteLink;
