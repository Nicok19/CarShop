import React from "react";
import "./showApi.css";


export default function ShowApi() {

return(
<section className="showApi">

<div className="showApi__container">

<div className="showApi__data">
<h2 className="showApi__title">This is not my Api</h2>

<p className="showApi__description">I am consuming the product content, including images, texts, and prices, from an API called Platzi Fake API. They are responsible for the product information.</p>
<a href="https://fakeapi.platzi.com/" target="_blank" rel="noopener noreferrer" aria-label="Go to product page">
  <button className="ShowApi__button">Watch Api</button>
</a>
</div>

<img src="https://imgur.com/NvfJlcY.png"  alt="Carshop Elements" className="showApi__image" />

</div>

</section>
)


}