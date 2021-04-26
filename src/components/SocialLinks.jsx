import SiteLink from "@/src/components/SiteLink";

import { FaGithub, FaTwitter, FaRss } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex flex-row space-x-3">
      <SiteLink href="https://github.com/strboul">
        <FaGithub />
      </SiteLink>
      <SiteLink href="https://twitter.com/strboul">
        <FaTwitter />
      </SiteLink>
      <SiteLink href="/feed.xml" dontUseNextLink>
        <FaRss />
      </SiteLink>
    </div>
  );
};

export default SocialLinks;
