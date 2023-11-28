import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import css from "./Shop.module.scss";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";
import {toggleIsFetching, setProducts} from "../../data/reducer/shopReducer"
import axios from "axios";
import {addProductToCart} from "../../data/reducer/ShoppingCartReducer";

// json-server -p 4000 --watch products.json
// json-server -p 4000 --delay 5000 --watch products.json


const Shop = () => {
    let products = useSelector(state => state.shop.products);
    let isFetching = useSelector(state => state.shop.isFetching);
    let {category} = useParams();

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleIsFetching(true))
        axios(`http://localhost:4000/products/?category=${category}`)
            .then(r => {
                dispatch(toggleIsFetching(false))
                dispatch(setProducts(r.data))
            })
    }, [category])

    const navigate = useNavigate();
    const ShowMoreHandler = (product_id) => {
        navigate(`/products/${product_id}`)
    }

    return (
        <div className={css.Shop}>
            {isFetching ? <Preloader/> : products.map(product =>
                (
                    <div className={css.container} key={product.id}>
                        <img src={product.image} alt=""/>
                        <div className={css.containerProduct}>
                            {product.name}, {product.size}, ${product.price}
                            <div>
                                <button onClick={() => ShowMoreHandler(product.id)}>Show more info</button>
                                {/*<button>Show more info</button>*/}
                                <button onClick={() => dispatch(addProductToCart(product.id))}>Add to cart</button>
                            </div>

                        </div>

                    </div>
                ))

            }
        </div>
    )

    // const [products, setProducts] = useState();

    // useEffect(() => {
    //
    //    let products = StorageService.getAll()
    //
    //     const fetchData = () => {
    //         return Promise.resolve({
    //             json: () => (setProducts(products)),
    //         });
    //     };
    //
    //     fetchData()
    //         .then(response => response.json())
    //         .catch(error => console.error('Error:', error));
    // }, []);
    // const filteredProducts = products?.filter((product) => product.category === category);
    //
    //
    // const navigate = useNavigate();
    // const ShowMoreHandler = (product_id) => {
    //     navigate(`/products/${product_id}`)
    // }
    //
    // return (
    //     <div>
    //         {filteredProducts && (
    //             <div className={css.Shop}>
    //                 {
    //                     isFetching? <Preloader/> : filteredProducts.map(product => (
    //                     <div className={css.container} key={product.id}>
    //                             <img src={product.image} alt=""/>
    //                         <div className={css.containerProduct}>
    //                             {product.name}, {product.size}, ${product.price}
    //                             <div>
    //                                 <button onClick={() => ShowMoreHandler(product.id)}>Show more info</button>
    //                                 {/*<button>Show more info</button>*/}
    //                                 <button>Add to cart</button>
    //                             </div>
    //
    //                         </div>
    //
    //                     </div>
    //                 ))}
    //             </div>
    //         )}
    //     </div>
    // )
}
export default Shop;