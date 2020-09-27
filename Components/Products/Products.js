import React, {useState} from "react";
import { ProductsWrapper } from "../../StyledComponents/productsItems";
import Dropdown from "../../UI/Dropdown/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { useProductsOverview } from "../../store/actions/actionsIndex";

const Products = ({}) => {
  const dispatch = useDispatch();
  const productsOverview = dispatch(useProductsOverview());
  const [navProducts, showNavProducts] = useState(false);
  const navProductsToggleHandler = () => showNavProducts((state) => !state);
  return (
    <ProductsWrapper>
      <Dropdown
        onProducts
        showDropDown={navProducts}
        dropDownTogglerHandler={navProductsToggleHandler}
        subItems={productsOverview}
      />
    </ProductsWrapper>
  );
};

export default Products;
