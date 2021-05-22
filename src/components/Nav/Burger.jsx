import React, {useState} from 'react'
import styled from 'styled-components'
import RightNav from './RightNav'

const StyledBurger = styled.div `
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    z-index: 20;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? '#ccc' : '#333'};
        border-radius: 10px;
    }
`;



function Burger() {

    const [open, setOpen] = useState(false)

    return(
        // @styledburger get false open and change to true, if open is true, change to false 
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}> 
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open}/>
        </>
    )
}

export default Burger