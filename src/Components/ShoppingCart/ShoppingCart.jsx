import css from "./ShoppingCart.module.scss";
import {useSelector} from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem/ProductInCart";
import productInCart from "./ShoppingCartItem/ProductInCart";

const ShoppingCart = () => {
    let products = useSelector(state => state.shoppingCart.productsInCart);

     return (
        <div className={css.ShoppingCart}>
            <div className={css.Form} key="123">
               <h2>text</h2>
                {/*<input type="text"/>*/}
                {/*<h2>text</h2>*/}
                {/* <input type="text"/>*/}
                {/* <h2>text</h2>*/}
                {/* <input type="text"/>*/}
                {/*<div>{products.reduce((accumulator, productInCart) => accumulator + productInCart.price, 0).toFixed(2)}$</div>*/}
             </div>
            <div className={css.Cart}>
                {products.map(productInCart => <ShoppingCartItem productInCart={productInCart}/>)}
            </div>
        </div>
    )
}

export default ShoppingCart;
