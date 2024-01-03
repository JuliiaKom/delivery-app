import {createSelector, createSlice} from "@reduxjs/toolkit";

const loadProductsFromLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    return { productsInCart: products };
};

const updateLocalStorage = (state) => {
    localStorage.setItem("shoppingCart", JSON.stringify(state.productsInCart));
};

const shoppingCartSlice = createSlice({
    name: `shoppingCart`,
    initialState:  loadProductsFromLocalStorage(),

    reducers: {
        addProductToCart(state, action) {
            const id = action.payload;
            const existingProduct = state.productsInCart.find((pr) => pr.key === id);

            if (existingProduct) {
                const updatedProducts = state.productsInCart.map((pr) =>
                    pr.key === id ? { ...pr, value: pr.value + 1 } : pr
                );

                const updated_state = { ...state, productsInCart: updatedProducts};
                updateLocalStorage(updated_state)
                return updated_state

            } else {
                const new_item = { key: id, value: 1 };
                const updated_state = {
                    ...state,
                    productsInCart: [...state.productsInCart, new_item],
                };
                updateLocalStorage(updated_state)
                return updated_state
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
