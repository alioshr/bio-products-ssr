import * as actions from "../actions/productsActions";
import { setState } from "../../Utilities/utilities";
import Products from '../../DB/products.json'


const initialState = {
  activeCatalog: "bioCloths",
  activeCategory: "allSizes",
};

const toggleCatalog = (state, payload) => {
  return setState({
    ...state,
    activeCatalog: payload.catalog,
    activeCategory: Products.overview[payload.catalog].products[0].id,
  });
};

const toggleCategory = (state, payload) => {
  return setState({ ...state, activeCategory: payload.category });
};

export const productsReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case actions.TOGGLE_CATALOG:
      return toggleCatalog(state, payload);
    case actions.TOGGLE_CATEGORY:
      return toggleCategory(state, payload);
    default:
      return state;
  }
};
