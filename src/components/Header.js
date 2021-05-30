import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "./Nav/Navbar";

function Header(props) {
    return (
        <nav>
            <Navbar history={props.history} />
        </nav>
    );
}

export default Header;

// className="nav"
