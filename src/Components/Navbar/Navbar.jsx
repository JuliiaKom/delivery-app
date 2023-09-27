import {Link} from "react-router-dom";
import React from "react";
import css from "./Navbar.module.scss";


function Navbar (props) {
    return(
        <navbar className = {css.navbar}>
                <div className={css.navbar_row}>

                    <div className={css.logo}>
                        <img src={props.data.navbar.logoImg} alt="Logo"/>
                    </div>
                    <div className={css.nav}>
                        <Link to="/Women">Women</Link>
                        <Link to="/Men">Men</Link>
                        <Link to="/Boys">Boys</Link>
                        <Link to="/Girls">Girls</Link>
                        <Link className={css.navbarBtn} to="/Sale">Sale</Link>
                    </div>
                    <input name="myInput" placeholder="Search for products..." />
                    <img src={props.data.navbar.iconHeart} alt="Heart"/>
                    <img src={props.data.navbar.iconCart} alt="Cart"/>
                </div>

        </navbar>
    )

}
export default Navbar;