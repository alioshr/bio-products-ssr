import styled, { css, keyframes } from "styled-components";

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

export const Wrapper = styled.div`
  position: fixed;
  ${wrapperDims};
  ${navItemsFlexStyles};
  background: rgba(86, 20, 238, 1);
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
`
const leaveBackground = keyframes`to {opacity:0}`;
const leaveBackgroundMixin = css`
opacity: 1;
animation: ${leaveBackground} 700ms ease forwards;
`
export const Background = styled.div`
 position: fixed;
  margin: 0;
  padding: 0;
  display: flex;
  opacity:0;
  ${navItemsFlexStyles};
  ${wrapperDims};
  ${({withBackground}) => withBackground ? enterBackgroundMixin : leaveBackgroundMixin};
`

export const MenuItem = styled.li`
z-index: 1;
  ${navItemsFlexStyles};
  margin: 1rem;
  font-weight: bold;
  font-size: 2.2rem;
  a {
    text-align: center;
    color: white;
    padding: 2rem;
  }
  &,
  a {
    width: 100vw;
  }
`;
