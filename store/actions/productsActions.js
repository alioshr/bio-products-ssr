export const TOGGLE_CATALOG = 'TOGGLE_CATALOG';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY'

export const useToggleCatalog = (id) => {
    return {
        type: TOGGLE_CATALOG,
        catalog: id,
    }
}

export const useToggleCategory = (id) => {
    return {
        type: TOGGLE_CATEGORY,
        category: id
    }
}
