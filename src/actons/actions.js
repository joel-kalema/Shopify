const SELECT_PRODUCTS = 'SELECT_PRODUCTS'
const URL = 'http://localhost:4000/'
console.log(URL)

const intialState = [];

export const setProduct = (product) => ({
    type: SELECT_PRODUCTS,
    payload: product
})

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SELECT_COUNTRY:
      return { ...state, products: payload };
    default:
      return state;
  }
};

fetch(URL, {
    method: "POST",
    body: JSON.stringify({
        query:data
    }),    
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(response => response.json())
  .then (result => console.log(result.data))

