import React, { useEffect } from "react";
import { useStore } from "react-redux";
import {
  Wrapper,
  Banner,
  BannerImage,
  Details,
  Title,
} from "../../StyledComponents/productDetails";

const ProductDetails = ({ product }) => {
  console.log("initial props", product);

  return (
    <Wrapper>
      <Banner>
        <BannerImage src="/DetailsTest/test.jpg" alt="banner logo" />
      </Banner>
      <Details>
        <Title>{product}</Title>
        details
      </Details>
    </Wrapper>
  );
};

export default ProductDetails;

export async function getServerSideProps(context) {
  // const product = context.query.product;
  // const category = context.query.activeCategory;
  // const id = context.query.id;
  // const res = await fetch(
  //   `https://meli-99509.firebaseio.com/catalog/${product}/${category}/${id}.json`
  // );
  // const json = await res.json();

  return {
    props: {
      product: 'json',
    },
  };
}
