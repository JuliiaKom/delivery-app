import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "../reducer/shopReducer";
import productReducer from "../reducer/ProductReducer";
import ShoppingCartReducer from "../reducer/ShoppingCartReducer";

let store = configureStore({
    reducer: {
        shop: shopReducer,
        product: productReducer,
        shoppingCart: ShoppingCartReducer
    }
})
export default store;