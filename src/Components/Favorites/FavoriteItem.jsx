import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {removeFromFavorites} from "../../data/reducer/FavoritesReducer";
import css from "./FavoriteItem.module.scss";

const FavoriteItem = (props) => {
    let dispatch = useDispatch();
    const [item, setItem] = useState();

        useEffect(() => {
             axios(`http://localhost:4000/products/?id=${props.favoriteItem}`)
                 .then(r => {
                     setItem(r.data[0])
                 })
         }, [props.favoriteItem])

        return (
            <div>
                {item && (
                    <div className={css.FavoriteItem}>

                        <img src={item.image} alt=""/>
                        <h2>{item.name}</h2>
                        <h2>Price:{item.price}$</h2>
                        <button onClick={()=>dispatch(removeFromFavorites(item.id))}>Remove</button>
                    </div>
                )}
            </div>
        )
    }
    export default FavoriteItem;