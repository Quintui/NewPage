import React from 'react'
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    NavLinkUl,
    NavLinkLi,
    NavLinks,
    MobileIcon,
    NavBtn,
    NavBtnLink
} from './NavBarElements';

import {FaBars} from 'react-icons/fa'
const NavBar = ( {toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to = '/'>
                        NewPage
                    </NavLogo>
                    <MobileIcon onClick = {toggle} >
                        <FaBars/>
                    </MobileIcon>
                    <NavLinkUl>
                        <NavLinkLi>
                            <NavLinks to = '/services'>
                            Services
                            </NavLinks>
                        </NavLinkLi>
                        <NavLinkLi>
                            <NavLinks to = '/examples'>
                               Examples
                            </NavLinks>
                        </NavLinkLi>
                        <NavLinkLi>
                            <NavLinks to = '/contact' >
                                About
                            </NavLinks>
                        </NavLinkLi>
                        <NavLinkLi>
                            <NavLinks to = '/services'>
                            Services
                            </NavLinks>
                        </NavLinkLi>
                        <NavLinkLi>
                            <NavLinks to = '/product'>
                                Product
                            </NavLinks>
                        </NavLinkLi>
                    </NavLinkUl>
                <NavBtn>
                    <NavBtnLink to = '/signin'> Sing In </NavBtnLink>
                </NavBtn>
               </NavbarContainer>
            </Nav>  
        </>
    )
}

export default NavBar
