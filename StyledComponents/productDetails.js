import styled, { keyframes, css } from "styled-components";
import { mainColors } from "./Library/variables";
import { zIndex } from "../StyledComponents/Library/variables";

export const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  /* background-color: ${mainColors.bodyBackground}; */
  background-color: white;
`;

export const Banner = styled.div`
  width: 100%;
  max-width:${({maxWidth}) => maxWidth}px;
  height: 55vh;
  position: relative;
  overflow: hidden;
  @media(min-width: 40rem) {
    width: 50%;
    margin: auto;
  }
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  margin: 0;
  font-family: 'Chilanka', cursive;
  @media(min-width: 40rem) {
    margin: 1rem;
  }
`;

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 45vh;
`;

const featuresPositioningMixin = (index) => {
  switch (index) {
    case 0:
      return css``;
    case 1:
      return css`
        display: flex;
        justify-content: flex-end;
      `;
    case 2:
      return css`
        display: flex;
        align-items: flex-end;
      `;
    case 3:
      return css`
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      `;
  }
};

export const Features = styled.div`
  position: relative;
  margin: 1rem 0;
  overflow: hidden;
  height: 200px;
  width: 265px;
  transition: all 400ms ease-in-out;
  ${({ index }) => featuresPositioningMixin(index)};
  ${({ active }) =>
    active &&
    css`
      width: 100vw;
      min-height: 100vh;
      margin-top: 0;
    `}
  @media (min-width: 840px) {
    /* make a simple flex deal */
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
`;

const rotateFeat = keyframes`
to{transform: rotateY(360deg)}
`;

const featureMixin = (index) => {
  switch (index) {
    case 0:
      return css`
        left: 0;
        top: 0;
      `;
    case 1:
      return css`
        right: 0;
        top: 0;
      `;
    case 2:
      return css`
        left: 0;
        bottom: 0;
      `;
    case 3:
      return css`
        right: 0;
        bottom: 0;
      `;
  }
};

export const Feature = styled.div`
  cursor: pointer;
  position: absolute;
  height: 6rem;
  width: 8rem;
  background-color: #f7c68e;
  border-radius: 25px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: all 400ms ease-in;

  ${({ index }) => featureMixin(index)};
  ${({ active }) =>
    active &&
    css`
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 0;
      justify-content: flex-start;
    `};
  ${({ inactive, index }) =>
    inactive &&
    css`
      transform: translateX(${index % 2 !== 0 ? 300 : -300}%);
      opacity: 0;
    `}
    @media(min-width: 40rem) {
      position: relative;
      margin: 1rem;
      ${({ active }) =>
    active &&
    css`
      margin: 0;
    `};
      ${({ inactive, index }) =>
    inactive &&
    css`
      position: absolute;
    `}
    }
`;

export const FeatTitle = styled.h1`
  position: relative;
  font-size: 1.3rem;
  transform: translateY(0);
  transition: all 1100ms ease;
  ${({ active }) =>
    active &&
    css`
      font-size: 3rem;
    `}
`;

export const Panel = styled.div`
  display: flex;
  /* background: linear-gradient(
    45deg,
    palevioletred 50%,
    ${mainColors.accentBackground}
  ); */
  background-color: ${mainColors.accentBackground};
  border-radius: 5px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  color: white;
  max-width: 25rem;
  padding: 0.2rem;
  margin-bottom: 1rem;
`;

export const CTA = styled.button`
  width: 100%;
  height: 3rem;
  align-content: center;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
  position: relative;
`;

export const Purchase = styled.div`
  display: flex;
`;

export const Add = styled.button`
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
`;

export const Remove = styled.button`
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
`;

export const Qty = styled.span`
  grid-area: Qty;
  align-self: center;
  font-size: 1.8rem;
  width: 2rem;
`;
export const Article = styled.article``;

export const Testimony = styled.article`
width: 100%;
color: #c4c4c4; 
font-size: 1.2rem;
position: relative;

::before {
position: absolute;
content: "\201C";
left: -10%;
}

::after {
position: absolute;
content: "\201D";
right: -10%;
}
`;
