import styled, { css, keyframes } from "styled-components";
import { mainColors, zIndex } from "./Library/variables";

const navItemsFlexStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const wrapperDims = css`
  width: 100vw;
  height: 100vh;
`;

const showDropdown = keyframes`
to {transform: translateY(0)}
`;
const dropDownEnterMixin = css`
  animation: ${showDropdown} 400ms ease-in forwards;
`;
const hideDropdown = keyframes`
to {transform: translateY(-100%)}
`;
const dropDownExitMixin = css`
  transform: translateY(0);
  animation: ${hideDropdown} 400ms ease-in forwards;
`;
export const TitleWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const Title = styled.span`
  margin-right: 0.5rem;
  font-size: 2rem;
`;

export const Nav = styled.nav`
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(86, 20, 238, 1);
  ${wrapperDims};
  ${navItemsFlexStyles};
  transform: translateY(-100%);
  z-index: ${({ usedOnProducts }) =>
    usedOnProducts ? zIndex.productsDropdown : zIndex.NavDropdown};
  ${({ state }) =>
    state === "entering" || state === "entered"
      ? dropDownEnterMixin
      : state === "exiting" || state == "exited"
      ? dropDownExitMixin
      : null};
`;

export const List = styled.ul`
  ${wrapperDims};
  margin: 0;
  padding: 0;
  height: auto;
  ${navItemsFlexStyles};

  @media(max-height: 28rem) {
    overflow: scroll;
    justify-content: flex-start;
  }
`;

const enterBackground = keyframes`to {opacity: 1}`;
const enterBackgroundMixin = css`
  opacity: 0;
  animation: ${enterBackground} 700ms ease forwards;
`;
const leaveBackground = keyframes`to {opacity:0}`;
const leaveBackgroundMixin = css`
  opacity: 1;
  animation: ${leaveBackground} 700ms ease forwards;
`;
export const Background = styled.div`
  display: none !important;
  cursor: pointer;
  position: fixed;
  margin: 0;
  padding: 0;
  opacity: 0;
  ${navItemsFlexStyles};
  ${wrapperDims};
  ${({ showBackground }) =>
    showBackground ? enterBackgroundMixin : leaveBackgroundMixin};
  background: linear-gradient(to top, rgba(86, 20, 238, 0.5) 100%, transparent),
    ${({ backgroundImage }) => css`url(${backgroundImage})`} center center/cover
      no-repeat fixed;

      @media(min-width: 40rem) and (min-height: 28rem) {
        display: block !important;
      }
`;

export const MenuItem = styled.li`
  z-index: ${zIndex.NavDropdown};
  margin: 0.8rem;
  font-weight: bold;
  font-size: 2.9rem;
  ${navItemsFlexStyles};
  &,
  a,
  span {
    width: 100vw;
  }
  &:hover a,
  &:hover span {
    color: ${mainColors.accentOrange};
  }
  a,
  span {
    text-align: center;
    color: white;
    padding: 0;
  }

  span {
    cursor: pointer;
  }

  @media (min-width: 40rem) {
    margin: 1rem;
    font-size: 2.9rem;
    a,
    span {
      padding: 1.5rem;
    }
  }

  @media(max-height: 28rem) {
    margin: 0;
    font-size: 2rem;
    a,
    span {
      padding: .8rem;
    }
  }
`;
