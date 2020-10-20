import React, {useState, Fragment} from "react";
import ImagesModal from "./ImagesModal";
import {
  Price,
  PriceSpan,
  Off,
  StockAlert,
  Icons,
  IconInner,
  IconSpan,
  Panel,
  Product,
  Hr,
  Span,
  Name,
  Image,
} from "../../StyledComponents/productsItems";
import { Transition } from "react-transition-group";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";



//get state and map it from firebase
const ProductPanel = ({ products, activeCatalog, activeCategory }) => {
  const [showImagesModal, setShowImagesModal] = useState(false);
  const [activeImages, setActiveImages] = useState();

  const imagesModalHandler = (images) => {
    setActiveImages(images);
    setShowImagesModal(true);
  };
  const prod = [];
  for (let key in products) {
    prod.push({
      id: key,
      ...products[key],
      images: {
        ...products[key].images,
        paths: Object.values(products[key].images.paths),
      },
    });
  }

  const prods = prod.map((p) => (
    <Product key={p.id}>
      <StockCTA stock={p.stock} />
      <OffPrice off={p.off} />
      <Image
        onClick={() => imagesModalHandler(p.images)}
        src={p.images.paths[0]}
        alt={p.images.alt}
      />
      <Name>{p.name}</Name>
      <Span>Estoque: {p.stock} unidades</Span>
      <Hr />
      <Prices price={p.price} off={p.off} />
      <IconPanel
        path={`/product/${activeCatalog}?activeCategory=${activeCategory}&id=${p.id}&name=${p.name}`}
      />
    </Product>
  ));
  return (
    <Fragment>
      <Transition in={showImagesModal} timeout={400} mountOnEnter unmountOnExit>
        {(state) => (
          <ImagesModal
            images={activeImages}
            closeModal={() => setShowImagesModal(false)}
            state={state}
          />
        )}
      </Transition>
      <Panel>{prods}</Panel>
    </Fragment>
  );
};

export default ProductPanel;

const IconPanel = ({ path }) =>  (
  <Icons>
  <Link href={path}>
    <IconInner>
      <FontAwesomeIcon icon={faPlusCircle} size="lg" />
      <IconSpan>Info</IconSpan>
    </IconInner>
  </Link>
  <FontAwesomeIcon icon={faShoppingBag} size="2x" />
</Icons>
)
   
  

const StockCTA = ({ stock }) => (
  <StockAlert stock={stock}>Últimas Unidades!</StockAlert>
);

const OffPrice = ({ off }) => <Off off={off}>{off}% OFF!</Off>;

const Prices = ({ price, off }) => {
  let value = <strong>10 BRL</strong>;
  if (off) {
    const offPrice = (price - (price * off) / 100).toFixed(2);
    value = (
      <Fragment>
        <PriceSpan off>{price} BRL</PriceSpan>
        <PriceSpan>{offPrice} BRL</PriceSpan>
      </Fragment>
    );
  }
  return <Price>{value} / unid</Price>;
};
