import styled, { css, keyframes } from "styled-components";
import {mainColors} from './Library/variables'

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
animation: ${showDropdown} 500ms ease-in forwards;
`;
const hideDropdown = keyframes`
to {transform: translateY(-100%)}
`;
const dropDownExitMixin = css`
transform: translateY(0);
animation: ${hideDropdown} 500ms ease-in forwards;
`
export const Wrapper = styled.div`
  position: fixed;
  background: rgba(86, 20, 238, 1);
  ${wrapperDims};
  ${navItemsFlexStyles};
  transform: translateY(-100%);
  ${({state}) => state === "entering" || state === "entered" ? dropDownEnterMixin : 
  state === "exiting" || state == "exited" ?  dropDownExitMixin : null};
`;

export const List = styled.ul`
  ${wrapperDims};
  margin: 0;
  padding: 0;
  display: flex;
  ${navItemsFlexStyles};
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
  position: fixed;
  margin: 0;
  padding: 0;
  display: flex;
  opacity: 0;
  ${navItemsFlexStyles};
  ${wrapperDims};
  ${({ showBackground }) =>
    showBackground ? enterBackgroundMixin : leaveBackgroundMixin};
  background: linear-gradient(to top, rgba(86, 20, 238, 0.5) 100%, transparent),
    ${({ backgroundImage }) => css`url(${backgroundImage})`} center center/cover
      no-repeat fixed;
`;

export const MenuItem = styled.li`
  z-index: 1;
  margin: 1rem;
  font-weight: bold;
  font-size: 2.9rem;
  ${navItemsFlexStyles};
  &, a {width: 100vw;}
  &:hover a {color: ${mainColors.accentOrange}}
  a {
    text-align: center;
    color: white;
    padding: 2rem;
  }
`;
