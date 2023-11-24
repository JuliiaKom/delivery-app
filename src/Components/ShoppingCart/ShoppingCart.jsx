import css from "./ShoppingCart.module.scss";
import {useSelector} from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import product from "../Shop/Product/Product";

const ShoppingCart = () => {
    let products = useSelector(state => state.shoppingCart.productsInCart);

     return (
        <div className={css.ShoppingCart}>
            <div className={css.Form}>
               <h2>text</h2>
                <input type="text"/>
                <h2>text</h2>
                 <input type="text"/>
                 <h2>text</h2>
                 <input type="text"/>
             </div>
            <div className={css.Cart}>
                {products.map(productInCart => <ShoppingCartItem product={product}/>)}
            </div>
        </div>
    )
}

export default ShoppingCart;
