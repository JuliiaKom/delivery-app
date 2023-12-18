import css from "./ShoppingCartItem.module.scss";
import {useDispatch} from "react-redux";

import {useEffect, useState} from "react";
import axios from "axios";
import {addProductToCart, removeProductAtCart} from "../../../data/reducer/ShoppingCartReducer";

const ShoppingCartItem = (props) => {
    let dispatch = useDispatch();
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState();


    // const calculateTotalItemCount = () => {
    //     return product && product.count ? product.count : 0;
    // };


    useEffect(() => {
        axios(`http://localhost:4000/products/?id=${props.shoppingCartItem.key}`)
            .then(r => {
                console.log(r.data[0]);
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
                            <button onClick={() => setQuantity(quantity - 1)}> -</button>
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