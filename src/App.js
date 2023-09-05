import './App.css';
import css from './App.module.scss';

import React from "react";
import {Link, Route, Router, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className={css.delivery}>
        <Navbar/>
        <Homepage/>
        <Footer/>

    </div>
  );
}

export default App;
