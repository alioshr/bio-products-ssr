import React from "react";
import { FooterWrapper, Copyright } from "../../StyledComponents/footerItems";
import {
  SocialMediaTitle,
} from "../../StyledComponents/socialMediaItems";
import SocialMedia from '../../UI/SocialMedia/SocialMedia'

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialMediaTitle>Siga-nos</SocialMediaTitle>
      <SocialMedia pattern="footer" iconSize="2x"/>
      <Copyright>&copy;2020 OrganaFood</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
