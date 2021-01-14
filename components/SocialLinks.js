import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const NewTabLink = ({ children, href }) => {
  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" href={href}>
        {children}
      </a>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <table>
      <td>
        <NewTabLink href="https://github.com/strboul">
          <FaGithub />
        </NewTabLink>
      </td>
      <td>
        <NewTabLink href="https://twitter.com/strboul">
          <FaTwitter />
        </NewTabLink>
      </td>
    </table>
  );
};

export default SocialLinks;
