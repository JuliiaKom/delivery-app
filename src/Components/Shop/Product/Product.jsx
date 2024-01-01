import css from "./Product.module.scss";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addProductToCart} from "../../../data/reducer/ShoppingCartReducer";
import {toggleIsFetching} from "../../../data/reducer/shopReducer";
import img from "./../../../fashion-images/icons/heart.svg"
import Preloader from "../../Preloader/Preloader";
import axios from "axios";
import {addToFavorites} from "../../../data/reducer/FavoritesReducer";

const Product = (props) => {
    let {productId} = useParams();
    const [product, setProduct] = useState();
    let dispatch = useDispatch();
    let isFetching = useSelector(state => state.shop.isFetching);


    const getProductById = async () => {
        try {
            dispatch(toggleIsFetching(true));

            const response = await axios.get(`http://localhost:4000/products/?id=${productId}`);
            const product = response.data[0];

            setProduct(product);
        } catch (error) {
            console.log("error");
        } finally {
            dispatch(toggleIsFetching(false));
        }
    }

    useEffect(() => {

        if (productId) {
            dispatch(toggleIsFetching(true));
            getProductById();
            dispatch(toggleIsFetching(false));
        }
    }, [productId, dispatch])


    return (
        <div>
            {isFetching ? (
                <Preloader/>
            ) : (
                <div className={css.Product}>
                    {product ? (
                        <>
                            <div>
                                <img src={product.image} alt={product.name}/>
                            </div>
                            <h1>{product.name}</h1>
                            <h3>Price: {product.price}$</h3>
                            <h3>{product.size}</h3>
                            <div>
                                <button onClick={() => dispatch(addProductToCart(product.id))}>Add to cart</button>
                                <button className={css.favoritesBtn}
                                        onClick={() => dispatch(addToFavorites(product.id))}>
                                    <img className={css.heart} src={img} alt="Heart"/>
                                </button>
                            </div>
                        </>
                    ) : (
                        <p>Product not found</p>
                    )}
                </div>
            )}
        </div>
    )
}
export default Product;