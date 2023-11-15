import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "../reducer/shopReducer";
import productReducer from "../reducer/ProductReducer";

let store = configureStore({
    reducer: {
        shop: shopReducer,
        product: productReducer
    }
})
export default store;