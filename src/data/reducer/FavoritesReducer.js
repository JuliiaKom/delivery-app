import {createSlice} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: [],
    },
    reducers: {
        addToFavorites(state, action) {
            console.log('234234324234')
            let id = action.payload;
            if (!state.favorites.some((pr) => pr.id === id)) {
                state.favorites.push(action.payload);
            }
        },
        removeFromFavorites(state, action) {
           // let id = action.payload;
           //  state.favorites = state.favorites.filter((pr) => pr.id !== id);
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