import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .logo {
        padding: 15px 0;

    }


`;


const Navbar = () => {
    return (
        <Nav className="twelve columns">
            <div className="logo">
            <Link to="/" style={{textDecoration: 'none'}}>
                <div className="navItem">Logo Image Here</div>
            </Link>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar