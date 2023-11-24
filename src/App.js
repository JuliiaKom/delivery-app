import css from './App.module.scss';
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Main from "./Components/Homepage/main";
import Shop from "./Components/Shop/Shop";
import Product from "./Components/Shop/Product/Product";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

function App(props) {
    return (
        <div className={css.delivery}>
            <Navbar data={props.data.navbar}/>
            <Routes>
                <Route path="/*" element={<Main data={props.data}/>}/>
                <Route path="/:category" element={<Shop/>}/>
                <Route path="/products/:productId" element={<Product/>}/>
                <Route path="/shoppingCart" element={<ShoppingCart/>}></Route>
            </Routes>
            <Footer/>
        </div>







);
}

export default App;
