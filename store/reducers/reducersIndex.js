import {combineReducers} from 'redux'
import {navigationReducer} from './navigationReducer'
import {productsReducer} from './productsReducer'

const reducers = {
    products: productsReducer,
    navigation: navigationReducer
}

export default combineReducers(reducers);