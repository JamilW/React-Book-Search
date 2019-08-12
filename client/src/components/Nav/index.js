import React from "react";

const Nav = () => {
    return (
        <nav className="nav" style={{padding: "10px", border: "1px solid white", background: "green"}}>
            <p style={{color: "white"}}><strong>Google Books</strong></p>
            <a className="nav-link" href="/" style={{color: "white", fontSize: "18px"}}>Search</a>
            <a className="nav-link" href="/books" style={{color: "white", fontSize: "18px"}}>Saved</a>
        </nav>
    );

}

export default Nav;
