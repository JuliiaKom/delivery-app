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
function App(props) {
  return (
    <div className={css.delivery}>
        <Navbar data={props.data.navbar}/>
        {/*<Homepage data={props.data.main}/>*/}
        {/*<Section data={props.data.section}/>*/}
        <Routes>
            <Route path="/*" element={<Main data={props.data}/>}/>
            <Route path="/Sale" element={<Sale />}/>
            <Route path="/Girls" element={<Girls />}/>
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
