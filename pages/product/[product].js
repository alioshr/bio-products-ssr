import React, { useState } from "react";
import {
  Wrapper,
  Banner,
  BannerImage,
  Details,
  Title,
  Features,
  Feature,
  Panel,
  Add,
  Remove,
  Qty,
  CTA,
  Purchase,
  FeatTitle,
} from "../../StyledComponents/productDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { Backdrop } from "../../StyledComponents/main";
import {useScrollTo} from '../../Hooks/useScrollTo'
import FeaturesDB from "../../DB/catalog.json";

const ProductDetails = ({ product, category, id }) => {
  const [qty, setQty] = useState(1);
  const [activeSpec, setActiveSpec] = useState(0);
  const [featureTouched, setFeatureTouched] = useState(false);

  const ProdDetails = FeaturesDB.details[product][category][id];

  const qtyHandler = (mode) => {
    if (mode === "remove" && qty > 1) {
      setQty((qty) => qty - 1);
    }
    if (mode === "add") {
      setQty((qty) => qty + 1);
    }
  };

  const featureHandler = (index) => {
    index !== activeSpec && setFeatureTouched(true);
    index === activeSpec && setFeatureTouched((state) => !state);
    !featureTouched
      ? setTimeout(
          () => window.scrollTo({ top: 266.8, behavior: "smooth" }),
          500
        )
      :  setTimeout(
        () => useScrollTo(0, 750),
        390
      )
    setActiveSpec(index);
  };

  const feats = ["Sobre", "Como usar", "Ingredientes", "Reviews"];
  const features = feats.map((feature, i) => (
    <Feature
      index={i}
      active={i === activeSpec && featureTouched}
      inactive={i != activeSpec && featureTouched}
      onClick={() => featureHandler(i)}
      key={i}
    >
      <FeatTitle active={i === activeSpec && featureTouched}>
        {feature}
      </FeatTitle>
    </Feature>
  ));

  return (
    <Wrapper>
      <Banner>
        <BannerImage src="/DetailsTest/test.jpg" alt="banner logo" />
        <Title>Café Black</Title>
        <Backdrop style={{ zIndex: 1 }} forElement={true} />
      </Banner>
      <Details>
        <Features index={activeSpec} active={featureTouched}>
          {features}
        </Features>
        <Panel>
          <CTA>Compre</CTA>
          <Purchase>
            <Remove onClick={() => qtyHandler("remove")}>
              <FontAwesomeIcon icon={faMinusCircle} />
            </Remove>
            <Qty>{qty}</Qty>
            <Add onClick={() => qtyHandler("add")}>
              <FontAwesomeIcon icon={faPlusCircle} />
            </Add>
          </Purchase>
        </Panel>
      </Details>
    </Wrapper>
  );
};

export default ProductDetails;

export async function getServerSideProps(context) {
  const product = context.query.product;
  const category = context.query.activeCategory;
  const id = context.query.id;
  // const res = await fetch(
  //   `https://meli-99509.firebaseio.com/catalog/${product}/${category}/${id}.json`
  // );
  // const json = await res.json();

  return {
    props: {
      product,
      category,
      id,
    },
  };
}
