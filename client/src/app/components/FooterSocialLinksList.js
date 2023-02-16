import styled from "styled-components";
import { socialLinks } from "../../utils/socialLinks";

const SocialLinksList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  z-index: 10;
`;

export function FooterSocialLinksList() {
  return (
    <SocialLinksList>
      {socialLinks.map((socialLink) => {
        const { title, component, url } = socialLink;
        return (
          <li key={title}>
            <a href={url}>{component}</a>
          </li>
        );
      })}
    </SocialLinksList>
  );
}
