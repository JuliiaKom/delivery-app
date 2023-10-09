import './App.css';
import css from './App.module.scss';
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Section from "./Components/Homepage/Section";
import {Link, Route, Routes} from "react-router-dom";
import Main from "./Components/Homepage/main";
import Sale from "./Components/Shop/Sale";
import Girls from "./Components/Shop/Girls";
import Women from "./Components/Shop/Women";
import Men from "./Components/Shop/Men";
import Boys from "./Components/Shop/Boys";
function App(props) {
  return (
    <div className={css.delivery}>
        <Navbar data={props.data.navbar}/>
        <Routes>
            <Route path="/*" element={<Main data={props.data}/>}/>
            <Route path="/Women" element={<Women />}/>
            <Route path="/Men" element={<Men />}/>
            <Route path="/Girls" element={<Girls />}/>
            <Route path="/Boys" element={<Boys />}/>
            <Route path="/Sale" element={<Sale />}/>
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
