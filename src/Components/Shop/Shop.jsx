import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import fake_data from '../../data/shop_data.json';
import css from "./Shop.module.scss";

const Shop = () => {
    let {category} = useParams();
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchData = () => {
            return Promise.resolve({
                json: () => (setProducts(fake_data.products)),
            });
        };

        fetchData()
            .then(response => response.json())
            .catch(error => console.error('Error:', error));
    }, []);
    const filteredProducts = products?.filter((product) => product.category === category);

    // const ShowMoreHandler = () => {
    //   console.log('change value')
    // }
    return (
        <div>
            {filteredProducts && (
                <div className={css.Shop}>
                    {filteredProducts.map(product => (
                        <div className={css.container} key={product.id}>
                                <img src={product.image} alt=""/>
                            <div className={css.containerProduct}>
                                {product.name}, {product.size}, ${product.price}
                                <div>
                                    <button>Show more info</button>
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