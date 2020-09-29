import {mapProducts} from '../../Utilities/utilities'

const PRODUCTS_OVERVIEW = "PRODUCTS_OVERVIEW";
const SHOW_CATEGORIES = "SHOW_CATEGORIES"
export const TOGGLE_CATALOG = 'TOGGLE_CATALOG';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY'

const productsOverview = () => {
    return {
        type: PRODUCTS_OVERVIEW
    }
}

export const useProductsOverview = () => {
    return (dispatch, store) => {
        const overview = store().products.overview;
        dispatch(productsOverview());
        return mapProducts(overview);
    }
}

export const toggleCatalog = (id, defaultCategory) => {
    return {
        type: TOGGLE_CATALOG,
        catalog: id,
        category: defaultCategory
    }
}

export const useToggleCatalog = (id) => {
    return (dispatch, store) => {
        const category = store().products.overview[id].products;
        const defaultActiveCategory = category[0].id;
        dispatch(toggleCatalog(id, defaultActiveCategory))
    }
}

export const useToggleCategory = (id) => {
    return {
        type: TOGGLE_CATEGORY,
        category: id
    }
}

const catalogCategories = () => {
    return {
        type: SHOW_CATEGORIES
    }
}

export const useCatalogCategories = () => {
    return (dispatch, store) => {
        const activeCatalog = store().products.activeCatalog
        const overview = store().products.overview[activeCatalog].products
        dispatch(catalogCategories());
        return overview;
    }
}