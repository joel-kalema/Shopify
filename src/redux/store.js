import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reduces/reducer';

const reducer = combineReducers({
    productReducer: productReducer
});
 
const store = createStore(
    reducer,
    applyMiddleware(thunk),
);
  
export default store;

