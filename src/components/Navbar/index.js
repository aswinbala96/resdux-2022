import React from 'react'; 
import {FaBars} from 'react-icons/fa'
import { 
    NavbarCointainer, 
    Nav, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks} from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarCointainer>
                <NavLogo to='/'>m6:resdux.</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />    
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to ="/">HOME</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ="/project">PROJECT</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ="/calendar">CALENDAR</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ="/deliverables">DELIVERABLES</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ='/logistic'>LOGISTICS</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ="/resources">RESOURCES</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarCointainer>
        </Nav>
    </>
  )
};

export default Navbar;