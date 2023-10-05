import './App.css';
import css from './App.module.scss';
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Section from "./Components/Homepage/Section";
function App(props) {
  return (
    <div className={css.delivery}>
        <Navbar data={props.data.navbar}/>
        <Homepage data={props.data.main}/>
        <Section data={props.data.section}/>
        <Footer/>

    </div>
  );
}

export default App;
