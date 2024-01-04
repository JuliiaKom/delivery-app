import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {removeFromFavorites} from "../../data/reducer/FavoritesReducer";
import css from "./FavoriteItem.module.scss";
import {addProductToCart} from "../../data/reducer/ShoppingCartReducer";
import * as Constans from "../../Constants"

const FavoriteItem = (props) => {
    let dispatch = useDispatch();
    const [item, setItem] = useState();

        useEffect(() => {
             axios(`${Constans.API_PRODUCTS}/?id=${props.favoriteItem}`)
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
                        <div className={css.buttonsContainer}>
                            <button onClick={()=>dispatch(removeFromFavorites(item.id))}>Remove</button>
                            <button onClick={() => dispatch(addProductToCart(item.id))}>Add to cart</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    export default FavoriteItem;