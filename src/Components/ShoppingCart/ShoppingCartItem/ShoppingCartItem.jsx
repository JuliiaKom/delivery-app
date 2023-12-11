import css from "./ShoppingCartItem.module.scss";
import {useDispatch} from "react-redux";

import {useEffect, useState} from "react";
import axios from "axios";
import {removeProductAtCart} from "../../../data/reducer/ShoppingCartReducer";

const ShoppingCartItem = (props) => {
    let dispatch = useDispatch();
    const [product, setProduct] = useState();


    useEffect(() => {
        axios(`http://localhost:4000/products/?id=${props.shoppingCartItem}`)
            .then(r => {
                setProduct(r.data[0])
            })
    }, [props.shoppingCartItem])

    return (
        <div>

        {product && (
            <div className={css.ShoppingCartItem}>

                <img src={product.image} alt=""/>
                <h2>{product.title}</h2>
                <h2>Price:{product.price}$</h2>
                <button onClick={()=>dispatch(removeProductAtCart(product.id))}>Remove at Cart</button>
            </div>
            )}
        </div>
    )
}
export default ShoppingCartItem;