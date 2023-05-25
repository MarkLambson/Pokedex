import { ReactComponent as LinkedinLogo } from "../../assets/logo-linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.linkedin.com/in/mark-lambson-47ba61a4/">
        <LinkedinLogo />
      </a>
      <a href="https://github.com/MarkLambson">
        <GithubLogo />
      </a>
    </div>
  );
};
