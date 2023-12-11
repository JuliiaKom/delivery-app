import css from "./Product.module.scss";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StorageService from "../../../services/storage";
import {useDispatch, useSelector} from "react-redux";
import {addProductToCart} from "../../../data/reducer/ShoppingCartReducer";
import {toggleIsFetching} from "../../../data/reducer/shopReducer";
import img from "./../../../fashion-images/icons/heart.svg"
import Preloader from "../../Preloader/Preloader";

const Product = (props) => {
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

            {/*{product && (*/}
            {isFetching ? <Preloader/> :
                <div className={css.Product}>
                    <div>
                        <img src={product.image}/>
                        <button className={css.Product.favoritesImg}> <img src={img} alt="Heart"/></button>
                    </div>
                    <h1>{product.name}</h1>
                    <h3>Price: {product.price}$</h3>
                    <h3>{product.size}</h3>

                    <button onClick={() => dispatch(addProductToCart(product.id))}>Add to cart</button>
                </div>
            }
            )
        </div>



    )
}
export default Product;