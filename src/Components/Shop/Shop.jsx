import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import css from "./Shop.module.scss";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";
import {toggleIsFetching, setProducts} from "../../data/reducer/shopReducer"
import axios from "axios";
import {addProductToCart} from "../../data/reducer/ShoppingCartReducer";
import {addToFavorites} from "../../data/reducer/FavoritesReducer";
import * as Constans from "../../Constants"

const Shop = () => {
    let products = useSelector(state => state.shop.products);
    let isFetching = useSelector(state => state.shop.isFetching);
    let {category} = useParams();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleIsFetching(true))
        axios(`${Constans.API_PRODUCTS}/?category=${category}`)
            .then(r => {
                dispatch(toggleIsFetching(false))
                dispatch(setProducts(r.data))
            })
    }, [category])

    const navigate = useNavigate();
    const ShowMoreHandler = (product_id) => {
        navigate(`/products/${product_id}`)
    };


    return (
        <div className={css.Shop}>
            {isFetching ? <Preloader/> : products.map(product =>
                (
                    <div className={css.container} key={product.id}>
                        <img src={product.image} className={css.product} alt=""/>
                        <div className={css.blockProducts}>
                            {product.name}, {product.size}, ${product.price}
                            <div>
                                <button onClick={() => ShowMoreHandler(product.id)}>Show more info</button>
                                <button onClick={() => dispatch(addProductToCart(product.id))}>Add to cart</button>
                                <button onClick={() => dispatch(addToFavorites(product.id))}>Add to Favorites</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Shop;