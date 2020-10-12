import styled, { keyframes, css } from "styled-components";
import { zIndex } from "./Library/variables";
import { modalEnter, modalLeave } from "./Library/animations";

export const Backdrop = styled.div`
  cursor: pointer;
  z-index: ${zIndex.backdrop};
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  ${({ forElement }) =>
    forElement
      ? css`
width: 100%;
height: 100%;
position: absolute;
`
      : css`
width: 100vw;
height: 100vh;
position: fixed;
`};
  ${({ state }) => state  && 'opacity: 0'};
  background: rgba(0, 0, 0, .5);
  ${({ state }) =>
    state === "entering" || state === "entered"
      ? modalEnter
      : state === "exiting" || state == "exited"
      ? modalLeave
      : null};
`;
