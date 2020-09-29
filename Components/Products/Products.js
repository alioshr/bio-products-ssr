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
import { faShoppingBag, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Products = ({}) => {
  const [navProducts, showNavProducts] = useState(false);
  const store = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const productsOverview = dispatch(useProductsOverview());
  const activeCatalogCategories = dispatch(useCatalogCategories());

  const navProductsToggleHandler = () => showNavProducts((state) => !state);
  const toggleCategoryHandler = (id) => dispatch(useToggleCategory(id));

  console.log("active catalog", store.activeCatalog);
  console.log("active category", store.activeCategory);

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
      <ProductPanel />
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

const ProductPanel = ({}) => {
  //get state and map it from firebase
  const test = [];
  for (let i = 0; i < 10; i++) {
    test.push(
      <Product>
        <StockCTA stock={5} />
        <OffPrice off={10} />
        <Image src="/Products/soapWorks/soap/3/0.jpg" />
        <Name>Nome</Name>
        <Span>Categoria</Span>
        <Hr />
        <Span>Estoque: 20 unid</Span>
        <Hr />
        <Prices price={45} off={10} />
        <IconPanel />
      </Product>
    );
  }
  console.log(test);
  return <Panel>{test}</Panel>;
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
