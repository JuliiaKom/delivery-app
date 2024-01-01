import {createSlice} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: [],
    },
    reducers: {
        addToFavorites(state, action) {
            let id = action.payload;
            const existingProduct = state.favorites.find((pr) => {
               return pr === id
            });

            if (!existingProduct) {
                state.favorites.push(action.payload);
            }
        },
        removeFromFavorites(state, action) {
            let id = action.payload;

            return {
                ...state,
                favorites: [...state.favorites.filter((pr) => pr !== id)]
            }
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;