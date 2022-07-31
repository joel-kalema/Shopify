import axios from "axios";
import { data } from "./data";

export const GET_PRODUCTS = 'GET_PRODUCTS';

const inialeState = [];

export const getProduct = (payload) => ({
    type: GET_PRODUCTS,
    payload,
})

export const productReducer = ( state = inialeState, action) => {
    switch (action.type) {
        case GET_PRODUCTS :
            return action.payload
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

