const INIT_PRODUCTS_OVERVIEW = "INIT_PRODUCTS_OVERVIEW";
const LOAD_PRODUCTS_CATALOG = "LOAD_PRODUCTS_CATALOG";

const prepInitProductsOverview = () => {
    return {
        type: INIT_PRODUCTS_OVERVIEW
    }
}
//got to change this dummy thing for http requests when implement the database
export const useInitProductsOverview = () => {
    return (dispatch, store) => {
        const overview = store().productsReducer.overview;
        const catalogOverview = [];
        for(let key in overview) {
            catalogOverview.push({
                id: key,
                config: overview[key]
            })
        }
        dispatch(prepInitProductsOverview());
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