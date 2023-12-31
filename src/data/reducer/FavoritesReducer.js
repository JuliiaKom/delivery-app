import { createSlice } from "@reduxjs/toolkit";

const loadFavoritesFromLocalStorage = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return { favorites };
};

const updateLocalStorage = (state) => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
};

const removeFromLocalStorage = (id) => {
    const currentProducts = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedProducts = currentProducts.filter((pr) => pr !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedProducts));
};

const favoritesSlice = createSlice({
    name: "favorites",
    // initialState: loadFavoritesFromLocalStorage(),
    initialState: loadFavoritesFromLocalStorage(),
    reducers: {
        addToFavorites(state, action) {
            let id = action.payload;
            const existingProduct = state.favorites.find((pr) => pr === id);

            if (!existingProduct) {
                state.favorites.push(action.payload);
                updateLocalStorage(state);
            }
        },
        removeFromFavorites(state, action) {
            let id = action.payload;
            console.log('sdfdsf')
            removeFromLocalStorage(id)
            return {
                ...state,
                favorites: state.favorites.filter((pr) => pr !== id),
            };
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;