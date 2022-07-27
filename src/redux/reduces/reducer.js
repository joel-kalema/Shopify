import { data } from "./data";
import { SELECT_PRODUCTS } from "../actons/actions";
export const URL = 'http://localhost:4000/'

const intialState = [];

export const setProduct = (product) => ({
    type: SELECT_PRODUCTS,
    payload: product
})

export const productReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case SELECT_PRODUCTS:
        return { ...state, products: payload };
      default:
        return state;
    }
  };

export const postProduct = (state) => async (dispatch) => {
    await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
            query:data
        }),    
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json())
      .then (result => console.log(result.data.categories));
    dispatch(setProduct(state))
}


  
  
  