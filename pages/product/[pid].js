import React, {useEffect} from "react";
import {useStore} from 'react-redux'
import {Wrapper, Banner, BannerImage, Details, Title} from '../../StyledComponents/productDetails'

const ProductDetails = () => {
  const store = useStore(state => state.products)  

  useEffect(() => {
     fetch(`https://meli-345234234.firebaseio.com/catalog/${store.activeCatalog}/${store.activeCatagory}/${store.activeProduct}.json`)
     .then(res => res.json())
     .then(data => console.log(data))
  }, [])

  return (
    <Wrapper>
        <Banner>
            <BannerImage src="/DetailsTest/test.jpg" alt="banner logo"/>
        </Banner>
        <Details>
            <Title>Title!</Title>
            details
        </Details>
    </Wrapper>
  );
};

export default ProductDetails;
