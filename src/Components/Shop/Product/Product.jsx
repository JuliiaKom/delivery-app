import css from "./Product.module.scss";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import fake_data from "../../../data/shop_data.json";

const Product = (props) => {
    // let dispatch = useDispatch();

    useEffect = () => {
        const fetchData = () => {
            return Promise.resolve({
                json: () => (setProduct(fake_data.product)),
            });
        };
    //     fetchData()
    //         .then(response => response.json())
    //         .catch(error => console.error('Error:', error));
    // }, );
    }
    return (
        <div className={css.Product}>
            <div>
                <img src={props.product.image} alt={props.product.title}/>
            </div>
            <h2>{props.product.title}</h2>
            <h3>{props.product.price}$</h3>
            <button>Add to cart</button>
        </div>
    )
}
export default Product;