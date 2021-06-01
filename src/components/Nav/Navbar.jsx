import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
    width: 100%;
    height: 90px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: solid 2px #f1f1f1;

    .logo {
        padding: 10px 0;
    }
`;

const Navbar = (props) => {

    return (
        <Nav className="twelve columns">
            <div className="logo">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <img
                        className="navItem"
                        style={{ maxWidth: "150px" }}
                        src="https://i.imgur.com/sgn5zt0.png"
                        alt="Home Button"
                    />
                </Link>
            </div>
            <Burger />
        </Nav>
    );
};

export default Navbar;
