import {Link, NavLink, Route, Routes} from "react-router-dom";
import React, {useState}from "react";
import css from "./Navbar.module.scss";
import search from "./../../fashion-images/icons/search.svg"


function Navbar(props) {
    const [linkClicked, setLinkClicked] = useState('');

    return (
        <div className={css.navbar}>
            <div className={css.navbar_row}>
                <a href="/"><img src={props.data.logoImg} alt="Logo"/></a>
                <div className={css.nav}>
                    <NavLink to="/Women" style={{ color: linkClicked === 'women' ? '#137777' : '' }} onClick={() => setLinkClicked('women')}>Women</NavLink>
                    <NavLink to="/Men" style={{ color: linkClicked === 'men' ? '#137777' : '' }} onClick={() => setLinkClicked('men')}>Men</NavLink>
                    <NavLink to="/Boys" style={{ color: linkClicked === 'boys' ? '#137777' : '' }} onClick={() => setLinkClicked('boys')}>Boys</NavLink>
                    <NavLink to="/Girls" style={{ color: linkClicked === 'girls' ? '#137777' : '' }} onClick={() => setLinkClicked('girls')}>Girls</NavLink>
                    <NavLink className={css.navbarBtn} to="/Sale">Sale</NavLink>
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