import React, { useState, useEffect, createRef } from "react";
import {
  ProductsWrapper,
  Category,
  CategoryTitle,
  CategoryWrapper,
  Title,
} from "../../StyledComponents/productsItems";
import Dropdown from "../../UI/Dropdown/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  useProductsOverview,
  useCatalogCategories,
  useToggleCategory,
} from "../../store/actions/actionsIndex";
import { useClientWindow } from "../../Hooks/useClientWindow";

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
       setFitDevice(elRefs
        .map((el) => el.current.offsetWidth)
        .reduce((a, b, index) => (a + b) + (margin * index)) <= window.innerWidth);       
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
