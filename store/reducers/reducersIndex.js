import {combineReducers} from 'redux'
import {productsReducer} from './productsReducer'

const reducers = {
    products: productsReducer,
}

export default combineReducers(reducers);