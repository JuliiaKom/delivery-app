import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "../reducer/shopReducer";
import productReducer from "../reducer/ProductReducer";
import ShoppingCartReducer from "../reducer/ShoppingCartReducer";
import FavoritesReducer from "../reducer/FavoritesReducer";

let store = configureStore({
    reducer: {
        shop: shopReducer,
        product: productReducer,
        shoppingCart: ShoppingCartReducer,
        favoriteItems: FavoritesReducer
    }
})
export default store;