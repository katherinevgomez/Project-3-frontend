import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
// import useToken from "../App/useToken";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 15;

    li {
        padding: 30px 30px;
        font-size: 20px;
        font-weight: 900;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: black;
        position: fixed;
        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 100vh;
        width: 200px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
    }
`;

function RightNav({ props, open }) {
    // let user = JSON.parse(localStorage.getItem("user-info"));
    const history = useHistory();
    function refreshPage() {
        window.location.reload(false);
    }
    function logOut(e) {
        e.preventDefault();
        localStorage.clear();
        history.push("/");
        refreshPage();
    }

    // const logout = (
    //     <Link>
    //         <h2
    //             onClick={() => {
    //                 window.localStorage.removeItem("token");
    //                 // setGState({ ...gState, token: null });
    //             }}
    //         ></h2>
    //     </Link>
    // );

    return (
        <Ul open={open}>
            <li>
                <Link
                    to="/run"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <div className="navItem">Run</div>
                </Link>
            </li>
            <li>
                <Link
                    to="/hike"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <div className="navItem">Hike</div>
                </Link>
            </li>
            <li>
                <Link
                    to="/scenic"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <div className="navItem">Walk</div>
                </Link>
            </li>
            <li>
                <Link to="/" style={{ textDecoration: "none", color: "red" }}>
                    <div className="navItem" id="logoutBtn" onClick={(e) => logOut(e)}>
                        Logout
                    </div>
                </Link>
            </li>
        </Ul>
    );
}

export default RightNav;
