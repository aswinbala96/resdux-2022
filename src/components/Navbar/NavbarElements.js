import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: none;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
    /* position: sticky; */
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarCointainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width:100%;
    padding:0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: black;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    :hover{
        transition: 0.4s ease-in-out;
        color: hotpink;
    }
`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 855px){
        display: block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: black;
        :hover{
            transition: 0.1s ease-in-out;
            color: hotpink;
        }
    }
`
export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 855px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkR)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-family: 'Space Mono', monospace;
    font-weight: bold;
    cursor: pointer;

    :hover{
        text-decoration: underline;
        text-decoration-color: hotpink;
        transition: opacity 300ms, transform 300ms;
    }

`
