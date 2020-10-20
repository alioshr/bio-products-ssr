import React, { useState, useRef } from "react";
import {
  Wrapper,
  Banner,
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
import { useScrollTo } from "../../Hooks/useScrollTo";
import { Gallery } from "../../UI/Swipeable/Swipeable";
import {useClientWindow} from '../../Hooks/useClientWindow'
import FeaturesDB from "../../DB/catalog.json";

const ProductDetails = ({ product, category, id, name }) => {
  const [qty, setQty] = useState(1);
  const [activeSpec, setActiveSpec] = useState(0);
  const [featureTouched, setFeatureTouched] = useState(false);
  const ref = useRef();
  const window = useClientWindow();

  //this will be replaced by an http request
  const prodDetails = FeaturesDB.details[product][category][id];
  console.log(window?.outerWidth);

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
          () =>
            window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" }),
          500
        )
      : setTimeout(() => useScrollTo(0, 750), 390);
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

  const dummy = [
    `https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/392/1235/Clarifying_gel_cleanser_front__96525.1594249352.jpg?c=2`,
    `https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/393/1238/Clear_Genius_Toner_Front__51597.1594249597.jpg?c=2`,
  ];

  return (
    <Wrapper>
      <Banner maxWidth={window?.outerWidth}>
        <Gallery
          rowWidth="100%"
          rowHeight="100%"
          markerActiveColor="orange"
          markerInactiveColor="lightgray"
          items={dummy}
          childProps={{
            alt: "banner logo",
          }}
          withNav={false}
        />
      </Banner>
      <Details>
        <Title>{name}</Title>
        <Features ref={ref} index={activeSpec} active={featureTouched}>
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
  const name = context.query.name;
  // const res = await fetch(
  //   `https://meli-99509.firebaseio.com/catalog/${product}/${category}/${id}.json`
  // );
  // const json = await res.json();

  return {
    props: {
      product,
      category,
      id,
      name,
    },
  };
}
