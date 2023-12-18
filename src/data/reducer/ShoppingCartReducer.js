import {createSlice} from "@reduxjs/toolkit";


const shoppingCartSlice = createSlice({
    name: `shoppingCart`,
    initialState: {
        productsInCart: [{}],
        form: {
            name: "name",
            email: "email"

        }
    },
    reducers: {
        addProductToCart(state, action) {
            const id = action.payload;
            const existingProduct = state.productsInCart.find((pr) => pr.key === id);

            if (existingProduct) {
                // If the product exists, update its quantity
                const updatedProducts = state.productsInCart.map((pr) =>
                    pr.key === id ? { ...pr, value: pr.value + 1 } : pr
                );

                return { ...state, productsInCart: updatedProducts };
            } else {
                // If the product doesn't exist, add a new item to the cart
                const new_item = { key: id, value: 1 };
                return {
                    ...state,
                    productsInCart: [...state.productsInCart, new_item]
                };
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

        updateFormVisible: (state, action) => {
            const {field, value} = action.payload;
            return {
                ...state,
                form: {
                    ...state.form,
                    [field]: value,
                },
            }
        }
    }
})
export const {addProductToCart, removeProductAtCart,updateFormVisible,} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
