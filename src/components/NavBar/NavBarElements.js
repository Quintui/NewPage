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
    outline: none

` 
export const NavLinkUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, auto);
    list-style: none;
    text-decoration: none;
    align-items: center;
    justify-content: end;

    @media screen and (max-width: 1000px ) {
        display: none;
    }

`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1000px) {
        display: flex;
        align-items: center;
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

export const NavBtn = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    color: #fff;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    border-radius: 20px;
    padding: 10px 20px;
    transition: all 0.3s ease-in-out;
    white-space: nowrap;
    background-color: #fff;
    color: #000000;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    &:hover {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
        
    }
    
`