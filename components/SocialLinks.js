import SiteLink from "@/components/SiteLink";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex flex-row space-x-3">
      <SiteLink href="https://github.com/strboul">
        <a>
          <FaGithub />
        </a>
      </SiteLink>
      <SiteLink href="https://twitter.com/strboul">
        <a>
          <FaTwitter />
        </a>
      </SiteLink>
    </div>
  );
};

export default SocialLinks;
