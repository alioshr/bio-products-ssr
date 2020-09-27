
const PRODUCTS_OVERVIEW = "PRODUCTS_OVERVIEW";
const LOAD_PRODUCTS_CATALOG = "LOAD_PRODUCTS_CATALOG";

const productsOverview = () => {
    return {
        type: PRODUCTS_OVERVIEW
    }
}
//got to change this dummy thing for http requests when implement the database
export const useProductsOverview = () => {
    return (dispatch, store) => {
        const overview = store().products.overview;
        const catalogOverview = [];
        for(let key in overview) {
            catalogOverview.push({
                id: key,
                ...overview[key]
            })
        }
        dispatch(productsOverview());
        return catalogOverview;
    }
}

const prepLoadProductsCatalog = () => {
    return {
        type: LOAD_PRODUCTS_CATALOG
    }
}

export const useLoadProductsCatalog = (productId) => {
    return (dispatch, store) => {
        const catalog = store().productsReducer.catalog;
        const productDetail = {};
        for (let key in catalog) {
            if(key === productId) {
                Object.assign(productDetail, catalog[key])
            }
        }
        dispatch(prepLoadProductsCatalog())
        return productDetail;
    }
}