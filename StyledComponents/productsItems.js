import styled, { css, keyframes } from "styled-components";
import { mainColors } from "./Library/variables";
import {productsAlerts} from './Library/mixins'

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
  object-fit: cover;
  width: 100%;
  height: 60%;
  border: 1px solid red;
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
${({off}) => off && css`
color: gray;
text-decoration: line-through;
font-weight: 400;
margin-right: .5rem;
`}
`

export const Icons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StockAlert = styled.div`
  ${productsAlerts("stock")};
  display: ${({ stock }) => (stock && stock <= 5 ? "block" : "none")};
`;

export const Off = styled.div`
  ${productsAlerts("off")};
  display: ${({ off }) => (off ? "block" : "none")};
`;
