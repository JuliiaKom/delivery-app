import {Link} from "react-router-dom";
import React from "react";
import css from "./Navbar.module.scss";
import search from "./../../fashion-images/icons/search.svg"


function Navbar(props) {
    return (
        <div className={css.navbar}>
            <div className={css.navbar_row}>
                <img src={props.data.logoImg} alt="Logo"/>
                <div className={css.nav}>
                    <Link to="/Women">Women</Link>
                    <Link to="/Men">Men</Link>
                    <Link to="/Boys">Boys</Link>
                    <Link to="/Girls">Girls</Link>
                    <Link className={css.navbarBtn} to="/Sale">Sale</Link>
                </div>
                <div className={css.searchInput}>
                    <form>
                        <input type="search" placeholder="Search..."/>
                            <button type="submit">Search</button>
                    </form>
                </div>
                <div className={css.icons}>
                    <img src={props.data.iconHeart} alt="Heart"/>
                    <img src={props.data.iconCart} alt="Cart"/>
                </div>

            </div>

        </div>
)

}
export default Navbar;