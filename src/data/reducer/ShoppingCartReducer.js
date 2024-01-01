import {createSelector, createSlice} from "@reduxjs/toolkit";


const shoppingCartSlice = createSlice({
    name: `shoppingCart`,
    initialState: {
        productsInCart: [],
    },

    reducers: {
        addProductToCart(state, action) {
            const id = action.payload;
            const existingProduct = state.productsInCart.find((pr) => pr.key === id);

            if (existingProduct) {
                const updatedProducts = state.productsInCart.map((pr) =>
                    pr.key === id ? { ...pr, value: pr.value + 1 } : pr
                );

                return { ...state, productsInCart: updatedProducts};
            } else {
                const new_item = { key: id, value: 1 };
                return {
                    ...state,
                    productsInCart: [...state.productsInCart, new_item],
                };
            }
        },

        deleteProductAtCart(state, action) {
            const id = action.payload;
            const existingProduct = state.productsInCart.find((pr) => pr.key === id);

            if (existingProduct) {
                if (existingProduct.value > 1) {
                    const updatedProducts = state.productsInCart.map((pr) =>
                        pr.key === id ? { ...pr, value: pr.value - 1 } : pr
                    );

                    return { ...state, productsInCart: updatedProducts};
                } else {
                    const filteredProducts = state.productsInCart.filter((pr) => pr.key !== id);
                    return { ...state, productsInCart: filteredProducts};
                }
            } else {
                return state;
            }
        },
        removeProductAtCart(state, action) {
            console.log('ssfsdfsddfdgdfgdfgdffds')
            let id = action.payload;

            return {
                ...state,
                productsInCart: [...state.productsInCart.filter((pr) => pr.key !== id)]
            }
        },
    }
})
export const {addProductToCart, deleteProductAtCart, removeProductAtCart,updateFormVisible,} = shoppingCartSlice.actions;

export const selectTotalQuantity = (state) => {
    return state.shoppingCart.productsInCart.reduce((total, product) => total + product.value, 0);
};
export const selectTotalQuantitySelector = createSelector(
 [selectTotalQuantity],
 (totalQuantity) => totalQuantity);
export default shoppingCartSlice.reducer;
