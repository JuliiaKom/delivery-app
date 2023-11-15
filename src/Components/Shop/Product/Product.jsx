import css from "./Product.module.scss";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StorageService from "../../../services/storage";

const Product = () => {
    let {productId} = useParams();
    const [product, setProduct] = useState();

    const getProductById = () => {
        let product = StorageService.getById(productId)
        setProduct(product)
    }

    useEffect(() => {
        getProductById()
    }, [productId])

    return (
        <div>
            {product && (
                <div className={css.Product}>
                    <div>
                        <img src={product.image} alt={product.title}/>
                    </div>
                    <h1>{product.name}</h1>
                    <h3>Price: {product.price}$</h3>
                    <h3>{product.size}</h3>
                    <button>Add to cart</button>
                </div>
            )}
        </div>
    )
}
export default Product;