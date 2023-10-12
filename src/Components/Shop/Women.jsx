import React, {useEffect} from "react";
import css from "./Women.module.scss";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../data/reducer/shopReducer";
import Product from "./Product/Product";

const Women = () => {
    let products = useSelector(state => state.shop.products)
    let dispatch = useDispatch();


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/jewelery`)
            .then(res => {
                dispatch(setProducts(res.data))
            })
    })
    return (
        <div className={css.women}>
            {
                products.map(product => <Product product = {product}/>)
            }
        </div>

    )
}

export default Women;