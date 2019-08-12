import React from "react";
import style from "./style.css"

const Footer = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <footer>
            <p className="pull-right" style={{color: "white", background: "green"}}>
              <i className="fab fa-github" /> Proudly built using React.js
            </p>
            </footer>
        </div>
    );
} 

export default Footer;

