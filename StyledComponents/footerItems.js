import styled from "styled-components";
import {mainColors} from './Library/variables'

export const FooterWrapper = styled.footer`
  text-align: center;
  padding: 1rem;
  height: 11rem;
  background-color: ${mainColors.lightNeutral};
  color: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 4rem auto;
  grid-template-areas:
    "docs social-title faq" "docs social faq"
    "copyright copyright copyright";
`;

export const SocialMediaTitle = styled.h4`
  grid-area: social-title;
  margin: 1rem;
`;

export const SocialMediaWrapper = styled.ul`
  padding-left: 0;
  grid-area: social;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LinkWrapper = styled.li`
  display: inline-block;
  margin: 0 1rem;
`;

export const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  color: black;
  :hover {
    color: ${mainColors.accentBackground};
    transform: scale(1.2);
  }
`;

export const Copyright = styled.small`
  grid-area: copyright;
`;
