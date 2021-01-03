import React from 'react'
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    NavLinkUl,
    NavLinkLi,
    NavLinks,
    MobileIcon
} from './NavBarElements';

import {FaBars} from 'react-icons/fa'
const NavBar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to = '/'>
                        NewPage
                    </NavLogo>
                    <MobileIcon >
                        <FaBars/>
                    </MobileIcon>
                    <NavLinkUl>
                        <NavLinkLi>
                            <NavLinks to = '/services'>
                            Services
                            </NavLinks>
                        </NavLinkLi>
                        <NavLinkLi>
                            <NavLinks to = 'examples'>
                               Examples
                            </NavLinks>
                        </NavLinkLi>
                        <NavLinkLi>
                            <NavLinks >
                                About
                            </NavLinks>
                        </NavLinkLi>
                        <NavLinkLi>
                            <NavLinks>
                                About
                            </NavLinks>
                        </NavLinkLi>
                        <NavLinkLi>
                            <NavLinks>
                                About
                            </NavLinks>
                        </NavLinkLi>
                    </NavLinkUl>

               </NavbarContainer>
            </Nav>  
        </>
    )
}

export default NavBar
