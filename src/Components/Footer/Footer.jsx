import css from "./Footer.module.scss";
import iconCart from "../../fashion-images/icons/cart.svg";
import React from "react";
import appStore from "./../../fashion-images/icons/app-store.svg";
import googlePlay from "./../../fashion-images/icons/google-play.svg";
import iconFacebook from "./../../fashion-images/icons/Facebook.svg";
import iconInstagram from "./../../fashion-images/icons/Instagram.svg";
import iconTwitter from "./../../fashion-images/icons/Twitter.svg";
import iconYouTube from "./../../fashion-images/icons/YouTube.svg";

function Footer() {
    return (
        <footer className={css.Footer}>

            <div className={css.contact}>
                <h1 className={css.touch}>Get in touch</h1>
                <p className={css.call}>Call:(405) 555-0128</p>
                <p className={css.call}>Email: hello@createx.com</p>
                <div className={css.iconMessendger}>
                    <img src={iconFacebook} alt="iconFacebook"/>
                    <img src={iconInstagram} alt="iconInstagram"/>
                    <img src={iconTwitter} alt="iconTwitter"/>
                    <img src={iconYouTube} alt="iconYouTube"/>
                </div>
            </div>
            <div className={css.app}>
                <h1 className={css.touch}>Download our app</h1>
                <div className={css.iconApp}>
                    <img src={appStore} alt="appStore"/>
                    <img src={googlePlay} alt="googlePlay"/>
                </div>

            </div>
        </footer>
    )
}

export default Footer;