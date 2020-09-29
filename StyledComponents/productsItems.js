import styled, {css, keyframes} from "styled-components";
import { mainColors } from "./Library/variables";

export const ProductsWrapper = styled.section`
  background-color: ${mainColors.bodyBackground};
  width: 100vw;
  height: 100vh;
  padding-top: 2rem;
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
  justify-content: ${({fitDisplay}) => fitDisplay ? "center" : "flex-start"};
`;

export const Category = styled.button`
  font-size: 1.3rem;
  font-weight: bold;
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
`

export const CategoryTitle = styled.span`
  width: auto;
  font-weight: bold;
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
