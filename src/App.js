import './App.css';
import css from './App.module.scss';
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Main from "./Components/Homepage/main";
import Sale from "./Components/Shop/Sale";
import Girls from "./Components/Shop/Girls";
import Women from "./Components/Shop/Women";
import Men from "./Components/Shop/Men";
import Boys from "./Components/Shop/Boys";
import Shop from "./Components/Shop/Shop";

function App(props) {
    return (
        <div className={css.delivery}>
            <Navbar data={props.data.navbar}/>
            <Routes>
                <Route path="/*" element={<Main data={props.data}/>}/>
                {/*<Route path="/Women" element={<Women/>}/>*/}
                {/*<Route path="/Men" element={<Men/>}/>*/}
                <Route path="/:category" element={<Shop/>}/>
                {/*<Route path="/:category" element={<Shop/>}/>*/}
                {/*<Route path="/Sale" element={<Sale/>}/>*/}
            </Routes>
            <Footer/>

        </div>







);
}

export default App;
