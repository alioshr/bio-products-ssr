import * as actions from "../actions/productsActions";
import { setState } from "../../Utilities/utilities";

const initialState = {
  activeCatalog: "bioCloths",
  activeCategory: "allSizes",
  overview: {
    bioCloths: {
      label: "BIO EMBALAGENS",
      background: "/Products/Cloth3.jpg",
      path: "bio-embalagens",
      products: [
        { id: "allSizes", label: "MIX" },
        { id: "medium", label: "MEDIO" },
        { id: "big", label: "GRANDE" },
      ],
    },
    soapWorks: {
      label: "SABOARIA",
      background: "/Products/saboaria1.jpg",
      path: "saboaria",
      products: [
        { id: "shampooConditioner", label: "CABELOS" },
        { id: "soap", label: "SABONETE" },
      ],
    },
  },
  catalog: {
    bioCloths: {
      allSizes: {
        0: {
          images: {
            paths: { 0: "0", 1: "1" },
            alt: "some alt text for all images",
          },
          name: "Amarelinho",
          stock: 20,
          price: 10,
        },
      },
      medium: {
        0: {
          images: {
            paths: { 0: "0", 1: "1" },
            alt: "some alt text for all images",
          },
          name: "Florestal",
          stock: 10,
          price: 50,
        },
      },
      big: {
        0: {
          images: {
            paths: { 0: "0", 1: "1" },
            alt: "some alt text for all images",
          },
          name: "Joblinho",
          stock: 40,
          price: 70,
        },
      },
    },
    soapWorks: {
      shampooConditioner: {
        0: {
          images: {
            paths: { 0: "0", 1: "1" },
            alt: "some alt text for all images",
          },
          name: "Restauração Capilar",
          stock: 20,
          price: 10,
        },
      },
      soap: {
        0: {
          images: {
            paths: { 0: "0", 1: "1" },
            alt: "some alt text for all images",
          },
          name: "Hidrata Tudo",
          stock: 20,
          price: 10,
        },
        1: {
          images: {
            paths: { 0: "0", 1: "1" },
            alt: "some alt text for all images",
          },
          name: "Esfolia Sua Alma",
          stock: 20,
          price: 10,
        },
        2: {
          images: {
            paths: { 0: "0", 1: "1" },
            alt: "some alt text for all images",
          },
          name: "Hortelã Mentolado",
          stock: 20,
          price: 10,
        },
        3: {
          images: {
            paths: { 0: "0", 1: "1" },
            alt: "some alt text for all images",
          },
          name: "Cacau com Chocolate",
          stock: 20,
          price: 10,
        },
      },
    },
  },
  details: {
    bioCloths: {
      allSizes: {},
      medium: {},
      big: {},
    },
    soapWorks: {
      ofuro: {},
      greenClay: {},
      shampooConditioner: {},
      soap: {},
    },
  },
};

const toggleCatalog = (state, payload) => {
  return setState({
    ...state,
    activeCatalog: payload.catalog,
    activeCategory: payload.category,
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
