import css from "./Product.module.scss";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StorageService from "../../../services/storage";
import {useDispatch, useSelector} from "react-redux";
import {addProductToCart} from "../../../data/reducer/ShoppingCartReducer";
import {toggleIsFetching} from "../../../data/reducer/shopReducer";
import Preloader from "../../Preloader/Preloader";

const Product = () => {
    let {productId} = useParams();
    const [product, setProduct] = useState();
    let dispatch = useDispatch();
    let isFetching = useSelector(state => state.shop.isFetching);



    const getProductById = () => {
        let product = StorageService.getById(productId)
        setProduct(product)
    }

    useEffect(() => {
        dispatch(toggleIsFetching(true));
        getProductById()
        dispatch(toggleIsFetching(false))
    }, [productId])


    return (
        <div>

            {product && (
                // {isFetching ? <Preloader/> :
                        <div className={css.Product}>

                    <div>
                        <img src={product.image} alt={product.title}/>
                    </div>
                    <h1>{product.name}</h1>
                    <h3>Price: {product.price}$</h3>
                    <h3>{product.size}</h3>
                    <button onClick={() => dispatch(addProductToCart(product.id))}>Add to cart</button>
                </div>
            )}
        </div>


)
}
export default Product;