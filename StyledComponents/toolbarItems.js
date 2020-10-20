import styled, { css } from "styled-components";
import { toolBarMixin, hamburgerSpanActive } from "./Library/mixins";
import { mainColors,zIndex } from "./Library/variables";



export const NavigationPanel = styled.div`
  display: none;
  @media (min-width: 40rem) {
    ${toolBarMixin(1, 1)};
    width: 9rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${mainColors.accentOrange};
    border-radius: 35px;
    transition: all 500ms ease-in;

    &:hover {
      background-color: purple;
    }

    ${({ active }) =>
      active === true &&
      css`
        background-color: #f29b38;
        & path {
          fill: white;
        }

        &:hover {
          background-color: #f29b38;

          & path {
            fill: white;
          }
        }
      `}
  }
`;

export const HBWr = styled.div`
  ${toolBarMixin(null, .5, null, 1)};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: #f29b38;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 40rem) {
    display: none;
  }
  ${({ active }) =>
    active === true &&
    css`
      ${hamburgerSpanActive}
    `}
`;

export const HBInnerWr = styled.button`
  background-color: transparent;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 2rem;
  height: 2rem;
  z-index: 30;
  cursor: pointer;
  ${({ active }) =>
    active === true &&
    css`
      ${hamburgerSpanActive}
    `}
`;

export const HBSpan = styled.span`
  width: 80%;
  height: 2px;
  background-color: ${mainColors.bodyBackground};
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
`;

export const LogoWr = styled.div`
  ${toolBarMixin(1, .5)};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: #f29b38;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 40rem) {
    display: none;
  }
`;

export const Logo = styled.li`
  &,
  & svg {
    margin-right: 0;
    width: 44px;
    height: 42px;
  }
  @media (min-width: 40rem) {
    &,
    a {
      height: 2.5rem;
      width: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;
      z-index: 30;
    }
  }
`;

export const Cart = styled.div`
  ${toolBarMixin(null, null, 1, 2)};
  z-index: ${zIndex.cart};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${mainColors.accentOrange};
  height: 4rem;
  justify-content: center;
  & svg {
    font-size: 3rem;
  }
  @media (min-width: 40rem) {
    height: 2rem;
    & svg {
      font-size: 3.2rem;
    }
    ${toolBarMixin(2, null, 1, null)}
    z-index: ${zIndex.cart};
    :hover {
      color: purple;
    }
  }
`;

export const CartCounter = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${mainColors.bodyBackground};
  color: ${mainColors.accentOrange};
  border-radius: 50%;
  border: 1px solid burlywood;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transform: translate(1.1rem, 1.3rem);
  opacity: 0.8;
`;
