import logoImg from "../fashion-images/icons/logo.svg";
import iconHeart from "../fashion-images/icons/heart.svg";
import iconCart from "../fashion-images/icons/cart.svg";
import {Link} from "react-router-dom";
import React from "react";
import categoryImg1 from "../fashion-images/categories/category1.png";
import categoryImg2 from "../fashion-images/categories/category2.png";
import categoryImg3 from "../fashion-images/categories/category3.png";


let data  = {
    navbar: {
        logoImg: logoImg,
        iconHeart:iconHeart,
        iconCart:iconCart
    },

   main: {
        categoryImg1: categoryImg1,
        categoryImg2: categoryImg2,
        categoryImg3: categoryImg3,
    },
    footer: {

    }
}
export default data;