import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from  'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    height: 80px;
    align-items: center;
    background-color: black;
    font-size: 16px;
    justify-content: center;
    
    
`
export const NavbarContainer = styled.div`
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 0 30px;
`
export const NavLogo = styled(LinkR)`
    cursor: pointer;
    display: flex;
    justify-self: flex-start;
    font-size: 24px;
    text-decoration: none;
    font-weight: 700;
    color: #fff;

` 
export const NavLinkUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, auto);
    list-style: none;
    text-decoration: none;
    align-items: center;
    justify-content: end;

    @media screen and (max-width: 900px ) {
        display: none;
    }

`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 900px) {
        display: block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate( -100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff
    }
`

export const NavLinkLi = styled.li`
    height: 80px;
    padding-right: 30px
  
`
export const NavLinks = styled(LinkS)`
    align-items: center;
    display: flex;
    color: #fff;
    text-decoration: none;  
    list-style: none;
    cursor: pointer;
    height:  100%;
    font-size: 18px;
    padding-right: 30px
`