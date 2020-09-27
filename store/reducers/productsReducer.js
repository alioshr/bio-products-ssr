import * as actions from '../actions/productsActions'

/* 
Overview
Label - Goes into the dropdpwn title

*/

const initialState = {
  activeProductSection: '',
  overview: {
    bioCloths: {
      label: "BIO EMBALAGENS",
      background: '/Products/Cloth3.jpg',
      path: "bio-embalagens",
      products: {
        allSizes: {
          label: "MIX",
        },
        medium: {
          label: "MEDIO",
        },
        big: {
          label: "GRANDE",
        },
      },
    },
      soapWorks: {
        label: "SABOARIA",
        background: '/Products/saboaria1.jpg',
        path: "saboaria",
        products: {
          ofuro: {
            label: "SAIS",
          },
          greenClay: {
            label: "SKINCARE",
          },
          shampooConditioner: {
            label: "CABELOS",
          },
          soap: {
            label: "SABONETE",
          },
        },
      },
  },
  catalog: {
    bioCloths: {
      info: {
        label: "BIO EMBALAGENS",
      },
      products: {
        allSizes: {
          info: {
            label: "MIX",
          },
          products: {
            1: {
              images: ['Cloth1', 'Cloth2', 'Cloth3'],
              stock: 20,
              price: 10,
              details: "ipsum foo 1",
              label: "Foo1",
            },
          },
        },
        medium: {
          info: {
            label: "MEDIO",
          },
          products: {
            1: {
              images: ['Cloth2'],
              stock: 10,
              price: 50,
              details: "ipsum foo 2",
              label: "Foo2",
            },
          },
        },
        big: {
          info: {
            label: "GRANDE",
          },
          products: {
            1: {
              images: ['Cloth3'],
              stock: 40,
              price: 70,
              details: "ipsum foo 3",
              label: "Foo3",
            },
          },
        },
      },
    },
    soapWorks: {
      info: {
        label: "SABOARIA",
      },
      products: {
        ofuro: {
          info: {
            label: "SAIS",
          },
          products: {
            1: {
              images: ['Soap1'],
              stock: 20,
              price: 10,
              details: "ipsum foo",
              label: "Sal de banho 1",
            },
          },
        },
        greenClay: {
          info: {
            label: "SKINCARE",
          },
          products: {
            1: {
              images: ['Soap1'],
              stock: 20,
              price: 10,
              details: "ipsum foo",
              label: "Argila Jobles",
            },
          },
        },
        shampooConditioner: {
          info: {
            label: "CABELOS",
          },
          products: {
            1: {
              images: ['Soap1'],
              stock: 20,
              price: 10,
              details: "ipsum foo",
              label: "Shampoo Little Joint",
            },
          },
        },
        soap: {
          info: {
            label: "SABONETE",
          },
          products: {
            1: {
              images: ['Soap1'],
              stock: 20,
              price: 10,
              details: "Soap 1 ipsum foo",
              label: "Sabnete 1",
            },
            2: {
              images: ['Soap2'],
              stock: 20,
              price: 10,
              details: "Soap 2 ipsum foo",
              label: "Sabonete 2",
            },
            3: {
              images: ['Soap3'],
              stock: 20,
              price: 10,
              details: "Soap 3 ipsum foo",
              label: "Sabonete 3",
            },
            4: {
              images: ['Soap3'],
              stock: 20,
              price: 10,
              details: "Soap 3 ipsum foo",
              label: "Sabonete 4",
            },
          },
        },
      },
    },
  },
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
