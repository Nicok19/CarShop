import React, { useState, useEffect } from "react";
import "./HeaderStyles.css";

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header__container">
                <a href="/">
                    <img className="header__logo" src="https://imgur.com/IPY5MTo.png" alt="Carshop Elements" />
                </a>
                <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </nav>
                <div className="header__right">
                    <img className="header__icon" src="https://imgur.com/S2vh5Dd.png" alt="Carshop Elements" />
                    <button className="header__menu">Log In</button>
                    {isMobile && (
                        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                            <span className="hamburger__icon"></span>
                        </button>
                    )}
                </div>
            </div>
            {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </header>
    );
}

export default Header;

