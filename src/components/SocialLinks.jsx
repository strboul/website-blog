import SiteLink from "@/src/components/SiteLink";

import { FaGithub, FaTwitter, FaRss } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex flex-row space-x-3">
      <SiteLink href="https://github.com/strboul" tooltip="Github">
        <FaGithub />
      </SiteLink>
      <SiteLink href="https://twitter.com/strboul" tooltip="Twitter">
        <FaTwitter />
      </SiteLink>
      <SiteLink href="/feed.xml" tooltip="RSS feed" dontUseNextLink>
        <FaRss />
      </SiteLink>
    </div>
  );
};

export default SocialLinks;
