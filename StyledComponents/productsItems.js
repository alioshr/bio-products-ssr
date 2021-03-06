import styled, { css, keyframes } from "styled-components";
import { mainColors, zIndex } from "./Library/variables";
import { productsAlerts } from "./Library/mixins";
import { modalEnter, modalLeave } from "./Library/animations";

const productDims = {
  height: "440px",
  width: "300px",
};

export const ProductsWrapper = styled.section`
  background-color: ${mainColors.bodyBackground};
  min-height: 100vh;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 3rem;
  margin-top: 0;
`;

export const CategoryWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  overflow: scroll;
  justify-content: ${({ fitDisplay }) =>
    fitDisplay ? "center" : "flex-start"};
`;

export const Category = styled.button`
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 4rem;
  margin: 0 0.5rem;
  @media (min-width: 40rem) {
    margin: 0 2rem;
    font-size: 2rem;
  }
`;

const categoryAnimation = keyframes`
to {width: 110%}
`;

export const CategoryTitle = styled.span`
  width: auto;
  position: relative;
  ${({ active }) =>
    active &&
    css`
      ::after {
        content: "";
        position: absolute;
        bottom: -0.4rem;
        left: 50%;
        transform: translateX(-50%);
        height: 0.2rem;
        width: 0;
        background-color: ${mainColors.accentOrange};
        animation: ${categoryAnimation} 400ms forwards ease-in;
      }
    `}
`;

export const Panel = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, ${productDims.width});
  grid-gap: 1rem;
  justify-content: center;
  min-height: 100vh;  
`;

export const Product = styled.div`
  position: relative;
  width: ${productDims.width};
  height: ${productDims.height};
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  cursor: pointer;
  object-fit: cover;
  width: 100%;
  border-radius: 5px;
`;

export const ViewImages = styled.div`
  z-index: ${zIndex.modal};
  position: fixed;
  width: fit-content;
  left: 50%;
  top: 50%;
  height: ${({displayHeight}) => displayHeight * 70 / 100}px;
  width: 60vw;
  transform: translateY(-50%) translateX(-50%);
  ${({ state }) =>
    state === "entering" || state === "entered"
      ? modalEnter
      : state === "exiting" || state == "exited"
      ? modalLeave
      : null};

  ${({ displayWidth, displayHeight }) =>
    displayHeight < displayWidth && displayHeight < 448
      ? css`
          top: 5px;
          transform: translateY(0) translateX(-50%);
          height: ${displayHeight - 5}px;
          width: fit-content;
          max-width: 60vw;
        `
      : displayHeight > displayWidth
      ? css`
          width: 100%;
        `
      : null}
`;

export const Name = styled.h3`
  margin: 0;
  padding: 0.5rem 0.5rem 0.5rem 0;
`;

export const Span = styled.div``;

export const Hr = styled.hr`
  border-top: black 1px dotted;
  width: 100%;
`;

export const Price = styled.div``;

export const PriceSpan = styled.span`
  font-weight: bold;
  ${({ off }) =>
    off &&
    css`
      color: gray;
      text-decoration: line-through;
      font-weight: 400;
      margin-right: 0.5rem;
    `}
`;

export const Icons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & svg {
    cursor: pointer;
    transition: all 400ms ease;
  }
  svg:hover {
    color: ${mainColors.accentOrange};
  }
`;

export const IconInner = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & svg {
    transform: rotateZ(0);
    transition: all 400ms ease;
  }
  &:hover svg {
    color: ${mainColors.accentOrange};
    transform: rotateZ(180deg);
  }
`;

export const IconSpan = styled.span`
  margin-left: 0.2rem;
  font-size: 1.3rem;
  transition: all 400ms ease;
  &:hover {
    color: ${mainColors.accentOrange};
  }
`;

export const StockAlert = styled.div`
  ${productsAlerts("stock")};
  display: ${({ stock }) => (stock && stock <= 5 ? "block" : "none")};
`;

export const Off = styled.div`
  ${productsAlerts("off")};
  display: ${({ off }) => (off ? "block" : "none")};
`;
