import css from "./ShoppingCart.module.scss";
import {useSelector} from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import React, {useState} from "react";
import StorageService from "../../services/storage";

const ShoppingCart = () => {
    let products = useSelector(state => state.shoppingCart.productsInCart);


    return (
        <div className={css.ShoppingCart}>

            <div>
                {/*<div className={css.Cart}>*/}
                {products.map(shoppingCartItem => <ShoppingCartItem key={shoppingCartItem.key} shoppingCartItem={shoppingCartItem}/>)}


            </div>

            {/*<div className={css.totalPrice}>*/}
            {/*    <h3>Total Price</h3>*/}
            {/*    {products.reduce((accumulator, productInCart) => {*/}
            {/*        console.log(productInCart);*/}
            {/*        return accumulator + StorageService.getById(productInCart).price;*/}
            {/*    }, 0).toFixed(2)}$*/}
            {/*</div>*/}
        </div>
    )
}

export default ShoppingCart;
