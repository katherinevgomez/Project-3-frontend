import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
// added for logout
// import { GlobalCtx } from "../App/useToken";
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

// lines 27-40 added for logout
const Navbar = (props) => {
    let user = JSON.parse(localStorage.getItem("user-info"))
    const history = useHistory();
    function refreshPage() {
        window.location.reload(false);
    }
    function logOut() {  
        localStorage.clear();
        history.push("/");
        refreshPage()
    }

    const logout = (
        <Link>
            <h2
                onClick={() => {
                    window.localStorage.removeItem("token");
                    // setGState({ ...gState, token: null });
                }}
            >
                Logout
            </h2>
        </Link>
    );

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
                    {/* <div className="navItem" style={{color: 'black'}}>Logo Image Here</div> */}
                </Link>
            </div>
            <Burger />
        </Nav>
    );
};

export default Navbar;
