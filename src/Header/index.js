import React from "react";
import SearchBar from "./SearchBar";
import "./HeaderStyles.css";

const Header = () => {

    return (
<div className="menuElements">

  <div className="logo">
    <img src="/img/logoOriginal.png" alt="logo of the brand" />
  </div>

<div className="menuAndSearch">

<nav className="menu">
<a href="#">All models</a>
<a href="#">Prices</a>
<a href="#">sell your car</a>
  </nav>


<div className="search">
<img src="/img/mGlass.png" alt="logo of the brand" />
<SearchBar />
</div>

</div>




</div>

    );
}

export default Header;