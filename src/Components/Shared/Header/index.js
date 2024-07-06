import React from "react";
import "./HeaderStyles.css";


const Header = () => {

    return (
<header className="header">

    <div className="header__container">
       
        <a href="/">
            <img className="header__logo" src="https://imgur.com/IPY5MTo.png" alt="Carshop Elements" />
        </a>
       

        <nav className="header__nav">
        <ul>
            <li>
            <a href="/products">Products</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
            <a href="/contact">Contact</a>
            </li>
            <li>
            <a href="/contact">Contact</a>
            </li>
        </ul>
        </nav>
   
        <div className="header__Ritgh">
   
    <img className="header__icon" src="https://imgur.com/S2vh5Dd.png" alt="Carshop Elements" />

    <button className="header__menu">Log In </button>
    
    </div>




    </div>


</header>

    );
}

export default Header;