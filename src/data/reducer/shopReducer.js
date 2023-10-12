import {createSlice} from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: `shop`,
    initialState: {
        products: [],
    },
    reducers: {
        setProducts(state, action) {
            debugger;
            let tmp = {...state, products: [...action.payload]};
            return tmp;

        }
    }
})
export const {setProducts} = shopSlice.actions;
export default shopSlice.reducer;