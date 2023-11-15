import React, {useEffect, useState} from "react";
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import css from "./Shop.module.scss";
import Product from "./Product/Product";
import StorageService from "../../services/storage";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";

const Shop = () => {
    let isFetching = useSelector(state => state.shop.isFetching);
    let {category} = useParams();
    const [products, setProducts] = useState();

    useEffect(() => {

       let products = StorageService.getAll()

        const fetchData = () => {
            return Promise.resolve({
                json: () => (setProducts(products)),
            });
        };

        fetchData()
            .then(response => response.json())
            .catch(error => console.error('Error:', error));
    }, []);
    const filteredProducts = products?.filter((product) => product.category === category);


    const navigate = useNavigate();
    const ShowMoreHandler = (product_id) => {
        navigate(`/products/${product_id}`)
    }

    return (
        <div>
            {filteredProducts && (
                <div className={css.Shop}>
                    {
                        isFetching? <Preloader/> : filteredProducts.map(product => (
                        <div className={css.container} key={product.id}>
                                <img src={product.image} alt=""/>
                            <div className={css.containerProduct}>
                                {product.name}, {product.size}, ${product.price}
                                <div>
                                    <button onClick={() => ShowMoreHandler(product.id)}>Show more info</button>
                                    {/*<button>Show more info</button>*/}
                                    <button>Add to cart</button>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Shop;