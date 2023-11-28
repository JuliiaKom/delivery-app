import {createSlice} from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: `shoppingCart`,
    initialState: {
        productsInCart: [],
        // counter:
    },
    reducers: {
        addProductToCart(state, action) {
            console.log('234234324234')
            let id = action.payload;
            // let counterSum = action.payload;
            // counterSum.counter = 10;

            if (!state.productsInCart.some(pr => pr.id === id)) {
                return {...state, productsInCart: [...state.productsInCart, action.payload]}
            }
        },
        removeProductAtCart(state, action) {
            console.log('ssfsdfsddfdgdfgdfgdffds')
            let id = action.payload;
            // return {...state, productsInCart: [...state.productsInCart.filter(pr => pr.id !== id)]}

            return {
                ...state,
                productsInCart: [...state.productsInCart.filter((pr) => pr !== id)]
            }

        }
    }
})
export const {addProductToCart, removeProductAtCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
