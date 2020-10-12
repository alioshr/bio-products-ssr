import styled, { keyframes, css } from "styled-components";
import { mainColors } from "./Library/variables";
import { zIndex } from "../StyledComponents/Library/variables";

export const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${mainColors.bodyBackground};
`;

export const Banner = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
`;

export const BannerImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  z-index: 2;
  font-size: 3rem;
  margin: 1rem auto;
  width: 80%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 60vh;
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
  margin: 2rem 0;
  overflow: hidden;
  height: 237px;
  width: 301px;
  transition: all 400ms ease-in-out;
  ${({ index }) => featuresPositioningMixin(index)};
  ${({active}) => active && css`
  width: 100vw;
  min-height: 100vh;
  margin-top: 0;
  `}
  @media (min-width: 840px) {
    /* make a simple flex deal */
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
  height: 7rem;
  width: 9rem;
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
    `};
  ${({ inactive, index }) =>
    inactive &&
    css`
      transform: translateX(${index % 2 !== 0 ? 300 : -300}%);
      opacity: 0;
    `}
  @media (min-width: 40rem) {
    :hover {
      animation: ${rotateFeat} 800ms ease-in forwards;
    }
  }
`;

export const FeatTitle = styled.h1`
position: relative;
font-size: 1.3rem;
transform: translateY(0);
transition: all 1100ms ease;
${({active}) => active && css`
transform: translateY(-450%);
font-size: 3rem;
`}
`


export const Panel = styled.div`
  display: flex;
  background: linear-gradient(
    45deg,
    palevioletred 50%,
    ${mainColors.accentBackground}
  );
  border-radius: 25px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 80%;
  color: white;
  max-width: 25rem;
  padding: 0.2rem;
`;

export const CTA = styled.button`
  width: 100%;
  height: 4rem;
  align-content: center;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  position: relative;
`;

export const Purchase = styled.div`
  display: flex;
`;

export const Add = styled.button`
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

export const Remove = styled.button`
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

export const Qty = styled.span`
  grid-area: Qty;
  align-self: center;
  font-size: 2rem;
  width: 2rem;
`;
export const Article = styled.article``;
