import React, { useState, useEffect, createRef, Fragment } from "react";
import {
  ProductsWrapper,
  Category,
  CategoryTitle,
  CategoryWrapper,
  Title,
  Panel,
  Product,
  Image,
  Name,
  Span,
  Hr,
  Price,
  Icons,
  IconInner,
  IconSpan,
  StockAlert,
  Off,
  PriceSpan,
  ViewImages,
  ImagesWrapper,
  ImagesMarker,
  ImagesMarkerWrapper,
  ImageArrow,
  ImageInnerWrapper,
} from "../../StyledComponents/productsItems";
import Dropdown from "../../UI/Dropdown/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  useProductsOverview,
  useCatalogCategories,
  useToggleCategory,
} from "../../store/actions/actionsIndex";
import { useClientWindow } from "../../Hooks/useClientWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faPlusCircle,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Transition } from "react-transition-group";
import { Backdrop } from "../../StyledComponents/main";
import { useWindowDimension } from "../../Hooks/useWindowDimension";

const Products = ({}) => {
  const [navProducts, showNavProducts] = useState(false);
  const store = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const productsOverview = dispatch(useProductsOverview());
  const activeCatalogCategories = dispatch(useCatalogCategories());

  const navProductsToggleHandler = () => showNavProducts((state) => !state);
  const toggleCategoryHandler = (id) => dispatch(useToggleCategory(id));

  const [activeProducts, setActiveProducts] = useState(null);

  useEffect(() => {
    setActiveProducts(store.catalog[store.activeCatalog][store.activeCategory]);
  }, [store.activeCategory, store.activeCatalog]);

  return (
    <ProductsWrapper>
      <Title>Nossos Produtos</Title>
      <Dropdown
        onProducts
        dropDownTitle={store.overview[store.activeCatalog].label}
        showDropDown={navProducts}
        dropDownTogglerHandler={navProductsToggleHandler}
        subItems={productsOverview}
      />
      <Categories
        active={store.activeCategory}
        categories={activeCatalogCategories}
        toggleCategory={toggleCategoryHandler}
      />
      <ProductPanel products={activeProducts} />
    </ProductsWrapper>
  );
};
export default Products;

const Categories = ({ categories, toggleCategory, active }) => {
  const catLength = categories.length;
  const [elRefs, setElRefs] = React.useState([]);
  const [fitDevice, setFitDevice] = useState(null);
  const window = useClientWindow();

  useEffect(() => {
    setElRefs((elRefs) =>
      Array(catLength)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [categories]);

  useEffect(() => {
    if (elRefs.length > 0 && elRefs[0].current !== null) {
      const margin = window.innerWidth < 640 ? 8 : 32; //hardcoded the margins
      setFitDevice(
        elRefs
          .map((el) => el.current.offsetWidth)
          .reduce((a, b, index) => a + b + margin * index) <= window.innerWidth
      );
    }
  }, [elRefs]);

  const catTitles = categories.map((category, index) => (
    <Category
      ref={elRefs[index]}
      key={category.id}
      onClick={() => toggleCategory(category.id)}
    >
      <CategoryTitle active={category.id === active}>
        {category.label}
      </CategoryTitle>
    </Category>
  ));
  return <CategoryWrapper fitDisplay={fitDevice}>{catTitles}</CategoryWrapper>;
};

//get state and map it from firebase
const ProductPanel = ({ products }) => {
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
      <IconPanel />
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

const IconPanel = ({}) => (
  <Icons>
    <IconInner>
      <FontAwesomeIcon icon={faPlusCircle} size="lg" />
      <IconSpan>Info</IconSpan>
    </IconInner>
    <FontAwesomeIcon icon={faShoppingBag} size="2x" />
  </Icons>
);

const StockCTA = ({ stock }) => (
  <StockAlert stock={stock} t>
    Últimas Unidades!
  </StockAlert>
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

const ImagesModal = ({ images, state, closeModal }) => {
  const [activePic, setActivePic] = useState(0);
  const [width, height] = useWindowDimension();

  const imgs = images.paths.map((img, i) => (
    <ImageInnerWrapper key={i}>
      <Image
        displayWidth={width}
        displayHeight={height}
        id={img}
        src={img}
        alt={images.alt}
        modal
        slide={activePic}
      />
    </ImageInnerWrapper>
  ));

  const markers = images.paths.map((a, i) => (
    <ImagesMarker
      onClick={() => setActivePic(i)}
      active={i === activePic}
      key={i}
    />
  ));

  const swapPicturesHandler = (direction) => {
    if (activePic < images.paths.length - 1 && direction === "right") {
      setActivePic((state) => state + 1);
    }
    if (activePic > 0 && direction === "left") {
      setActivePic((state) => state - 1);
    }
  };
  return (
    <Fragment>
      <ViewImages displayWidth={width} displayHeight={height} state={state} s>
        <ImagesWrapper>{imgs}</ImagesWrapper>
        <ImagesMarkerWrapper>{markers}</ImagesMarkerWrapper>
        <ImageArrow onClick={() => swapPicturesHandler("left")} position="left">
          <FontAwesomeIcon icon={faChevronLeft} size="4x" />
        </ImageArrow>
        <ImageArrow
          onClick={() => swapPicturesHandler("right")}
          position="right"
        >
          <FontAwesomeIcon icon={faChevronRight} size="4x" />
        </ImageArrow>
      </ViewImages>
      <Backdrop onClick={closeModal} state={state} />
    </Fragment>
  );
};
