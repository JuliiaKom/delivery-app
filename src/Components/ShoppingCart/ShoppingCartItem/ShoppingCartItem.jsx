import css from "./ShoppingCartItem.module.scss";
import {useDispatch} from "react-redux";

import {useEffect, useState} from "react";
import axios from "axios";
import {addProductToCart, deleteProductAtCart, removeProductAtCart} from "../../../data/reducer/ShoppingCartReducer";

const ShoppingCartItem = (props) => {
    let dispatch = useDispatch();
    const [product, setProduct] = useState();


    useEffect(() => {
        axios(`http://localhost:4000/products/?id=${props.shoppingCartItem.key}`)
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
                            {/*<button onClick={() => setQuantity(quantity + 1)}> +</button>*/}
                            <button onClick={() => dispatch(addProductToCart(product.id))}> +</button>
                            <p>{props.shoppingCartItem.value}</p>
                            <button onClick={() => dispatch(deleteProductAtCart(product.id))}> -</button>
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