import {createSelector, createSlice} from "@reduxjs/toolkit";

const loadProductsFromLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    return { productsInCart: products };
};

const updateLocalStorage = (state) => {
    localStorage.setItem("shoppingCart", JSON.stringify(state.productsInCart));
};

const removeFromLocalStorage = (id) => {
    const currentProducts = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const updatedProducts = currentProducts.filter((pr) => pr.key !== id);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedProducts));
};

const decrementFromLocalStorage = (product) => {
    localStorage.removeItem("shoppingCart");
    localStorage.setItem("shoppingCart", JSON.stringify(product.productsInCart));
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

        decrementProductAtCart(state, action) {
            const id = action.payload;
            const existingProduct = state.productsInCart.find((pr) => pr.key === id);

            if (existingProduct) {
                let newState = undefined
                if (existingProduct.value > 1) {
                    const updatedProducts = state.productsInCart.map((pr) =>
                        pr.key === id ? { ...pr, value: pr.value - 1 } : pr
                    );
                    newState =  { ...state, productsInCart: updatedProducts};

                } else {
                    const filteredProducts = state.productsInCart.filter((pr) => pr.key !== id);
                    newState = { ...state, productsInCart: filteredProducts};
                }
                decrementFromLocalStorage(newState)
                return newState

            } else {
                return state;
            }

        },
        removeProductAtCart(state, action) {
            let id = action.payload;
            removeFromLocalStorage(id);
            return {
                ...state,
                productsInCart: [...state.productsInCart.filter((pr) => pr.key !== id)]
            }
        },
    }
})
export const {addProductToCart,  decrementProductAtCart, removeProductAtCart,updateFormVisible,} = shoppingCartSlice.actions;

export const selectTotalQuantity = (state) => {
    return state.shoppingCart.productsInCart.reduce((total, product) => total + product.value, 0);
};
export const selectTotalQuantitySelector = createSelector(
 selectTotalQuantity,
 (totalQuantity) => totalQuantity);
export default shoppingCartSlice.reducer;
