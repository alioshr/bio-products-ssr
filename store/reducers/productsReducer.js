import * as actions from "../actions/productsActions";
import { setState } from "../../Utilities/utilities";

const initialState = {
  activeCatalog: "bioCloths",
  activeCategory: "allSizes",
  overview: {
    bioCloths: {
      label: "BIO EMBALAGENS",
      background: "/Products/overview/bioCloths.jpg",
      path: "bio-embalagens",
      products: [
        { id: "allSizes", label: "MIX" },
        { id: "medium", label: "MEDIO" },
        { id: "big", label: "GRANDE" },
      ],
    },
    soapWorks: {
      label: "SABOARIA",
      background: "/Products/overview/soapWorks.jpg",
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
            paths: { 0: "/Products/bioCloths/allSizes/0/0.jpg" },
            alt: "some alt text for all images",
          },
          name: "Amarelinho",
          stock: 5,
          price: 10,
          off: false,
        },
      },
      medium: {
        0: {
          images: {
            paths: { 0: "/Products/bioCloths/medium/0/0.jpg" },
            alt: "some alt text for all images",
          },
          name: "Florestal",
          stock: 10,
          price: 50,
          off: false,
        },
      },
      big: {
        0: {
          images: {
            paths: { 0: "/Products/bioCloths/big/0/0.jpg" },
            alt: "some alt text for all images",
          },
          name: "Joblinho",
          stock: 40,
          price: 70,
          off: false,
        },
      },
    },
    soapWorks: {
      shampooConditioner: {
        0: {
          images: {
            paths: {
              0: "/Products/soapWorks/shampooConditioner/0/0.jpg",
              1: "/Products/soapWorks/shampooConditioner/0/1.jpg",
            },
            alt: "some alt text for all images",
          },
          name: "Restauração Capilar",
          stock: 20,
          price: 10,
          off: false,
        },
      },
      soap: {
        0: {
          images: {
            paths: { 0: "/Products/soapWorks/soap/0/0.jpg" },
            alt: "some alt text for all images",
          },
          name: "Hidrata Tudo",
          stock: 20,
          price: 10,
          off: false,
        },
        1: {
          images: {
            paths: { 0: "/Products/soapWorks/soap/1/0.jpg" },
            alt: "some alt text for all images",
          },
          name: "Esfolia Sua Alma",
          stock: 3,
          price: 10,
          off: false,
        },
        2: {
          images: {
            paths: { 0: "/Products/soapWorks/soap/2/0.jpg" },
            alt: "some alt text for all images",
          },
          name: "Hortelã Mentolado",
          stock: 20,
          price: 10,
          off: 50,
        },
        3: {
          images: {
            paths: { 0: "/Products/soapWorks/soap/3/0.jpg" },
            alt: "some alt text for all images",
          },
          name: "Cacau com Chocolate",
          stock: 20,
          price: 10,
          off: false,
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
