import {createStore , combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

import {
    productDetailsReducer,
    productListReducer,

}from "./reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducers";

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,

const cartItemsFromLocalStorage = localStorage.getItem("cartItem")
?JSON.parse(localStotage.getItem("cartItem"))
:[]
});

const initialState={
cart :{
    cartItems: cartItemsFromLocalStorage
 },
};
const middleware= [thunk]

const store = createtStore(
    reducer,
    intialState,
    composeWithDevtools(applyMiddleware(...middleware))

);

export default store;
