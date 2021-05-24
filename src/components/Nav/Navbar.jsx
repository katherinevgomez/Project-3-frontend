import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
    width: 100%;
    height: 70px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: solid 2px #f1f1f1;

    .logo {
        padding: 15px 0;

    }


`;


const Navbar = () => {
    return (
        <Nav className="twelve columns">
            <div className="logo">
            <Link to="/" style={{textDecoration: 'none'}}>
                <div className="navItem" style={{color: 'black'}}>Logo Image Here</div>
            </Link>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar