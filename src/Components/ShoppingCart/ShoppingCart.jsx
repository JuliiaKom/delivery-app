import css from "./ShoppingCart.module.scss";
import {useSelector} from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import React, {useState} from "react";
import FormVisible from "./FormVisible/FormVisible";
import StorageService from "../../services/storage";

const ShoppingCart = () => {
    let products = useSelector(state => state.shoppingCart.productsInCart);
    const [formVisible, setFormVisible] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const toggleForm = () => {
        setFormVisible(!formVisible);
    }
    const handleLogin = (password) => {
        const correctPassword = "secret123";
        if (password === correctPassword) {
            alert('Login successful with password');
            setIsAuthenticated(true);

        } else {
            alert('Incorrect password.');
            setIsAuthenticated(false);
        }

    }

    return (
        <div className={css.ShoppingCart}>

            <div className={css.Cart}>

                {products.map(shoppingCartItem => <ShoppingCartItem shoppingCartItem={shoppingCartItem}/>)}
            </div>

            <div className={css.totalPrice}>
                <h3>Total Price</h3>
                {products.reduce((accumulator, productInCart) => {
                console.log(productInCart);
                return accumulator + StorageService.getById(productInCart).price;
            }, 0).toFixed(2)}$</div>

            {formVisible ? (
                <FormVisible closeForm={toggleForm} handleLogin={handleLogin}/>
            ) : (
                <div>
                    <button onClick={toggleForm}>Log In</button>
                </div>
            )}

        </div>
    )
}

export default ShoppingCart;
