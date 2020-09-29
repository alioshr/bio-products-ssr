import { css } from "styled-components";
import { zIndex } from "./variables";

export const toolBarMixin = (
  top = null,
  left = null,
  right = null,
  bottom = null
) => {
  return css`
    position: fixed;
    top: ${top}rem;
    left: ${left}rem;
    right: ${right}rem;
    bottom: ${bottom}rem;
    z-index: ${zIndex.toolbar};
    transition: all 400ms ease-in;
  `;
};

export const hamburgerSpanActive = css`
   span {
    background-color: white;
  }

  span:nth-child(1) {
    width: 100%;
    transform-origin: left;
    transform: rotate(45deg) translate(5%, -240%);
  }

  span:nth-child(2) {
    transform: translateX(-100%);
    opacity: 0;
  }

  span:nth-child(3) {
    width: 100%;
    transform-origin: left;
    transform: rotate(-45deg) translate(5%, 240%);
  }
`;

export const productsAlerts = (alert) => {
  return css`
    position: absolute;
    top: 0.5rem;
    width: fit-content;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: palevioletred;
    ${alert === "off" && "right: .5rem;"}
    ${alert === "stock" && "left: .5rem;"}
  `;
};