import { combineReducers } from "redux";
import cartReducer from "./cartReducer";


export const rootreducer = combineReducers({
    cart: cartReducer,
})