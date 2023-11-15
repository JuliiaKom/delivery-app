import {createSlice} from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: `shop`,
    initialState: {
        products: [],
        isFetching: true,
    },
    reducers: {
        setProducts(state, action) {
            let tmp = {...state, products: [...action.payload]};
            return tmp;
        },
        toggleIsFetching(state, action) {
            return {...state, isFetching: action.payload}

        }
    }
})
export const {setProducts, toggleIsFetching} = shopSlice.actions;
export default shopSlice.reducer;