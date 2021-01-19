import SiteLink from "@/components/SiteLink";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex flex-row space-x-3">
      <SiteLink href="https://github.com/strboul">
        <a target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </SiteLink>
      <SiteLink href="https://twitter.com/strboul">
        <a target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </SiteLink>
    </div>
  );
};

export default SocialLinks;
