import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import fake_data from '../../data/shop_data.json'; // Import the JSON data

const Shop = () => {
    console.log('gdfdgdfg')
    // let products = useSelector(state => state.shop.products)
    let {category} = useParams();
    const [data, setData] = useState(null);
    const [products, setProducts] = useState(fake_data.products);

    useEffect(() => {
        // Simulate a fake REST API call
        const fetchData = () => {
            return Promise.resolve({
                json: () => (products),
            });
        };

        fetchData()
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.error('Error:', error));
    }, []);

    const filteredProducts = products.filter((product) => product.category === category);


    return (
        <div>
            {filteredProducts && (
                <ul>
                    {filteredProducts.map(product => (
                        <li key={product.name}>
                            {product.name}, {product.category}, {product.size}, ${product.price}
                            <img src={product.image} alt=""/>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Shop;