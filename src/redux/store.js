import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { productReducer } from "./actions/actions_types";

const reducer = combineReducers({
    shop: productReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(logger, thunk),
    )
    
)

export default store;