import {useSelector} from "react-redux";
import css from "./Favorite.module.scss";
import React from "react";
import FavoriteItem from "./FavoriteItem";

const Favorites = () => {
    const favorites = useSelector(state => state.favoriteItems.favorites);


    return(
            <div className={css.favorite}>
                {favorites.map(f => <FavoriteItem favoriteItem={f}/>)}
            </div>
    )
}
 export default Favorites;