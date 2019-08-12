import React from "react";
// import style from "./style.css";

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid" style={{borderRadius: "6px", border: "1px solid white", textAlign: "center", background: "green", color: "white", marginRight: "80px", marginLeft: "80px", marginTop: "20px"}}>
            <h1>React Google Books Search</h1>
            <h4>Search for and save books of interest</h4>
        </div>
    );
}

export default Jumbotron;
