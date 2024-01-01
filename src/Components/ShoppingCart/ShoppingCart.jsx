import css from "./ShoppingCart.module.scss";
import {useSelector} from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import React, {useEffect, useState} from "react";
import axios from "axios";

const ShoppingCart = () => {
    let products = useSelector(state => state.shoppingCart.productsInCart);

    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = (productsData) => {
        return productsData.reduce((acc, product) => {
            const productI = products.find(p => p.key === product.id);
            const productTotalPrice = product.price * productI.value;
            return acc + productTotalPrice;
        }, 0).toFixed(2);
    };

    useEffect(() => {
            const fetchData = async () => {
                const promises = Object.entries(products).map(([index, product]) =>
                    axios(`http://localhost:4000/products/?id=${product.key}`)
                );

                try {
                    const responses = await Promise.all(promises);
                    const productsData = responses.map(response => response.data[0]);
                    const totalPrice = calculateTotalPrice(productsData, products);

                    setTotalPrice(totalPrice);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
        }, [products]);


    return (
         <div className={css.ShoppingCart}>
             <div>
                 {products && products.length > 0 ? (
                         products.map(shoppingCartItem => (
                             <ShoppingCartItem key={shoppingCartItem.key} shoppingCartItem={shoppingCartItem}
                             />
                         ))
                     ) :
                     <p>Cart is empty</p>
                 }
             </div>

            <div className={css.totalPrice}>
                <h3>Total Price</h3>
                <span>{totalPrice}$</span>
            </div>
        </div>
    )
}

export default ShoppingCart;
