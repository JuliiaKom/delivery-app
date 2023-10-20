import {Link, Route, Routes} from "react-router-dom";
import React, {useState}from "react";
import css from "./Navbar.module.scss";
import search from "./../../fashion-images/icons/search.svg"
// import Women from "../Shop/Women";


function Navbar(props) {
    const [linkClicked, setLinkClicked] = useState('');

    return (
        <div className={css.navbar}>
            <div className={css.navbar_row}>
                <a href="/"><img src={props.data.logoImg} alt="Logo"/></a>
                <div className={css.nav}>
                    <Link to="/Women" style={{ color: linkClicked === 'women' ? 'blue' : '' }} onClick={() => setLinkClicked('women')}>Women</Link>
                    <Link to="/Men" style={{ color: linkClicked === 'men' ? 'blue' : '' }} onClick={() => setLinkClicked('men')}>Men</Link>
                    <Link to="/Boys" style={{ color: linkClicked === 'boys' ? 'blue' : '' }} onClick={() => setLinkClicked('boys')}>Boys</Link>
                    <Link to="/Girls" style={{ color: linkClicked === 'girls' ? 'blue' : '' }} onClick={() => setLinkClicked('girls')}>Girls</Link>
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

                {/*<div className={css.shopProducts}>*/}
                {/*    <Routes>*/}
                {/*        <Route path="/:category" element={<Women/>}/>*/}
                {/*    </Routes>*/}

                {/*</div>*/}

            </div>
        </div>
    )

}

export default Navbar;