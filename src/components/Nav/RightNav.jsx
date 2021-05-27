import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


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
            transform: ${({open}) => open ? 'translateX(0)': 'translateX(100%)'};
            top: 0;
            right: 0;
            height: 100vh;
            width: 200px;
            padding-top: 3.5rem;
            transition: transform 0.3s ease-in-out;
        }
`;

function RightNav({open}) {
    return (
        <Ul open={open}>
            <li>
                <Link to="/run" style={{textDecoration: 'none', color: 'black'}}>
                <div className="navItem">Run</div>
                </Link>
            </li>
            <li>
                <Link to="/hike" style={{textDecoration: 'none', color: 'black'}}>
                <div className="navItem">Hike</div>
                </Link>
            </li>
            <li>
                <Link to="/scenic" style={{textDecoration: 'none', color: 'black'}}>
                <div className="navItem">Walk</div>
                </Link>
            </li>
            <li>
                <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>
                    <div className="navItem">Login</div>
                </Link>
            </li>
            <li>
                <Link to="/signup" style={{textDecoration: 'none', color: 'black'}}>
                    <div className="navItem">Sign Up</div>
                </Link>
            </li>
        </Ul>
    )
}

export default RightNav