import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  FooterWrapper,
  Copyright,
  LinkWrapper,
  SocialMediaTitle,
  SocialMediaWrapper,
  Link,
} from "../../StyledComponents/footerItems";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialMediaTitle>Siga-nos</SocialMediaTitle>
      <SocialMediaWrapper>
        <LinkWrapper>
          <Link>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
        </LinkWrapper>
      </SocialMediaWrapper>
      <Copyright>&copy;2020 OrganaFood</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
