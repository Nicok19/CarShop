import React, { useEffect, useState } from "react";
import "./FooterStyle.css";

const Footer = () => {
    const [isDynamicRoute, setIsDynamicRoute] = useState(false);

    useEffect(() => {
        const currentPath = window.location.pathname; 
        const isDynamic = currentPath.includes("/dynamic"); 
        setIsDynamicRoute(isDynamic);
    }, []);

    return (
        <div className={`footer ${isDynamicRoute ? 'sticky-footer' : ''}`}>
            <div className="footerElements">
                <p className="footerElements__author">Created by Nicolás Bertinat</p>
                <p className="footerElements__api">Api: https://api.escuelajs.co/api/v1/products</p>
                <img src="https://i.imgur.com/hDSNsVD.jpg" alt="logo of the brand" />
            </div>
        </div>
    )
}

export default Footer;

