import styled, { css } from "styled-components";
import { toolBarMixin, hamburgerSpanActive } from "./Library/mixins";
import { mainColors } from "./Library/variables";

export const NavigationPanel = styled.div`
  display: none;
  @media (min-width: 40rem) {
    ${toolBarMixin(1, 1)};
    width: 9rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdf3e6;
    border-radius: 35px;
    z-index: 35;
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
  ${toolBarMixin(null, 1, null, 1)};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: #fdf3e6;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 35;
  @media (min-width: 40rem) {
    display: none;
  }
  ${({ active }) =>
    active === true &&
    css`
      background-color: ${mainColors.accentOrange};
      ${hamburgerSpanActive}
    `}
`;

export const HBInnerWr = styled.div`
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
  background-color: #f29b38;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
`;

export const LogoWr = styled.div`
  ${toolBarMixin(1, 1)};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: #fdf3e6;
  z-index: 35;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ active }) =>
    active === true &&
    css`
      background-color: #f29b38;
      & path {
        fill: white;
      }
    `}

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
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-right: 1rem;
  color: #fdf3e6;
  height: 4rem;
  justify-content: center;

  & path {
    font-size: 2.5rem;
  }
  ${toolBarMixin(null, null, 1, 2)};

  @media (min-width: 40rem) {
    height: 2rem;
    & svg {
      font-size: 3.2rem;
    }
    ${toolBarMixin(2, null, 1, null)}
    :hover {
      color: purple;
    }
  }
`;

export const CartCounter = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #f29b38;
  color: white;
  border-radius: 50%;
  border: 1px solid burlywood;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transform: translate(1.1rem, 1.3rem);
  opacity: 0.8;
`;
