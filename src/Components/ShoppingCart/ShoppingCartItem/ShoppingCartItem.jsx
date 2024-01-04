import css from "./ShoppingCartItem.module.scss";
import {useDispatch} from "react-redux";
import * as Constans from "../../../Constants"

import {useEffect, useState} from "react";
import axios from "axios";
import {addProductToCart,  decrementProductAtCart, removeProductAtCart} from "../../../data/reducer/ShoppingCartReducer";

const ShoppingCartItem = (props) => {
    let dispatch = useDispatch();
    const [product, setProduct] = useState();


    useEffect(() => {
        axios(`${Constans.API_PRODUCTS}/?id=${props.shoppingCartItem.key}`)
            .then(r => {
                setProduct(r.data[0])
            })
    }, [props.shoppingCartItem])

    return (
        <div>
            {product && (
                <div className={css.ShoppingCartItem}>
                    <div>
                        <img src={product.image} alt=""/>
                    </div>
                    <h2>{product.name}</h2>
                    <div>
                        <h2 className={css.price}>Price:{product.price}$</h2>
                        <div className={css.quantity}>
                            <button onClick={() => dispatch(addProductToCart(product.id))}> +</button>
                            <p>{props.shoppingCartItem.value}</p>
                            <button onClick={() => dispatch( decrementProductAtCart(product.id))}> -</button>
                        </div>
                    </div>
                    <button className={css.remove} onClick={() => dispatch(removeProductAtCart(product.id))}>Remove at
                        Cart
                    </button>
                </div>
            )}
        </div>
    )
}
export default ShoppingCartItem;