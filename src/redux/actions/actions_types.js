import axios from "axios";
import * as actionType from './actions'
import { data } from "./data";

const inialeState = {
    products: [],
    cart: [],
    currentItem: null,
}


export const getProduct = (payload) => ({
    type: actionType.GET_PRODUCTS,
    payload,
})

export const addToCart = (itemID) => ({
    type: actionType.ADD_TO_CART,
    payload : {
        id: itemID,
    }
})

export const removeToCart = (itemID) => ({
    type: actionType.REMOVE_TO_CART,
    payload : {
        id: itemID,
    }
})

export const adjustQt = (itemID, value) => ({
    type: actionType.ADJUST_QTY,
    payload : {
        id: itemID,
        qty: value,
    }
})

export const productReducer = (state = inialeState, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCTS:
            return {
                ...state, products: action.payload
            }
        case actionType.ADD_TO_CART:
            const item = state.products.find((prod) => prod.id === action.payload.id);
            const isInCart = state.cart.find((prod) => prod.id === action.payload? true : false); 
            return {
                ...state,
                cart : isInCart
                ? state.cart.map((item) => item.id === action.payload
                ? {...item, qty: item.qty + 1} : item) :
                [...state, {...item, qty: 1}]
            }

        case actionType.REMOVE_TO_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id === action.payload.id)
            }
        case actionType.ADJUST_QTY:
            return {
                ...state,
                cart : state.cart.map((item) => item.id === action.payload.id
                ? {...item, qty: action.payload.qty} : 
                item)
            }
        case actionType.LOAD_CARRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        default:
            return state
    }
}

export const fetchProduct = () => (dispatch) => {
    axios.post('http://localhost:4000', {
        query : data,
    }).then((response) => dispatch(
        getProduct(response.data.data.categories)
    ))
}

