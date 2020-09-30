import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  LinkWrapper,
  SocialMediaWrapper,
  Link,
} from "../../StyledComponents/socialMediaItems";

const SocialMedia = ({ pattern }) => {

  return (
    <SocialMediaWrapper pattern={pattern}>
      <LinkWrapper>
        <Link pattern={pattern}>
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link pattern={pattern}>
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link pattern={pattern}>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </LinkWrapper>
    </SocialMediaWrapper>
  );
}

export default SocialMedia;
