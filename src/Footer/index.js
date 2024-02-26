import React from "react";
import "./FooterStyle.css";

const Footer = ()=>{



    return(
        <div className="footer">
            <div className="footerElements">
                <p>Created by Nicolás Bertinat</p>
                <p>Api: https://api.escuelajs.co/api/v1/products</p>

                <img src="/img/logoWhite.png" alt="logo of the brand" />
                
            </div>
        </div>
    )
}

export default Footer