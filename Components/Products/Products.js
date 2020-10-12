import React, { useState, useEffect } from "react";
import { ProductsWrapper, Title } from "../../StyledComponents/productsItems";
import { useSelector, useDispatch } from "react-redux";
import { useToggleCategory } from "../../store/actions/actionsIndex";
import { mapProducts } from "../../Utilities/utilities";
import Categories from "./Categories";
import ProductPanel from "./ProductPanel";
import Dropdown from "../Dropdown/Dropdown";
import OverviewDB from "../../DB/products.json";
import CatalogDB from "../../DB/catalog.json";

const Products = ({}) => {
  const [navProducts, showNavProducts] = useState(false);
  const [activeProducts, setActiveProducts] = useState(null);
  const store = useSelector((state) => state.products);
  const productsOverview = mapProducts(OverviewDB.overview);
  const activeCategories = OverviewDB.overview[store.activeCatalog].products;
  const dispatch = useDispatch();

  //this will be replaced by SSR 
  useEffect(() => {
    setActiveProducts(
      CatalogDB.catalog[store.activeCatalog][store.activeCategory]
    );
  }, [store.activeCategory, store.activeCatalog]);

  const navProductsToggleHandler = () => showNavProducts((state) => !state);
  const toggleCategoryHandler = (id) => dispatch(useToggleCategory(id));

  return (
    <ProductsWrapper>
      <Title>Nossos Produtos</Title>
      <Dropdown
        onProducts
        dropDownTitle={OverviewDB.overview[store.activeCatalog].label}
        showDropDown={navProducts}
        dropDownTogglerHandler={navProductsToggleHandler}
        subItems={productsOverview}
      />
      <Categories
        active={store.activeCategory}
        categories={activeCategories}
        toggleCategory={toggleCategoryHandler}
      />
      <ProductPanel
        products={activeProducts}
        activeCategory={store.activeCategory}
        activeCatalog={store.activeCatalog}
      />
    </ProductsWrapper>
  );
};
export default Products;