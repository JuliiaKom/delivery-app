import {Link, NavLink, Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import css from "./Navbar.module.scss";
import FormVisible from "../ShoppingCart/FormVisible/FormVisible";
import {useSelector} from "react-redux";
import {selectTotalQuantity} from "../../data/reducer/ShoppingCartReducer";


function Navbar(props) {
    const [linkClicked, setLinkClicked] = useState('');
    const [formVisible, setFormVisible] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const totalQuantity = useSelector(selectTotalQuantity);


    const toggleForm = () => {
        setFormVisible(!formVisible);
    }
    const handleLogin = (password) => {
        const correctPassword = "secret123";
        if (password === correctPassword) {
            alert('Login successful with password');
            setIsAuthenticated(true);

        } else {
            alert('Incorrect password.');
            setIsAuthenticated(false);
        }
    }


    return (
        <div className={css.navbar}>
            <div className={css.navbar_row}>
                <a href="/"><img src={props.data.logoImg} alt="Logo"/></a>
                <div className={css.nav}>
                    <NavLink to="/Women" style={{color: linkClicked === 'women' ? '#137777' : ''}}
                             onClick={() => setLinkClicked('women')}>Women</NavLink>
                    <NavLink to="/Men" style={{color: linkClicked === 'men' ? '#137777' : ''}}
                             onClick={() => setLinkClicked('men')}>Men</NavLink>
                    <NavLink to="/Boys" style={{color: linkClicked === 'boys' ? '#137777' : ''}}
                             onClick={() => setLinkClicked('boys')}>Boys</NavLink>
                    <NavLink to="/Girls" style={{color: linkClicked === 'girls' ? '#137777' : ''}}
                             onClick={() => setLinkClicked('girls')}>Girls</NavLink>
                    <NavLink className={css.navbarBtn} to="/Sale">Sale</NavLink>
                </div>
                <div>
                    {formVisible ? (
                        <FormVisible closeForm={toggleForm} handleLogin={handleLogin}/>
                    ) : (
                        <div>
                            <button className={css.btnForm} onClick={toggleForm}>Log In</button>
                        </div>
                    )}
                </div>
                <div className={css.icons}>
                    <NavLink to="/Favorites">
                        <img src={props.data.iconHeart} alt="Heart"/>
                    </NavLink>
                        <NavLink to="/ShoppingCart">
                            <div className={css.cartContainer}>
                                <img src={props.data.iconCart} alt="Cart"/>
                                <span>{totalQuantity}</span>
                                </div>
                        </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;