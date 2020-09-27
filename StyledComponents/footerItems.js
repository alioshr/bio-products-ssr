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

export const Copyright = styled.small`
  grid-area: copyright;
`;
