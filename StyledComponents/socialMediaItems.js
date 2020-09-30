import styled, { css } from "styled-components";
import { mainColors } from "./Library/variables";

const colorPattern = (pattern) => {
  const footer = css`
    color: black;
    :hover {
      color: ${mainColors.accentBackground};
    }
    svg {
      font-size: 3rem;
    }
    @media (min-width: 40rem) {
      svg {
        font-size: 3rem;
      }
    }
  `;
  const menu = css`
    color: white;
    :hover {
      color: ${mainColors.accentOrange};
    }
    svg {
      font-size: 3rem;
    }
    @media (min-width: 40rem) {
      svg {
        font-size: 4rem;
      }
    }
  `;
  return pattern === "footer"
    ? footer
    : pattern === "menu"
    ? menu
    : alert("check color pattern at socialmediaitems.js");
};

export const SocialMediaTitle = styled.h4`
  grid-area: social-title;
  margin: 1rem;
`;

//the grid area is just for the footer
export const SocialMediaWrapper = styled.ul`
  width: 100%;
  padding-left: 0;
  grid-area: social;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ pattern }) =>
    pattern === "menu" &&
    css`
      z-index: 1;
      margin-top: 5rem;
    `};

  @media (max-height: 28rem) {
    margin-top: 1rem;
  }
`;

export const LinkWrapper = styled.li`
  display: inline-block;
  margin: 0 1rem;
`;

export const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  ${({ pattern }) => pattern && colorPattern(pattern)};
  @media (max-height: 28rem) {
    svg {
      font-size: 3rem;
    }
  }
`;
