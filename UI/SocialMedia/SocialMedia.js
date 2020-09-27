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
import {useClientWindow} from '../../Hooks/useClientWindow'

const SocialMedia = ({ pattern }) => {
  const window = useClientWindow();
  const onMobile = window?.innerWidth < 640;
  const menuIconSize = onMobile ? '3x' : '4x';
  const footerIconSize = onMobile ? '3x' : '3x';
  let iconSize = pattern === 'menu' ? menuIconSize : pattern === 'footer' ? footerIconSize : null; 
  return (
    <SocialMediaWrapper pattern={pattern}>
      <LinkWrapper>
        <Link pattern={pattern}>
          <FontAwesomeIcon icon={faTwitter} size={iconSize} />
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link pattern={pattern}>
          <FontAwesomeIcon icon={faFacebook} size={iconSize} />
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link pattern={pattern}>
          <FontAwesomeIcon icon={faInstagram} size={iconSize} />
        </Link>
      </LinkWrapper>
    </SocialMediaWrapper>
  );
}

export default SocialMedia;
