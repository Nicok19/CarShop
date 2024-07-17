import React from "react";
import "./bannerStyles.css";


export default function Banner() {

    return (
        <div className="banner">
        <img className="banner__image" src="https://imgur.com/RElHEkJ.jpg" alt="Carshop Elements" />

        <div className="banner__data">
        <div className="banner__elements">

            <h1 className="banner__title">Buy with us</h1>
            <p className="banner__description">Discover a wide range of products from clothing to technology at the best prices and from the best brands.</p>
            <button className="banner__button">Buy Now</button>
            </div>
        </div>


        </div>
    );


}
